import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../screens/loading/LoadingScreen";
import OnboardingScreen from "../screens/welcome/WelcomeScreen";
import WelcomeBackScreen from "../screens/welcome/WelcomeBackScreen";
import SignUpScreen from "../screens/signup/SignUpScreen";
import VerifyOPTScreen from "../screens/verifyOTP/VerifyOPTScreen";
import ForgotPasswordScreen from "../screens/password/ForgotPasswordScreen";
import CreateNewPassword from "../screens/password/CreateNewPassword";
import CreateAccountScreen from "../screens/createaccount/CreateAccountScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import HotelDetailScreen from "../screens/HotelDetailScreen";
import SignInScreen from "../screens/signin/SignInScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ListDestinationScreen from "../screens/ListDestinationScreen";
import TabNavigation from "./navigationBottomTab";
import SearchDestinationScreen from "../screens/SearchDestinationScreen";
import ChatScreen from "../screens/chat/ChatScreen";
import ChatItemScreen from "../screens/chat/ChatItemScreen";
import ResortList from "../screens/resort/ResortList";
import DetailResort from "../screens/resort/DetailResort";
import ImageFullResort from "../screens/resort/ImageFullResort";
import ImageFullApartment from "../screens/apartment/ImageFullApartment";
import InputInfomationScreen from "../screens/paymentProcess/InputInfomationScreen";
import PaymentScreen from "../screens/paymentProcess/PaymentScreen";
import BookingConfirm from "../screens/bookingConfirm/BookingConfirm";
import BookedApartment from "../screens/bookedApartment/BookedApartment";
import ManageRevervation from "../screens/ManageRevervation/ManageRevervation";
import FavoriteScreen from "../screens/favorite/FavoriteScreen";
import NotificationScreen from "../screens/notification/NotificationScreen";
import Wallet from "../screens/wallet/Wallet";
import HelpCenter from "../screens/helpCenter/HelpCenter";
import GuestToMember from "../screens/guestToMember/GuestToMember";
import Landing from "../screens/addApartment/Landing";
import WellcomeBackAdd from "../screens/addApartment/WellcomeBackAdd";
import StartAdd from "../screens/addApartment/StartAdd";
import StepAdd1 from "../screens/addApartment/StepAdd1";
import DetailProperty from "../screens/property/DetailProperty";
import DetailApartment from "../screens/apartment/DetailApartment";
import ImageFullProperty from "../screens/property/ImageFullProperty";
import ListProperty from "../screens/property/ListProperty";
import ManageAccount from "../screens/manageAccount/ManageAccount";
import Rating from "../screens/rating/Rating";
import SearchApartment from "../screens/home/SearchApartment";
// import AllScreen from "../screens/DestinationScreen/AllScreen";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen
          name="InputInfomationScreen"
          component={InputInfomationScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SearchApartment" component={SearchApartment} />
        <Stack.Screen name="DetailApartment" component={DetailApartment} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="ManageAccount" component={ManageAccount} />
        <Stack.Screen name="VerifyOTP" component={VerifyOPTScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="DetailProperty" component={DetailProperty} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="StartAdd" component={StartAdd} />
        <Stack.Screen name="StepAdd1" component={StepAdd1} />
        <Stack.Screen name="WellcomeBackAdd" component={WellcomeBackAdd} />
        <Stack.Screen name="GuestToMember" component={GuestToMember} />
        <Stack.Screen name="ChatItemScreen" component={ChatItemScreen} />
        <Stack.Screen name="ImageFullResort" component={ImageFullResort} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="ManageRevervation" component={ManageRevervation} />
        <Stack.Screen name="BookedApartment" component={BookedApartment} />
        <Stack.Screen name="BookingConfirm" component={BookingConfirm} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

        <Stack.Screen
          name="ImageFullApartment"
          component={ImageFullApartment}
        />
        <Stack.Screen name="ImageFullProperty" component={ImageFullProperty} />
        <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ResortList" component={ResortList} />
        <Stack.Screen name="DetailResort" component={DetailResort} />
        <Stack.Screen name="ListProperty" component={ListProperty} />
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
        <Stack.Screen name="WelcomeScreen" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeBackScreen" component={WelcomeBackScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="root" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
