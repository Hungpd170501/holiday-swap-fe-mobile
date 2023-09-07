import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../screens/LoadingScreen";
import OnboardingScreen from "../screens/WelcomeScreen";
import WelcomeBackScreen from "../screens/WelcomeBackScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyOPTScreen from "../screens/VerifyOPTScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import CreateNewPassword from "../screens/CreateNewPassword";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="WelcomeScreen" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeBackScreen" component={WelcomeBackScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="VerifyOTP" component={VerifyOPTScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
