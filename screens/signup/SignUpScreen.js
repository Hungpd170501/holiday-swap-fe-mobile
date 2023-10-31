import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import ButtonBack from "../../components/button/ButtonBack";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <SafeAreaView className="bg-white flex-1">
        <ScrollView>
          {/* Button back */}
          <ButtonBack navigation={navigation} />

          {/* Title */}
          <View className="justify-center items-center flex w-full py-3">
            <Text className="text-3xl font-bold justify-center">Sign Up</Text>
            <Text className="text-3xl font-black justify-center mt-5">
              Complete your account!
            </Text>
            <Text className="text-lg font-normal">
              "Explore the world with us!"
            </Text>
          </View>

          {/* Input */}
          <View>
            <Input label={"First Name"} placeholder={"Enter your first name"} />
            <Input label={"Last Name"} placeholder={"Enter your last name"} />
            <Input
              label={"Email"}
              type={"email-address"}
              placeholder={"Enter your email"}
            />
            <Input
              label={"Password"}
              placeholder={"Enter your password"}
              secure={true}
            />
            <Input
              label={"Confirm Password"}
              placeholder={"Enter your confirm password"}
              secure={true}
            />
          </View>

          {/* Button */}
          <View>
            <Button
              text={"Sign Up"}
              onPress={() => navigation.navigate("VerifyOTP")}
            />
          </View>

          <View className="flex-row justify-center pb-3">
            <Text className="text-lg font-bold">Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate("SignInScreen")}
              className="text-lg font-bold text-[#2196F3]"
            >
              Login
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;
