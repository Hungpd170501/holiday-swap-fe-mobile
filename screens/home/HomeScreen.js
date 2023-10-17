import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { ScrollView, View, Text, SafeAreaView } from "react-native";
import SearchBar from "../../components/search/SearchBar";
import FrequentlyVisited from "../../components/Home/FrequentlyVisited";
import InputDate from "../../components/Home/InputDate";
import InputRoomGuest from "../../components/Home/InputRoomGuest";
import CardExplore from "../../components/Home/cardExplore/CardExplore";
import AvtHeader from "../../components/Home/AvtHeader";
import CardListResort from "../../components/resort/CardListResort";
import { useNavigation } from "@react-navigation/native";
import RecommendResort from "../../components/Home/recommendResort/RecommendResort";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#61dafb" />
      <AvtHeader />
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View>
          <SearchBar />
          <InputDate />
          <InputRoomGuest />
          <View className="flex flex-row items-center w-full justify-center">
            <TouchableOpacity
              onPress={() => navigation.navigate("ResortList")}
              className="px-4 w-full"
            >
              <Text className=" bg-blue-500 text-center py-3 text-white mt-2 font-bold  border border-gray-300 ">
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-xl font-bold py-5 mx-2">
          The most outstanding resort
        </Text>
        <RecommendResort />
        <View>
          <Text className="text-xl font-bold  mx-2">Explore further</Text>
          <View>
            <CardExplore />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
