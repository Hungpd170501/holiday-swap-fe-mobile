import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AvtHeader from "../../components/Home/AvtHeader";
import { ScrollView } from "react-native";
import Carosel from "../../components/detailApartment/Carosel";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome6Brands,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Feather } from "react-native-feather";

export default function DetailApartment() {
  const [showMore, setShowMore] = useState(false);

  return (
    <View className="flex-1">
      <View className="">
        <AvtHeader />
      </View>
      <ScrollView>
        <Carosel />
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
            <Text className="text-[20px] font-bold">Apartment 3 Bedrooms</Text>
            <View className="flex flex-row items-center">
              <MaterialCommunityIcons
                size={25}
                color="gray"
                name="shower-head"
              />
              <Text className="ml-1 py-3">Private Bathroom with shower</Text>
            </View>
            <View className="w-full h-[1px] bg-gray-300 my-3"></View>

            <View className="flex flex-row items-center gap-2">
              <Text className="bg-blue-500 text-white px-1">Save 48%</Text>
              <Text className="bg-blue-500 text-white px-1">
                Limit time offer
              </Text>
            </View>
            <View className="py-3">
              <Text>
                <Text className="text-black font-bold">
                  Price for 9 nights for 2 adults
                </Text>
              </Text>
              <View className="flex flex-row gap-3 ">
                <View className="flex flex-row items-center">
                  <Text className="text-red-500 line-through px-1  text-[15px]">
                    25000
                  </Text>
                  <FontAwesome5 name="coins" size={20} color="orange" />
                </View>
                <View className="flex flex-row items-center">
                  <Text className=" font-bold text-[25px]">15000</Text>
                  <FontAwesome5 name="coins" size={20} color="orange" />
                </View>
              </View>
              <Text>Taxes and fees included</Text>
            </View>
            <Text className="text-[17px]">Accommodation layout</Text>
            <View className="border border-gray-300 px-2 py-2 my-3">
              <Text className="font-bold text-[17px]">Bedroom</Text>
              <View className="flex flex-row items-center mt-1 ">
                <Ionicons size={20} name="bed-outline" />
                <Text className="ml-1">1 large double bed (151-180 cm)</Text>
              </View>
            </View>
            <Text className="text-[15px]">Only one 1 on HolidaySwap</Text>
            <TouchableOpacity className="border border-blue-300 w-full my-3 rounded-sm">
              <Text className="text-center py-4 text-blue-700 font-bold">
                CHOSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white mt-2 px-4 flex flex-row items-center py-6">
          <Ionicons size={20} name="leaf-outline" color="green" />
          <Text className="ml-1">Book the apartment with ease</Text>
        </View>
        <View className="bg-white px-4 mt-2 ">
          <Text className="font-bold text-[18px] py-4">Condition</Text>
          <View>
            <View className="flex flex-row items-center">
              <MaterialIcons size={25} color="gray" name="payment" />
              <Text className="ml-1">Payment in HolidaySwap</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Text className="text-blue-500 mt-5 text-[16px] mb-4">
                  Condition booking apartment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-4 bg-white mt-2 py-3">
          <Text className="text-[20px] font-bold">Meals</Text>
          <View className="flex flex-row py-3">
            <Ionicons size={20} name="restaurant-outline" />
            <Text className="ml-2  font-bold text-[17px]">
              This room rate does not include any meal options
            </Text>
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View className="flex flex-row ">
            <Text className="text-[17px] font-bold">Acreage:</Text>
            <Text className="text-[17px] font-bold"> 50 m2</Text>
          </View>
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
          <View>
            <Text className="text-[17px] font-bold my-2">
              Various types of beds available
            </Text>
            <Text>2 large double beds 151-180cm</Text>
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View>
            <Text className="text-[20px] font-bold my-2">Convenient</Text>
            <View className="flex flex-col">
              <View className="px-4 bg-white mt-2 py-3">
                <Text className="text-[20px] font-bold">Convenient</Text>
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
