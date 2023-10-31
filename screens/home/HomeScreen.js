import React from "react";
import { View } from "react-native-animatable";
import TabViewHome from "../../components/Home/TabViewHome";
import SearchHome from "../../components/Home/SearchHome";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const { user } = useSelector((state) => state.user);
  console.log("Check user", user);
  return (
    <>
      <View className="bg-white ">
        <SearchHome />
      </View>
      <TabViewHome />
    </>
  );
}
