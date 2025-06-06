// BottomSheetStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BankDetailsScreen from '../screens/BankDetailsScreen/BankDetailsScreen';
import BottomSheetHomeScreen from '../screens/BottomSheetHomeScreen/BottomSheetHomeScreen';

const Stack = createStackNavigator();

const BottomSheetStack = ({ searchQuery, setSearchQuery, sheetRef }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false, // Hide headers for a modal feel
      // You can customize transitions here if needed
    }}
  >
    <Stack.Screen
      name="BottomSheetHome"
      children={({ navigation }) => (
        <BottomSheetHomeScreen
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sheetRef={sheetRef}
          navigation={navigation}
        />
      )}
    />
    <Stack.Screen
      name="BankDetails"
      component={BankDetailsScreen}
    />
    {/* Add more screens as needed */}
  </Stack.Navigator>
);

export default BottomSheetStack;
