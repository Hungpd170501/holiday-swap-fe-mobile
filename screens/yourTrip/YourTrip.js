import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function YourTrip() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your trip</Text>
      </View>
      <ScrollView>
        <View className="px-4">
          <Text className="text-[20px] py-3 font-bold">
            No trips have been booked yet... Still not.
          </Text>
          <Text className="w-[80%] text-[15px] py-3">
            "It's time to dust off your luggage and start preparing for your
            next adventure."
          </Text>
        </View>
        <View className="w-[50%] mx-4 py-3">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="px-5 py-3 border border-gray-600 rounded-md"
          >
            <Text className="text-center text-[20px] font-bold">
              Start search
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
