import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import * as Icon from "react-native-feather";
import Input from "../components/Input";
import { TextInput } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="py-6">
        {/* Avatar, Bell icon */}
        <View className="flex-row justify-between mt-8">
          {/* Avatar */}
          <View className="mx-6 flex-row">
            <Image
              source={require("../assets/images/avatar.png")}
              className="w-16 h-16"
            />
            <View className="flex">
              <Text className="text-2xl font-bold mx-2">Hi, Andy</Text>
              <View className="flex-row">
                <Icon.MapPin
                  stroke={"#AAAAAA"}
                  strokeWidth={2}
                  className="mx-2 my-1"
                />
                <Text className="my-1 text-slate-600">Vinh Ha Long</Text>
              </View>
            </View>
          </View>

          {/* Bell icon */}
          <TouchableOpacity className="mx-6 mt-2">
            <View className="p-3 border border-slate-300 rounded-full">
              <Icon.Bell stroke={"#AAAAAA"} strokeWidth={2} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-4">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 bg-slate-100">
            <Icon.Search height={25} width={25} stroke="gray" />
            <TextInput
              placeholder="Search"
              className="ml-2 flex-1 text-slate-600"
            />
            <View className="flex-row items-center space-x-1 bottom-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.Sliders height={20} width={20} stroke="gray" />
            </View>
          </View>
        </View>

        {/* Frequently visited */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
