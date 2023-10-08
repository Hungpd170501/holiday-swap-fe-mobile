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
import ProfileScreen from "../screens/ProfileScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ListDestinationScreen from "../screens/ListDestinationScreen";
import TabNavigation from "./navigationBottomTab";
import SearchDestinationScreen from "../screens/SearchDestinationScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatItemScreen from "../screens/ChatItemScreen";
import ResortList from "../screens/resort/ResortList";
import DetailResort from "../screens/resort/DetailResort";
import ListApartment from "../screens/apartment/ListApartment";
import DetailApartment from "../screens/apartment/DetailApartment";
// import AllScreen from "../screens/DestinationScreen/AllScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Loading"
        // initialRouteName="ListDestinationScreen"
        // initialRouteName="ChatItemScreen"
        initialRouteName="Home"
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
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ChatItemScreen" component={ChatItemScreen} />
        <Stack.Screen name="ResortList" component={ResortList} />
        <Stack.Screen name="DetailResort" component={DetailResort} />
        <Stack.Screen name="ListApartment" component={ListApartment} />
        <Stack.Screen name="DetailApartment" component={DetailApartment} />
        <Stack.Screen
          name="ListDestinationScreen"
          component={ListDestinationScreen}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <Stack.Screen
          name="SearchDestinationScreen"
          component={SearchDestinationScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="root" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
