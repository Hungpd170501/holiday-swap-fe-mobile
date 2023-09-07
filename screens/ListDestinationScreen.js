import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import clsx from "clsx";

export default function ListDestinationScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View className="flex">
      <View className="pt-6 pb-4">
        <SearchBar />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="w-full h-auto"
      >
        <View className="flex-row">
          <View className="flex-row mx-4">
            <TouchableOpacity
              onPress={() => handleTabClick("All")}
              className={clsx(
                `px-[30px] py-[8px] rounded-[6px]`,
                selectedTab === "All" ? "bg-[#2196F3]" : "bg-transparent",
                selectedTab !== "All" ? "border" : "border-none"
              )}
            >
              <Text
                className={clsx(
                  `font-bold text-[16px]`,
                  selectedTab === "All" ? "text-white  " : " text-black  "
                )}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row mx-1">
            <TouchableOpacity
              onPress={() => handleTabClick("Popular")}
              className={clsx(
                `px-[30px] py-[8px] rounded-[6px]`,
                selectedTab === "Popular" ? "bg-[#2196F3]" : "bg-transparent",
                selectedTab !== "Popular" ? "border" : "border-transparent"
              )}
            >
              <Text
                className={clsx(
                  `font-bold text-[16px]`,
                  selectedTab === "Popular" ? "text-white" : "text-black"
                )}
              >
                Popular
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row mx-4">
            <TouchableOpacity
              onPress={() => handleTabClick("Recommendation")}
              className={clsx(
                `px-[30px] py-[8px] rounded-[6px]`,
                selectedTab === "Recommendation"
                  ? "bg-[#2196F3]"
                  : "bg-transparent",
                selectedTab !== "Recommendation"
                  ? "border"
                  : "border-transparent"
              )}
            >
              <Text
                className={clsx(
                  `font-bold text-[16px]`,
                  selectedTab === "Recommendation" ? "text-white" : "text-black"
                )}
              >
                Recommendation
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row mx-1">
            <TouchableOpacity
              onPress={() => handleTabClick("Suggest")}
              className={clsx(
                `px-[30px] py-[8px] rounded-[6px]`,
                selectedTab === "Suggest" ? "bg-[#2196F3]" : "bg-transparent",
                selectedTab !== "Suggest" ? "border" : "border-none"
              )}
            >
              <Text
                className={clsx(
                  `font-bold text-[16px]`,
                  selectedTab === "Suggest" ? "text-white  " : " text-black  "
                )}
              >
                Suggest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text>all screen</Text>
      </View>
    </View>
  );
}
