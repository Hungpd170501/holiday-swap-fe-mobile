import React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListDestinationScreen() {
  return (
    <View className="flex-1">
      <View className="pt-6 pb-4">
        <SearchBar />
      </View>
      <ScrollView className="flex-1">
        <View className="flex-row mx-4">
          <TouchableOpacity className="px-4 py-2 bg-[#2196F3] rounded-md">
            <Text className="rounded-md text-white font-medium text-lg">
              All
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
