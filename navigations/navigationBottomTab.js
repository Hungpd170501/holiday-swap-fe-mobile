import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ListDestinationScreen from "../screens/ListDestinationScreen";
import { Entypo } from "@expo/vector-icons";
import LoadingScreen from "../screens/LoadingScreen";
import OnboardingScreen from "../screens/WelcomeScreen";
import WelcomeBackScreen from "../screens/WelcomeBackScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyOPTScreen from "../screens/VerifyOPTScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import CreateNewPassword from "../screens/CreateNewPassword";
import SignInScreen from "../screens/SignInScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#2196F3" : "#000000";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "ListDestination") {
            iconName = "shop";
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return (
            <Entypo
              name={iconName}
              size={size}
              color={iconColor}
              style={{ marginTop: 10 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" options={{ tabBarLabel: "" }}>
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Homes" component={HomeScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            {/* <Stack.Screen name="WelcomeScreen" component={OnboardingScreen} />
            <Stack.Screen
              name="WelcomeBackScreen"
              component={WelcomeBackScreen}
            />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="VerifyOTP" component={VerifyOPTScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="CreateNewPassword"
              component={CreateNewPassword}
            />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
              name="HotelDetailScreen"
              component={HotelDetailScreen}
            />

            <Stack.Screen
              name="CreateAccountScreen"
              component={CreateAccountScreen}
            /> */}
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="ListDestination"
        component={ListDestinationScreen}
        options={{ tabBarLabel: "" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
