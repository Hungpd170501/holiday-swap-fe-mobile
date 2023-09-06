import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

export default function WelcomeBackScreen() {
  return (
    <View className="flex-col justify-center items-center bg-blue-500 flex-1">
      <View className="w-full h-80 justify-center items-center flex ">
        <Text className="text-white text-xl">Hi, Welcome Back!</Text>
      </View>
      <View className="bg-white w-full h-full rounded-3xl" />
    </View>
  );
}
