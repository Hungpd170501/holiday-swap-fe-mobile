import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import CaroselApartmentDetail from "../../components/apartment/CaroselApartmentDetail";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import ChoseApartment from "../../components/apartment/ChoseApartment";
import { Image } from "react-native";
import EditDateApartmentDetail from "../../components/apartment/EditDateApartmentDetail";
import MapApartmentDetail from "../../components/apartmentDetail/MapApartmentDetail";
import { useNavigation } from "@react-navigation/native";

export default function DetailApartment() {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className=" bg-white relative">
          <CaroselApartmentDetail />
        </View>
        <View className="px-4 py-3 bg-white">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="flex row gap-10"
          >
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialIcons size={25} color="gray" name="meeting-room" />
              </View>
              <Text className="mt-1">3 Beds room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <FontAwesome5 size={25} color="gray" name="house-user" />
              </View>
              <Text className="mt-1">50 meters</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons
                  size={25}
                  color="gray"
                  name="google-classroom"
                />
              </View>
              <Text className="mt-1">Living room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons size={25} color="gray" name="balcony" />
              </View>
              <Text className="mt-1">Balcony</Text>
            </View>
          </ScrollView>
        </View>
        <View className="px-4 py-3 bg-white">
          <View>
            <Text className="text-[20px] font-bold">
              Alex's Apartment with Sky view - Landmark 81 Tower
            </Text>

            <View className="w-full h-[1px] bg-gray-300 my-3"></View>

            <View className="">
              <Text className="text-[17px]">23nd - 28nd August</Text>
              <View className="py-2  ">
                <Text className="text-black font-bold text-[17px]">
                  Price for 5 nights
                </Text>
              </View>
              <View className="flex flex-row gap-3 ">
                <View className="flex flex-row items-center ">
                  <Text className=" font-bold text-[25px] pr-2">25.000</Text>
                  <FontAwesome5 name="coins" size={20} color="orange" />
                </View>
              </View>
            </View>

            <Text className="text-[15px]">Only one 1 on HolidaySwap</Text>
            <TouchableOpacity>
              <ChoseApartment />
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white px-4 mt-2 ">
          <Text className="font-bold text-[18px] py-4">Image</Text>
          <View className="">
            <TouchableOpacity>
              <Image
                className="w-full rounded-md"
                source={require("../../assets/images/landmark1.jpg")}
              />
            </TouchableOpacity>
            <View className="flex flex-row gap-2 mt-[1px] ">
              <Image
                className="w-[48%] h-28 rounded-md"
                source={require("../../assets/images/landmark2.jpg")}
              />
              <Image
                className="w-[48%] h-28 rounded-md"
                source={require("../../assets/images/landmark3.jpg")}
              />
            </View>
            <View className="flex flex-row gap-2 mt-[1px] ">
              <Image
                className="w-[48%] h-28 rounded-md"
                source={require("../../assets/images/landmark4.jpg")}
              />
              <Image
                className="w-[48%] h-28 rounded-md"
                source={require("../../assets/images/landmark5.jpg")}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ImageFullApartment");
              }}
              className="border border-gray-500 rounded-md mt-5 mb-4"
            >
              <Text className="text-center py-3 font-bold">
                Show full image
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white mt-2">
          <Text className="font-bold px-4 text-[18px] py-4">Address</Text>

          <View>
            <MapApartmentDetail />
          </View>
        </View>
        <View className="px-4 bg-white mt-2 py-3">
          {/* <View className="flex flex-row ">
            <Text className="text-[17px] font-bold">Acreage:</Text>
            <Text className="text-[17px] font-bold"> 50 m2</Text>
          </View> */}
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View>
            <Text className="text-[17px] font-bold my-2">Describe</Text>
            <Text>
              A holiday apartment, also known as a vacation rental or holiday
              rental, is a self-contained accommodation option that travelers
              can rent for a short-term stay during their vacation or holiday.
              These apartments are typically fully furnished and equipped with
              the amenities needed to provide a comfortable
            </Text>
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="text-[17px] font-bold my-2">
                The apartment is in good condition
              </Text>
              <EditDateApartmentDetail />
            </View>
            <MaterialIcons size={25} name="keyboard-arrow-right" />
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View>
            <View className="flex flex-col">
              <Text className="text-[20px] font-bold">Amenity</Text>
              <View className="px-4 bg-white mt-2 py-3">
                <View className="flex flex-row gap-7">
                  <View className="flex flex-row">
                    <Ionicons size={25} name="bed-outline" />
                    <View className="ml-2 mb-4">
                      <Text className="text-[17px] font-bold ">Bed room</Text>
                      <Text>bedsheets</Text>
                      <Text>Bag or closet</Text>
                    </View>
                  </View>
                  <View className="flex flex-row">
                    <Ionicons size={25} name="bed-outline" />
                    <View className="ml-2 mb-3">
                      <Text className="text-[17px] font-bold ">
                        Living room area
                      </Text>
                      <Text>Sofa</Text>
                      <Text>Reception area</Text>
                      <Text>Dining room area</Text>
                    </View>
                  </View>
                </View>
                {showMore ? (
                  <View>
                    <View className="flex flex-row">
                      <View className="flex flex-row">
                        <MaterialIcons size={25} name="kitchen" />
                        <View className="ml-2 mb-3">
                          <Text className="text-[17px] font-bold ">
                            Kitchen
                          </Text>
                          <Text>Dinner table</Text>
                          <Text>Kitchen</Text>
                          <Text>Kitchenette</Text>
                          <Text>Stove</Text>
                          <Text>Microwave oven</Text>
                          <Text>Washing machine</Text>
                          <Text>Fridge</Text>
                          <Text>Kitchenware</Text>
                          <Text>Electric kettle</Text>
                        </View>
                      </View>
                      <View className="flex flex-row">
                        <MaterialCommunityIcons
                          size={25}
                          name="bathtub-outline"
                        />
                        <View className="ml-2 mb-3">
                          <Text className="text-[17px] font-bold ">
                            Bathroom
                          </Text>
                          <Text>Bidet</Text>
                          <Text>Sandal</Text>
                          <Text>Toilet paper</Text>
                          <Text>Towel</Text>
                          <Text>Toilet</Text>
                          <Text> Private bathroom</Text>
                          <Text>Shower</Text>
                          <Text>Kitchenware</Text>
                          <Text>Tool personal hygiene free</Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex flex-col">
                      <View className="flex flex-row">
                        <FontAwesome size={25} name="sun-o" />
                        <View className="ml-2 mb-3">
                          <Text className="text-[17px] font-bold ">
                            Bathroom
                          </Text>
                          <Text>Balcony</Text>
                          <Text>Terrace</Text>
                          <Text>Courtyard</Text>
                        </View>
                      </View>
                      <View className="flex flex-row">
                        <AntDesign size={25} name="infocirlceo" />
                        <View className="ml-2 mb-3">
                          <Text className="text-[17px] font-bold ">
                            Overview
                          </Text>
                          <Text>No smoking</Text>
                          <Text>Iron</Text>
                          <Text>Soundproofing system</Text>
                          <Text>Safe vault</Text>
                          <Text>Does not cause allergies</Text>
                          <Text>Private entrance</Text>
                          <Text>Fan</Text>
                          <Text>Tiled and marble floors</Text>
                          <Text>Air conditioner</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ) : (
                  <TouchableOpacity onPress={() => setShowMore(true)}>
                    <Text className="text-blue-700 font-bold text-[15px]">
                      View more
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
