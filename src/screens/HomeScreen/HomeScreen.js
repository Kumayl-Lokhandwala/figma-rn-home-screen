import React, { useRef, useMemo, useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';
import { useBackHandler } from '@react-native-community/hooks';
import BottomSheetHomeComponent from '../../components/HomeScreen/BottomSheetHomeComponent';
import MyAppText from '../../components/MyAppText';
import PopularBanks from '../../components/HomeScreen/PopularBanks';
import AllBanks from '../../components/HomeScreen/AllBanks';

const BackdropComponent = ({ onPress }) => (
  <TouchableOpacity
    style={styles.backdrop}
    activeOpacity={0.8}
    onPress={onPress}
  />
);

const HomeScreen = () => {
  const sheetRef = useRef(null);
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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
        display: 'none', // Hide tab bar when opening bottom sheet
      },
    });
    setTimeout(() => {
      if (sheetRef.current) {
        sheetRef.current.present();
        sheetRef.current.snapToIndex(0); // Ensure initial snap point
      }
    }, 50);
  }, [navigation, defaultTabBarStyle]);

  const handleDismiss = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex', // Show tab bar only on dismiss
      },
    });
    setSearchQuery(''); // Clear search on dismiss
    Keyboard.dismiss(); // Ensure keyboard is dismissed
  }, [navigation, defaultTabBarStyle]);

  // Handle backdrop press to close bottom sheet
  const handleBackdropPress = useCallback(() => {
    if (sheetRef.current) {
      sheetRef.current.close(); // Close bottom sheet, triggering onDismiss
    }
  }, []);

  // Handle system back gesture
  useBackHandler(() => {
    if (sheetRef.current && (isKeyboardVisible || searchQuery)) {
      Keyboard.dismiss(); // Dismiss keyboard
      sheetRef.current.snapToIndex(0); // Snap to 50%
      setSearchQuery(''); // Clear search query
      // Do NOT restore tab bar here; keep it hidden
      return true; // Prevent default back action
    }
    return false; // Allow default back action if bottom sheet is not open
  });

  // Listen for keyboard events
  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      if (sheetRef.current) {
        sheetRef.current.snapToIndex(0); // Snap to 50% when keyboard hides
        setSearchQuery(''); // Clear search query
        // Do NOT restore tab bar here; keep it hidden
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
        display: 'flex', // Initial state: tab bar visible
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
          backdropComponent={(props) => <BackdropComponent {...props} onPress={handleBackdropPress} />}
        >
          <BottomSheetScrollView style={styles.bottomSheetContent}>
            <BottomSheetHomeComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} sheetRef={sheetRef} />
            <PopularBanks searchQuery={searchQuery} />
            <AllBanks searchQuery={searchQuery} />
          </BottomSheetScrollView>
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
  bottomSheetContent: {
    flex: 1,
    backgroundColor: '#02111A',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black backdrop
  },
});