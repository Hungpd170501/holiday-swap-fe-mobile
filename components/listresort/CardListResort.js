import {
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardListResort() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="py-3">
        <Text>3034 Resort</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("DetailResort")}
        style={styles.shadow}
        className="bg-white flex flex-row mb-3 rounded-md "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/landmark.jpg")}
        />
        <View className=" px-2 w-[200px] ">
          <Text className="text-[15px]   font-bold">
            Landmark 81 - Luxury Resort - Stay in the Top of Vietnam
          </Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px]">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
            <View className="flex flex-row items-center ">
              <Ionicons name="leaf-outline" size={25} color="gray" />
              <Text className="text-[13px]">Sustainable Tourism </Text>
            </View>
            <Text className="bg-green-800 text-white text-center w-full my-3 ml-1">
              Limited time offer
            </Text>
          </View>
          <View>
            <Text>30 Apartment - 54m2 </Text>
            <Text>Price for 9 nights for 2 adults</Text>
          </View>
          <View className="  my-3">
            <View className="flex flex-row justify-end">
              <Text className="text-red-500 line-through px-1 justify-end text-[15px]">
                25000
              </Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <View className="flex flex-row justify-end items-center">
              <Text className="justify-end text-[20px] font-bold py-3 px-1">
                15000
              </Text>
              <FontAwesome5 name="coins" size={25} color="orange" />
            </View>
          </View>
          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500 ml-1 py-2 rounded-md my-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row mb-3 rounded-md "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/buivien.jpg")}
        />
        <View className=" px-2 w-[200px] ">
          <Text className="text-[15px]   font-bold">
            Bliss Boutique Saigon - Bui Vien Walking Street
          </Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px]">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
            <View className="flex flex-row items-center ">
              <Ionicons name="leaf-outline" size={25} color="gray" />
              <Text className="text-[13px]">Sustainable Tourism </Text>
            </View>
            <Text className="bg-green-800 text-white text-center w-full my-3 ml-1">
              Limited time offer
            </Text>
          </View>
          <View>
            <Text>30 Apartment - 54m2 </Text>
            <Text>Price for 9 nights for 2 adults</Text>
          </View>
          <View className="  my-3">
            <View className="flex flex-row justify-end">
              <Text className="text-red-500 line-through px-1 justify-end text-[15px]">
                10000
              </Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <View className="flex flex-row justify-end items-center">
              <Text className="justify-end text-[20px] font-bold py-3 px-1">
                5000
              </Text>
              <FontAwesome5 name="coins" size={25} color="orange" />
            </View>
          </View>
          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500 ml-1 py-2 rounded-md my-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row mb-3 rounded-md "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/haanresort.jpg")}
        />
        <View className=" px-2 w-[200px] ">
          <Text className="text-[15px]   font-bold">HAAN Resort & Golf</Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px]">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
            <View className="flex flex-row items-center ">
              <Ionicons name="leaf-outline" size={25} color="gray" />
              <Text className="text-[13px]">Sustainable Tourism </Text>
            </View>
            <Text className="bg-green-800 text-white text-center w-full my-3 ml-1">
              Limited time offer
            </Text>
          </View>
          <View>
            <Text>30 Apartment - 54m2 </Text>
            <Text>Price for 9 nights for 2 adults</Text>
          </View>
          <View className="  my-3">
            <View className="flex flex-row justify-end">
              <Text className="text-red-500 line-through px-1 justify-end text-[15px]">
                13000
              </Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <View className="flex flex-row justify-end items-center">
              <Text className="justify-end text-[20px] font-bold py-3 px-1">
                4900
              </Text>
              <FontAwesome5 name="coins" size={25} color="orange" />
            </View>
          </View>
          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500 ml-1 py-2 rounded-md my-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shadow}
        className="bg-white flex flex-row mb-3 rounded-md "
      >
        <Image
          className="w-[150px] h-full rounded-tl-md rounded-bl-md"
          source={require("../../assets/images/seahorse.jpg")}
        />
        <View className=" px-2 w-[200px] ">
          <Text className="text-[15px]   font-bold">Seahorse Resort</Text>
          <View className="flex flex-row gap-1 py-1 items-center">
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <AntDesign name="star" color="orange" />
            <Text className="text-[12px]">4 Reviews</Text>
          </View>
          <View>
            <View className="flex flex-row ">
              <EvilIcons name="location" size={25} color="gray" />
              <Text className="text-[13px]">
                Binh Thanh district, 4km from the center
              </Text>
            </View>
            <View className="flex flex-row items-center ">
              <Ionicons name="leaf-outline" size={25} color="gray" />
              <Text className="text-[13px]">Sustainable Tourism </Text>
            </View>
            <Text className="bg-green-800 text-white text-center w-full my-3 ml-1">
              Limited time offer
            </Text>
          </View>
          <View>
            <Text>30 Apartment - 54m2 </Text>
            <Text>Price for 9 nights for 2 adults</Text>
          </View>
          <View className="  my-3">
            <View className="flex flex-row justify-end">
              <Text className="text-red-500 line-through px-1 justify-end text-[15px]">
                14000
              </Text>
              <FontAwesome5 name="coins" size={20} color="orange" />
            </View>
            <View className="flex flex-row justify-end items-center">
              <Text className="justify-end text-[20px] font-bold py-3 px-1">
                4200
              </Text>
              <FontAwesome5 name="coins" size={25} color="orange" />
            </View>
          </View>
          <TouchableOpacity className="w-full flex flex-row justify-center items-center bg-blue-500 ml-1 py-2 rounded-md my-2">
            <Text className="text-white font-semibold">Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
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
