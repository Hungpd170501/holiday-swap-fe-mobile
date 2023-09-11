import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import BtnLoginGoogle from "../components/BtnLoginGoogle";
import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [isGreen, setIsGreen] = useState(false);
  const navigation = useNavigation();

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  return (
    <View className="flex justify-center items-center">
      <View className="flex-row items-center justify-center mt-[70px]">
        <View className="-ml-[130px] mr-[70px]">
          <TouchableOpacity
            className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
            onPress={() => navigation.navigate("WelcomeBackScreen")}
          >
            <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-bold text-[24px]">Sign In</Text>
        </View>
      </View>
      <InputEmail />
      <InputPassword />
      <View>
        <View className="flex-row mb-[30px] mt-[10px]">
          <View className="flex-row items-center mr-[80px]">
            <TouchableOpacity
              className=" mr-[5px] border-[0.5px] border-collapse border-black w-[15] h-[15] rounded-full"
              style={[{ backgroundColor: isGreen ? "#2196F3" : "#fff" }]}
              onPress={toggleColor}
            ></TouchableOpacity>
            <Text>Remember me</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="text-red-600">Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity className="w-[317px] h-[58px] bg-[#2196F3] mb-[13px] rounded-3xl flex justify-center items-center">
        <Text className="text-white text-lg font-bold">Sign In</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mb-[20px]">
        <View className="w-[93px] h-[1px] bg-black"></View>
        <Text className="p-3">Or continue with</Text>
        <View className="w-[93px] h-[1px] bg-black"></View>
      </View>
      <BtnLoginGoogle />
    </View>
  );
}
