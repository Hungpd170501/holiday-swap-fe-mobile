import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import Carosel from "../apartment/CaroselApartmentHome";
import { useNavigation } from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";

export default function TabViewHome() {
  const tabs = ["Impressive area", "Hilly area", "Ocean view", "City view"];
  const [selectedTab, setSelectedTab] = useState("Impressive area");
  const navigation = useNavigation();
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Impressive area":
        return (
          <View
            style={styles.shadow}
            className="flex-1 flex flex-row items-center "
          >
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>

            <View className=" w-full absolute 2flex flex-col h-[99%] justify-end ">
              <TouchableOpacity className=" flex flex-row justify-center items-center  ">
                <Text className="border border-gray-400 rounded-full py-2 px-6 bg-black text-white text-center opacity-70">
                  Maps
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "Hilly area":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Bui Tri Thuc's Apartment - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className="bg-transparent">
              <Text className="text-center">Ban do</Text>
            </View>
          </View>
        );
      case "Ocean view":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className="bg-transparent">
              <Text className="text-center">Ban do</Text>
            </View>
          </View>
        );
      case "City view":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <CarouselApartmentHome />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailApartment")}
                className=" mb-8"
              >
                <View>
                  <View>
                    <View className="flex flex-row items-center justify-between">
                      <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                        Alex's Apartment with Sky view - Landmark 81 Tower
                      </Text>
                      <View className="flex flex-row items-center gap-1">
                        <Text>4.94</Text>
                        <AntDesign name="star" color="orange" />
                      </View>
                    </View>
                    <View className="flex flex-row gap-2 ">
                      <Text className="font-bold">Resort:</Text>
                      <Text>Les Hameaux de l'Orient</Text>
                    </View>
                    <View className="flex flex-row gap-2 py-2">
                      <Text className="font-bold">Type:</Text>
                      <Text>Luxury property</Text>
                    </View>
                    <View className="flex flex-row gap-2 mb-2">
                      <Text className="font-bold">Apartment ID:</Text>
                      <Text>310</Text>
                    </View>

                    <View className="max-w-[100%] overflow-hidden pb-2">
                      <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                        Unique and secluded atmosphere with limitless views
                      </Text>
                    </View>
                    <View className="flex flex-row gap-1 items-center mb-1">
                      <Text className="text-[20px] font-bold">25.000</Text>
                      <FontAwesome5 name="coins" size={20} color="orange" />
                    </View>

                    <View className="flex flex-row items-center ">
                      <Text className="font-bold">5 Night : </Text>
                      <Text className="font-bold">23rd - 28nd August</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className="bg-transparent">
              <Text className="text-center">Ban do</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 px-4 bg-white">
      <View className=" border-b border-blue-200 ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-10 ">
            {tabs.map((tab) => (
              <TouchableOpacity
                className="pb-3"
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: selectedTab === tab ? 2 : 0,
                    borderBottomColor:
                      selectedTab === tab ? "#009FC2" : "transparent",
                  },
                ]}
              >
                <Text style={selectedTab === tab ? { color: "#007FC4" } : {}}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {renderTabContent()}
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
