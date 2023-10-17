import React from "react";
import * as Icon from "react-native-feather";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AvtHeader() {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between  bg-blue-500 w-full py-6 px-3">
      {/* Avatar */}
      <View className=" flex-row">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="w-16 h-16"
        />
        <View className="flex">
          <Text className="text-2xl  text-white font-bold mx-2">
            Hi, Thuc Bui
          </Text>
          <View className="flex-row">
            <Icon.MapPin
              stroke={"#AAAAAA"}
              strokeWidth={2}
              className="mx-1 my-1"
            />
            <Text className="my-1  text-white">Dak Lak</Text>
          </View>
        </View>
      </View>

      {/* Bell icon */}
      <View className=" mt-2 flex flex-row items-center">
        <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
          <View className="p-3">
            <Feather color="white" size={20} name="message-circle" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View className="p-3 ">
            <Feather size={20} color="white" name="bell" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
