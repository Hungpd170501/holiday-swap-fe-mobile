import React from "react";
import * as Icon from "react-native-feather";

import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AvtHeader() {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between  bg-blue-500 w-full py-6 px-3">
      {/* Avatar */}
      <View className=" flex-row">
        <View className="pl-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View className="flex flex-row pl-6">
            <View className="flex">
              <Text className="text-2xl  text-white font-bold mx-2">
                Hi, Thuc Bui
              </Text>
              <View className="flex-row items-center ml-3">
                <EvilIcons name="location" size={20} color="#ffffff" />
                <Text className="text-[13px]  text-white">Dak Lak</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
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
