import React from "react";
import { View } from "react-native-animatable";
import TabViewHome from "../../components/Home/TabViewHome";
import SearchHome from "../../components/Home/SearchHome";
import { Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View className="bg-white ">
        <SearchHome />
      </View>
      <TabViewHome />
    </>
  );
}
