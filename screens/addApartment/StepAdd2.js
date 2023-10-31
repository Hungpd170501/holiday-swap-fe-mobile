import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

export default function StepAdd2() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full">
      <View className="flex flex-row justify-between mt-10 px-4 border-b border-gray-400 py-4">
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            Save & quit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="border border-gray-400 rounded-3xl px-2 py-1">
            You have questions?
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View className="px-4 ">
          <Text className="text-[25px] font-bold mt-7">Step 2</Text>
          <Text className="font-bold text-[25px] py-3 text-blue-500">
            Share your information about your apartment with us
          </Text>
          <View className="flex ">
            <Text className="text-[16px] text-gray-600">
              In this step we will ask you if the apartment you want to rent is
              located in the
            </Text>
            <Text className="text-[17px] font-bold">Thuc Bui Resort</Text>
            <Text className="text-[16px] text-gray-600"> And belongs to</Text>
            <Text className="text-[17px] font-bold">Luxury property type</Text>
            <Text className="text-[16px] text-gray-600">
              What is the name of your apartment and what is the apartment ID
              number?
            </Text>
          </View>
        </View>
        <View className="px-4 mt-10 mb-5 ">
          <Text className="text-[20px] font-bold text-blue-500">
            Name of Apartment
          </Text>
          <TextInput className=" mt-5 w-full bg-blue-100 rounded-md py-3 px-2" />
        </View>
        <View className="px-4 mt-5 mb-5 ">
          <Text className="text-[20px] font-bold text-blue-500">
            Your Apartment ID
          </Text>
          <TextInput
            keyboardType="numeric"
            className=" mt-5 w-full bg-blue-100 rounded-md py-3 px-2"
          />
        </View>
      </ScrollView>
      <View className="flex flex-row gap-1 items-center justify-center w-full">
        <View className="bg-gray-300 w-[25%] h-1"></View>
        <View className="bg-gray-700 w-[25%] h-[5px]"></View>
        <View className="bg-gray-300 w-[25%] h-1"></View>
        <View className="bg-gray-300 w-[25%] h-1"></View>
      </View>
      <View className="px-4 py-5">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-[20px] underline">Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("StepAdd3")}>
            <Text className="text-[20px] bg-blue-700  text-white px-5 py-2 rounded-md">
              Next Step
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
