import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ListDestinationScreen from "../screens/ListDestinationScreen";
import { Entypo } from "@expo/vector-icons";
import LoadingScreen from "../screens/LoadingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OnboardingScreen from "../screens/WelcomeScreen";
import WelcomeBackScreen from "../screens/WelcomeBackScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyOPTScreen from "../screens/VerifyOPTScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import CreateNewPassword from "../screens/CreateNewPassword";
import SignInScreen from "../screens/SignInScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatItemScreen from "../screens/ChatItemScreen";
import ResortList from "../screens/resort/ResortList";
import DetailResort from "../screens/resort/DetailResort";
import ListApartment from "../screens/apartment/ListApartment";
import DetailApartment from "../screens/apartment/DetailApartment";
import SearchDestinationScreen from "../screens/SearchDestinationScreen";

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
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
