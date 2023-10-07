import React from "react";
import * as Icon from "react-native-feather";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default function AvtHeader() {
  return (
    <View className="flex-row justify-between  bg-blue-500 w-full py-6 fixed">
      {/* Avatar */}
      <View className="mx-6 flex-row">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="w-16 h-16"
        />
        <View className="flex">
          <Text className="text-2xl  text-white font-bold mx-2">Hi, Andy</Text>
          <View className="flex-row">
            <Icon.MapPin
              stroke={"#AAAAAA"}
              strokeWidth={2}
              className="mx-1 my-1"
            />
            <Text className="my-1  text-white">Vinh Ha Long</Text>
          </View>
        </View>
      </View>

      {/* Bell icon */}
      <TouchableOpacity className="mx-6 mt-2">
        <View className="p-3 ">
          <Icon.Bell color="#FFFFF" stroke={"#AAAAAA"} strokeWidth={2} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
