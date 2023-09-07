import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import * as Icon from "react-native-feather";
import Input from "../components/Input";
import { TextInput } from "react-native";
import SearchBar from "../components/SearchBar";

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
        <SearchBar />

        {/* Frequently visited */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
