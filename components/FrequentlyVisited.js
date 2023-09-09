import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import * as Icon from "react-native-feather";

const FrequentlyVisited = () => {
  return (
    <View className="px-2 ">
      <View className="mt-3">
        <View className="flex">
          <Image
            source={require("../assets/images/image2.png")}
            className="h-40 w-44 rounded-lg"
          />
          <Text className="text-gray-800 text-lg font-bold">Vinh Ha Long</Text>
          <View className="flex-row gap-2">
            <Icon.MapPin stroke={"#AAAAAA"} strokeWidth={2} />
            <Text className="text-gray-400 text-sm">Quan Ninh, Viet Nam</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FrequentlyVisited;
