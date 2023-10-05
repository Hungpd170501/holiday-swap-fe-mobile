import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import FrequentlyVisited from "../components/FrequentlyVisited";
import InputDate from "../components/Home/InputDate";
import InputRoomGuest from "../components/Home/InputRoomGuest";
import CardExplore from "../components/Home/cardExplore/CardExplore";
import AvtHeader from "../components/Home/AvtHeader";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* Avatar, Bell icon */}
        <AvtHeader />
        {/* Search */}
        <View>
          <SearchBar />
          <InputDate />
          <InputRoomGuest />

          <View className="px-4 flex flex-row items-center w-full justify-center">
            <TouchableOpacity>
              <Text className="w-full bg-blue-500 px-40 py-3 text-white mt-2  border border-gray-300 ">
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Frequently visited */}
        <Text className="text-xl font-bold mt-2 mx-2">Frequently visited</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex row"
        >
          <FrequentlyVisited />
        </ScrollView>
        <View>
          <Text className="text-xl font-bold mt-2 mx-2">Explore further</Text>
          <View>
            <CardExplore />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
