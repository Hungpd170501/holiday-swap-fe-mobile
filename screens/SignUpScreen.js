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
import Input from "../components/Input";

const SignUpScreen = () => {
  return (
    <SafeAreaView className="bg-white py-6 flex-1">
      <StatusBar style="dark" />
      <ScrollView>
        {/* Button back */}
        <View className="relative">
          <TouchableOpacity className="absolute left-4 bg-[#ECECEC] p-3 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={"#AAAAAA"} />
          </TouchableOpacity>
        </View>

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
          <Input
            label={"First Name"}
            type={"text"}
            placeholder={"Enter your first name"}
          />
          <Input
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your last name"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
