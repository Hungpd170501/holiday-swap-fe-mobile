import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

export default function YourApartment() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your Apartment</Text>
      </View>
      <View>
        <ScrollView>
          <View className="px-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("OwnerDetailApartment")}
              className=" flex flex-row bg-white mt-3 justify-start  rounded-md py-2 px-2"
            >
              <Image
                className="w-[30%] h-[100px] rounded-md mr-3"
                source={require("../../assets/images/landmark4.jpg")}
              />
              <View className="w-[65%]">
                <Text className="text-[20px] font-bold ">Landmark View</Text>
                <View className="flex flex-row mt-2">
                  <EvilIcons name="location" size={15} />
                  <Text className="text-[12px] ">
                    764 Dien Bien Phu, Binh Thanh, HCM city, Vietnam
                  </Text>
                </View>
                <View className="flex flex-row mt-2 items-center">
                  <AntDesign name="star" color="orange" />
                  <Text className="text-[12px] "> 20 rating</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className=" flex flex-row bg-white mt-3 justify-start  rounded-md py-2 px-2">
              <Image
                className="w-[30%] h-[100px] rounded-md mr-3"
                source={require("../../assets/images/landmark1.jpg")}
              />
              <View className="w-[65%]">
                <Text className="text-[20px] font-bold ">Landmark View</Text>
                <View className="flex flex-row mt-2">
                  <EvilIcons name="location" size={15} />
                  <Text className="text-[12px] ">
                    764 Dien Bien Phu, Binh Thanh, HCM city, Vietnam
                  </Text>
                </View>
                <View className="flex flex-row mt-2 items-center">
                  <AntDesign name="star" color="orange" />
                  <Text className="text-[12px] "> 11 rating</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className=" flex flex-row bg-white mt-3 justify-start  rounded-md py-2 px-2">
              <Image
                className="w-[30%] h-[100px] rounded-md mr-3"
                source={require("../../assets/images/landmark2.jpg")}
              />
              <View className="w-[65%]">
                <Text className="text-[20px] font-bold ">Landmark View</Text>
                <View className="flex flex-row mt-2">
                  <EvilIcons name="location" size={15} />
                  <Text className="text-[12px] ">
                    764 Dien Bien Phu, Binh Thanh, HCM city, Vietnam
                  </Text>
                </View>
                <View className="flex flex-row mt-2 items-center">
                  <AntDesign name="star" color="orange" />
                  <Text className="text-[12px] "> 2 rating</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
