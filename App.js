import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { setCustomText } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import AnalyzeScreen from './src/screen/AnalyzeScreen/AnalyzeScreen';
import UPIScreen from './src/screen/UPIScreen/UPIScreen';
import ZypeScreen from './src/screen/ZypeScreen/ZypeScreen';
import HomeIcon from './assets/svg/icons/HomeIcon';
import AnalyzeIcon from './assets/svg/icons/AnalyzeIcon';
import UPIIcon from './assets/svg/icons/UPIIcon';
import ZypeIcon from './assets/svg/icons/ZypeIcon';

const Bottom = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });

    setCustomText({
      style: {
        fontFamily: 'Poppins-Regular',
        color: '#fff',
      },
    });

    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName="UPI"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#0099FF',
          tabBarInactiveTintColor: '#fff',
          tabBarLabelStyle: { fontFamily: 'Poppins-Regular' },

          tabBarIcon: ({ focused, color, size }) => {
            // You can adjust icon color and size depending on focused state
            const iconColor = focused ? '#fff' : '#888';
            const iconSize = size || 24;

            switch (route.name) {
              case 'Home':
                return <HomeIcon  />;
              case 'Analyze':
                return <AnalyzeIcon  />;
              case 'UPI':
                return <UPIIcon  />;
              case 'ZYPE':
                return <ZypeIcon  />;
              default:
                return null;
            }
          },
        })}
      >
        <Bottom.Screen name="Home" component={HomeScreen} />
        <Bottom.Screen name="Analyze" component={AnalyzeScreen} />
        <Bottom.Screen name="UPI" component={UPIScreen} />
        <Bottom.Screen name="ZYPE" component={ZypeScreen} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
