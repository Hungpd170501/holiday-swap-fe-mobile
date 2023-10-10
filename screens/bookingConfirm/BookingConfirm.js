import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Feather } from "react-native-feather";

export default function BookingConfirm() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <Ionicons name="close-outline" size={30} color="white" />
        <Text className="ml-8 text-[20px] text-white">
          Confirm Booking apartment
        </Text>
      </View>
      <ScrollView>
        <View className="px-3 py-4">
          <View>
            <Text className="text-blue-500">Confirmed</Text>
            <Text className="py-3 text-[20px] font-bold">
              Your apartment booking has been confirmed
            </Text>
          </View>
          <View className="pb-5">
            <View className="flex flex-row ">
              <Ionicons size={25} name="checkmark" />
              <View className="ml-2">
                <Text className="font-bold mb-1 text-[18px]">
                  We have sent confirmation to
                </Text>
                <Text>Buitrithuc1008@gmail.com</Text>
              </View>
            </View>
          </View>
          <View className="border border-gray-400 rounded-md px-3 py-3 ">
            <View className="flex flex-row items-center ">
              <Image
                className="w-[100px] h-[100px]"
                source={{
                  uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496850387.jpg?k=5564e90a2b71893855bc439d5857b7eb1e6d283e4b7b331b446cb6480cad0c60&o=&hp=1",
                }}
              />
              <View className="flex flex-col w-[70%] ml-3">
                <Text className="text-[20px] font-bold">
                  Alex's Apartment with Sky View - Landmark 81 Toweer
                </Text>
                <View className="flex flex-row">
                  <Text>Total prices:</Text>
                  <View className="flex flex-row ">
                    <Text className="font-bold mr-1"> 15.000</Text>
                    <FontAwesome5 name="coins" size={20} color="orange" />
                  </View>
                </View>
              </View>
            </View>
            <View className=" flex flex-col mt-3">
              <View className="flex flex-row items-center mb-3">
                <FontAwesome name="calendar-o" size={20} />
                <Text className="ml-2">18th October - 27th October</Text>
              </View>
              <View className="flex flex-row items-center">
                <Ionicons name="bed-outline" size={20} />
                <Text className="ml-2">Apartment 1 bedroom</Text>
              </View>
            </View>
            <View className="bg-gray-400 w-full h-[1px] my-3"></View>
            <View className="flex flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => navigation.navigate("BookedApartment")}
              >
                <Text className="text text-blue-500 text-[17px]">
                  View or update detail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
