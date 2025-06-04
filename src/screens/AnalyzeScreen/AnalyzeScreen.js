import React, { useRef, useMemo, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/AnalyzeScreen/BottomSheetComponent';
import { useNavigation } from '@react-navigation/native';
import { Easing } from 'react-native-reanimated';

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
    easing: Easing.linear, // Use simpler easing to avoid reduceMotion warning
  }), []);

  // Function to present the modal
  const handlePresentModal = useCallback(() => {
    // Hide tab bar before presenting modal
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'none',
      },
    });
    sheetRef.current?.present();
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

  // Ensure tab bar is visible on initial render
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        ...defaultTabBarStyle,
        display: 'flex',
      },
    });
  }, [navigation, defaultTabBarStyle]);

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: '#02111A' }}>
        {/* Trigger to open the modal */}
        <Text
          onPress={handlePresentModal}
          style={{
            padding: 20,
            fontSize: 18,
            color: '#0099FF',
            fontFamily: 'Poppins-Regular',
          }}
        >
          Open Bottom Sheet Modal
        </Text>
        <BottomSheetModal
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={() => {}} // Empty to avoid unnecessary updates
          onDismiss={handleDismiss}
          animationConfigs={animationConfigs}
          enableContentPanningGesture={true}
          enableHandlePanningGesture={true}
          backgroundStyle={{ backgroundColor: '#02111A' }}
          handleIndicatorStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <BottomSheetComponent sheetRef={sheetRef} />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default AnalyzeScreen;