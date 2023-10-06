import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";

export default function ImgHeaderDetail() {
  return (
    <View className=" py-2">
      <View className="flex flex-col ">
        <View className="flex flex-row gap-1 justify-between">
          <Image
            className="w-[182px] h-[150px] "
            source={require("../../assets/images/landmark1.jpg")}
          />
          <Image
            className="w-[182px] h-[150px] "
            source={require("../../assets/images/landmark2.jpg")}
          />
        </View>
        <View className="flex flex-col mt-1">
          <View className="flex flex-row gap-1 justify-between">
            <Image
              className="w-[120px] h-[100px]"
              source={require("../../assets/images/landmark3.jpg")}
            />
            <Image
              className="w-[120px] h-[100px]"
              source={require("../../assets/images/landmark4.jpg")}
            />
            <View className="flex flex-col items-center justify-center">
              <Image
                className="w-[120px] h-[100px] relative"
                source={require("../../assets/images/landmark.jpg")}
              />
              <Text className="absolute text-[25px] text-white font-bold">
                +140
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
