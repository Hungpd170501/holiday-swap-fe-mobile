import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../screens/LoadingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import WelcomeBackScreen from "../screens/WelcomeBackScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="WelcomeBackScreen" component={WelcomeBackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
