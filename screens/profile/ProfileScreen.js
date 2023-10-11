import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[90px] justify-end flex flex-row items-center px-5">
        <AntDesign name="infocirlceo" size={20} color="white" />
      </View>
      <ScrollView>
        <View className="flex flex-col h-[200px] w-full absolute bg-blue-500 items-center">
          <Image
            className="w-[80px] h-[80px] rounded-full"
            source={require("../../assets/images/avt.jpg")}
          />
          <Text className="text-[30px] font-bold text-white py-2">
            Bui Tri Thuc
          </Text>
          <Text className="text-yellow-400">Guest</Text>
        </View>
        <View className="px-4 flex flex-col items-center">
          <View className="bg-white rounded-md w-[95%] relative mt-40 border border-gray-300 px-3 py-3">
            <Text>
              Complete your account upgrade from guest to membership to rent an
              apartment and experience it to the fullest in our application.
            </Text>
            <View className="bg-gray-300 w-full h-[1px] my-5" />
            <View className="flex flex-col items-center">
              <Text className="py-3">
                Upgrade your account easily and quickly at
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-500 font-bold text-[20px]">
                  Upgrade
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-3 mt-4 mb-32">
          <Text className="text-[17px] font-bold mb-3">Account</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <Feather name="user" size={20} color="gray" />
              <Text>Manage account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Wallet")}
              className="flex flex-row items-center gap-3"
            >
              <AntDesign name="wallet" size={20} color="gray" />
              <Text>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <MaterialCommunityIcons
                name="progress-star"
                size={20}
                color="gray"
              />
              <Text>Rating</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Help</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <Ionicons name="help-circle-outline" size={20} />
              <Text>Contact customer service</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <FontAwesome name="handshake-o" size={20} />
              <Text>Dispute resolution</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Discover</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <Octicons name="note" size={20} />
              <Text>Posting about travel</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <Ionicons name="people-outline" size={20} />
              <Text>Comunity travel</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">
            Setting and Juridical
          </Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <AntDesign name="setting" size={20} />
              <Text>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <FontAwesome name="balance-scale" size={20} />
              <Text>Juridical</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-[17px] font-bold mt-7 mb-3">Partner</Text>
          <View className=" flex flex-col gap-1">
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <MaterialCommunityIcons name="home-plus-outline" size={20} />
              <Text>Posting apartment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-3">
              <AntDesign color="red" name="logout" size={20} />
              <Text className="text-red-600">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
