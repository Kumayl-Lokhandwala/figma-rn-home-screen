import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BankDetailsScreen from '../screens/BankDetailsScreen/BankDetailsScreen';
import BottomSheetHomeScreen from '../screens/BottomSheetHomeScreen/BottomSheetHomeScreen';

const Stack = createStackNavigator();

const BottomSheetStack = ({ searchQuery, setSearchQuery, sheetRef }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
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
      children={({ navigation, route }) => (
        <BankDetailsScreen
          route={route}
          sheetRef={sheetRef}
          navigation={navigation}
        />
      )}
    />
  </Stack.Navigator>
);

export default BottomSheetStack;