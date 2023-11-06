import React from "react";
import { View } from "react-native-animatable";
import TabViewHome from "../../components/Home/TabViewHome";
import SearchHome from "../../components/Home/SearchHome";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { id } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import { createContext, useState, useEffect } from "react";

export default function HomeScreen() {
  const { user } = useSelector((state) => state.user);
  const { searchParam } = useSelector((state) => state.searchParam);
  return (
    <>
      <View className="bg-white ">
        <SearchHome />
      </View>
      <TabViewHome/>
    </>
  );
}
