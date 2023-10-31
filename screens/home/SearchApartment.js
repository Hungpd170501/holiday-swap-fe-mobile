import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import SearchAdressBottomSheet from "../../components/Home/SearchAdressBottomSheet";
import SearchDateBottomSheet from "../../components/Home/SearchDateBottomSheet";
import InputGuestBottomSheet from "../../components/Home/InputGuestBottomSheet";
import SearchResortBottomSheet from "../../components/Home/SearchResortBottomSheet";
import { ScrollView } from "react-native";

export default function SearchApartment() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <View className="bg-white flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Search Home</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-4 mt-5 py-5">
          <SearchAdressBottomSheet />
          <SearchResortBottomSheet />
          <SearchDateBottomSheet />
          <InputGuestBottomSheet />
        </View>
      </ScrollView>
      <View className="flex flex-row items-center justify-between px-4 py-3 bg-white border-t border-gray-400 fixed w-full">
        <TouchableOpacity>
          <Text className="font-bold underline text-black">Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Homes")}
          className="py-3 px-8 rounded-md bg-sky-500"
        >
          <Text className="text-white text-center font-bold text-lg">
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
