import React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ListDestinationScreen() {
  return (
    <View>
      <View>
        <SearchBar />
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View className=" pr-[330px] ">
            <Text className="bg-[#2196F3]  rounded-md">All</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
