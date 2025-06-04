import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { setCustomText } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

// Screens
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AnalyzeScreen from './src/screens/AnalyzeScreen/AnalyzeScreen';
import UPIScreen from './src/screens/UPIScreen/UPIScreen';
import ZypeScreen from './src/screens/ZypeScreen/ZypeScreen';

// Icons
import HomeIcon from './assets/svg/icons/HomeIcon';
import AnalyzeIcon from './assets/svg/icons/AnalyzeIcon';
import UPIIcon from './assets/svg/icons/UPIIcon';
import ZypeIcon from './assets/svg/icons/ZypeIcon';

const Bottom = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync(); // keep splash visible

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
    await SplashScreen.hideAsync(); // hide splash once fonts loaded
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Bottom.Navigator
          initialRouteName="UPI"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#02111A', // Match AnalyzeScreen's defaultTabBarStyle
              borderTopWidth: 0, // Remove border for cleaner look
              height: 60, // Consistent height
              paddingBottom: 5,
            },
            tabBarActiveTintColor: '#0099FF',
            tabBarInactiveTintColor: '#fff',
            tabBarLabelStyle: { fontFamily: 'Poppins-Regular', fontSize: 12 },
            tabBarIcon: ({ focused }) => {
              switch (route.name) {
                case 'Home':
                  return <HomeIcon />;
                case 'Analyze':
                  return <AnalyzeIcon />;
                case 'UPI':
                  return <UPIIcon />;
                case 'ZYPE':
                  return <ZypeIcon />;
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
    </GestureHandlerRootView>
  );
}