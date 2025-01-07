import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import IntroCarousel from "../screens/IntroCarousel"; // Import the IntroCarousel
import CreateAccountScreen from "../screens/CreateAccountScreen"; // Import the CreateAccountScreen
import VerificationScreen from '../screens/VerificationScreen';
import PasswordCreationScreen from '../screens/PasswordCreationScreen';
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
import ProfileSetupDetails from "../screens/ProfileSetupDetails";
import StreamingScreen from "../screens/StreamingScreen";


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} // Hide the header
        />
        
        {/* Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ 
            headerShown: false, 
            headerStyle: { backgroundColor: "#1a1a1a" }, 
            headerTintColor: "#FF4500" 
          }} 
        />

        {/* Intro Carousel */}
        <Stack.Screen 
          name="IntroCarousel" 
          component={IntroCarousel} 
          options={{ headerShown: false }} // No header for the carousel
        />

        {/* Create Account Screen */}
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen} 
          options={{ 
            headerShown: false,
            headerStyle: { backgroundColor: "#1a1a1a" }, 
            headerTintColor: "#FF4500" 
          }} 
        />

<Stack.Screen name="VerificationScreen" component={VerificationScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="PasswordCreationScreen" component={PasswordCreationScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} options={{ headerShown: false}} />
        <Stack.Screen name="ProfileSetupDetails" component={ProfileSetupDetails} options={{ headerShown: false}} />
        <Stack.Screen name="StreamingScreen" component={StreamingScreen} options={{ headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
