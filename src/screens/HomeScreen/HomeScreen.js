import React, { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useBackHandler } from '@react-native-community/hooks';
import MyAppText from '../../components/MyAppText';
import BottomSheetStack from '../../stacks/BottomSheetStack';

// Animated Backdrop Component
const BackdropComponent = ({ style, animatedIndex, onPress }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animatedIndex.value,
      [-1, 0, 1],
      [0, 0.5, 0.5],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  return (
    <TouchableOpacity
      style={[style, styles.backdrop]}
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityLabel="Close bottom sheet"
      accessibilityRole="button"
    >
      <Animated.View style={[styles.overlay, animatedStyle]} />
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
  const sheetRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derived state for search query
  const filteredSearchQuery = useMemo(() => {
    return searchQuery.length >= 3 ? searchQuery : '';
  }, [searchQuery]);

  const snapPoints = useMemo(() => ['50%', '75%'], []);
  const defaultTabBarStyle = useMemo(() => ({
    backgroundColor: '#02111A',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    height: 60,
    paddingBottom: 5,
  }), []);
  const animationConfigs = useMemo(() => ({
    duration: 300,
    easing: Easing.linear,
  }), []);

  const handlePresentModal = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'none',
      },
    });
    setTimeout(() => {
      if (sheetRef.current) {
        sheetRef.current.present();
        sheetRef.current.snapToIndex(0);
        setIsModalOpen(true);
      }
    }, 50);
  }, [navigation, defaultTabBarStyle]);

  const handleDismiss = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex',
      },
    });
    setSearchQuery('');
    setIsModalOpen(false);
    Keyboard.dismiss();
  }, [navigation, defaultTabBarStyle]);

  const handleBackdropPress = useCallback(() => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  }, []);

  // Handle system back gesture
  useBackHandler(() => {
    // Get the current route name from the nested stack navigator
    const currentRoute = navigation.getState()?.routes[navigation.getState().index]?.state?.routes?.slice(-1)[0]?.name;

    if (isModalOpen && sheetRef.current) {
      if (currentRoute === 'BankDetails') {
        // Navigate back to BottomSheetHome within the modal
        navigation.navigate('BottomSheetHome');
        return true; // Prevent default back action
      } else {
        // Close the modal if not on BankDetailsScreen
        sheetRef.current.close();
        return true; // Prevent default back action
      }
    }
    if (isKeyboardVisible || searchQuery) {
      Keyboard.dismiss();
      sheetRef.current?.snapToIndex(0);
      setSearchQuery('');
      return true; // Prevent default back action
    }
    return false; // Allow default back action if modal is not open
  });

  // Listen for keyboard events
  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      if (sheetRef.current) {
        sheetRef.current.snapToIndex(0);
        setSearchQuery('');
      }
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  // Reset tab bar on mount and cleanup on unmount
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex',
      },
    });
    return () => {
      if (sheetRef.current) {
        sheetRef.current.close();
      }
    };
  }, [navigation, defaultTabBarStyle]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <MyAppText style={styles.text}>HomeScreen</MyAppText>
        <TouchableOpacity onPress={handlePresentModal} style={styles.triggerButton}>
          <MyAppText style={styles.triggerText}>Open Bottom Sheet Modal</MyAppText>
        </TouchableOpacity>
        <BottomSheetModal
          ref={sheetRef}
          snapPoints={snapPoints}
          onDismiss={handleDismiss}
          animationConfigs={animationConfigs}
          enableContentPanningGesture
          enableHandlePanningGesture
          backgroundStyle={styles.bottomSheetBackground}
          handleIndicatorStyle={styles.handleIndicator}
          enablePanDownToClose
          backdropComponent={(props) => (
            <BackdropComponent
              {...props}
              animatedIndex={props.animatedIndex}
              onPress={handleBackdropPress}
            />
          )}
        >
          <BottomSheetStack
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sheetRef={sheetRef}
          />
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02111A',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  triggerButton: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#02111A',
    borderRadius: 10,
    borderColor: '#0099FF',
    borderWidth: 1,
  },
  triggerText: {
    fontSize: 18,
    color: '#0099FF',
    fontFamily: 'Poppins-Regular',
  },
  bottomSheetBackground: {
    backgroundColor: '#02111A',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  handleIndicator: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});