import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { Feather } from "react-native-feather";

export default function BookingConfirm() {
  const navigation = useNavigation();
  const route = useRoute();
  const { apartmentBooking, dateRangeBooking, total } = route.params;
  return (
    <View className="flex-1 bg-white">
      <View className="bg-white w-full border-b border-slate-300 flex flex-row items-center justify-center py-5">
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity> */}
        <Text className="text-[20px] text-black font-bold py-4ư mt-4">
          Your booking is successfully!
        </Text>
      </View>
      <ScrollView className="flex-1">
        <View className="flex flex-row px-5 py-5 bg-white gap-4 items-center">
          <Image
            source={{
              uri: `${apartmentBooking?.property?.propertyImage[0]?.link}`,
            }}
            className="w-36 h-28 rounded-xl "
          />
          <View className="flex flex-col gap-1">
            <Text className="text-lg font-bold text-black">
              {apartmentBooking?.property?.propertyName}
            </Text>
            <Text className="text-base text-slate-800">
              {format(new Date(dateRangeBooking?.startDate), "EEE, d yyyy")} -{" "}
              {format(new Date(dateRangeBooking?.endDate), "EEE, d yyyy")}
            </Text>
            <Text className="text-base text-slate-800">
              {total} point total
            </Text>
          </View>
        </View>

        <View className="flex py-4 flex-row justify-center bg-white">
          <TouchableOpacity
            onPress={() => navigation.navigate("root")}
            className="p-3 text-center bg-button rounded-lg"
          >
            <Text className="text-white text-lg">Back to home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
