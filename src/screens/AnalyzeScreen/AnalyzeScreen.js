import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';
import MyAppText from '../../components/MyAppText';
import BottomSheetComponent from '../../components/AnalyzeScreen/BottomSheetComponent';

const AnalyzeScreen = () => {
  // Declare sheetRef using useRef for BottomSheetModal
  const sheetRef = useRef(null);

  // Access navigation for controlling the tab bar
  const navigation = useNavigation();

  // Define snapPoints using useMemo
  const snapPoints = useMemo(() => ['35%'], []);

  // Define the default tab bar style to preserve original properties
  const defaultTabBarStyle = useMemo(() => ({
    backgroundColor: '#02111A',
    borderTopWidth: 0,
    height: 60,
    paddingBottom: 5,
  }), []);

  // Memoize animationConfigs to ensure immutability
  const animationConfigs = useMemo(() => ({
    duration: 300,
    easing: Easing.linear,
  }), []);

  // Function to present the modal with a slight delay
  const handlePresentModal = useCallback(() => {
    // Hide tab bar immediately
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'none',
      },
    });

    // Add slight delay to ensure navigation update completes
    setTimeout(() => {
      if (sheetRef.current) {
        sheetRef.current.present();
      }
    }, 50);
  }, [navigation, defaultTabBarStyle]);

  // Handle modal dismiss to restore tab bar
  const handleDismiss = useCallback(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex',
      },
    });
  }, [navigation, defaultTabBarStyle]);

  // Ensure tab bar is visible on initial render and reset modal state
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex',
      },
    });

    // Reset modal state on mount to prevent stale references
    return () => {
      if (sheetRef.current) {
        sheetRef.current.close();
      }
    };
  }, [navigation, defaultTabBarStyle]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <MyAppText style={styles.text}>AnalyzeScreen</MyAppText>
        <TouchableOpacity onPress={handlePresentModal} style={styles.triggerButton}>
          <MyAppText style={styles.triggerText}>Open Bottom Sheet Modal</MyAppText>
        </TouchableOpacity>
        <BottomSheetModal
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={() => {}}
          onDismiss={handleDismiss}
          animationConfigs={animationConfigs}
          enableContentPanningGesture={true}
          enableHandlePanningGesture={true}
          backgroundStyle={{ backgroundColor: '#02111A' }}
          handleIndicatorStyle={{ backgroundColor: '#FFFFFF' }}
          enablePanDownToClose={true} // Allow drag-to-close
        >
          <BottomSheetComponent sheetRef={sheetRef} />
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

export default AnalyzeScreen;

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
  },
  triggerText: {
    fontSize: 18,
    color: '#0099FF',
    fontFamily: 'Poppins-Regular',
  },
});