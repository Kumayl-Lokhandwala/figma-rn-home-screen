import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText } from 'react-native-global-props';
import { View } from 'react-native';
import MyAppText from './src/components/MyAppText';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load font
  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold':require("./assets/fonts/Poppins-Bold.ttf")
    });

    // Set global Text props after fonts are loaded
    const customTextProps = {
      style: {
        fontFamily: 'Poppins-Regular',
        color: '#fff', // Optional
      },
    };
    setCustomText(customTextProps);
    setFontsLoaded(true);
  };

  // Trigger font loading
  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home"
          component={HomeScreen}
          options={{headerShown:false}}
        
        />




        </Stack.Navigator>
    </NavigationContainer>
  );
}
