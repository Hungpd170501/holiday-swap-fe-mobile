import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getBookingDetails } from "../../redux/actions/bookingActions";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function BookingDetail() {
  const route = useRoute();
  const { id } = route.params;
  console.log("Check id", id);
  const dispatch = useDispatch();
  const { booking } = useSelector((state) => state.bookingDetail);
  const navigation = useNavigation();
  console.log("Check booking", booking);

  useEffect(() => {
    dispatch(getBookingDetails(id));
  }, [dispatch, id]);

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Booking detail</Text>
      </View>
      <ScrollView className="px-3 py-3">
        <Text className="text-[25px] font-bold">
          Your booking is confirmed!
        </Text>
        <View className="flex flex-row gap-2">
          <Text className="text-[20px]">
            You are going to{" "}
            <Text className="font-bold">{booking.resortName}</Text>
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="py-1 text-[16px]">Room ID: </Text>
          <Text className="text-[18px] font-bold">{booking.roomId}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-[16px]">Check in: </Text>
          <Text className="text-[18px] font-bold">{booking.dateCheckIn}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-[16px]">Check out: </Text>
          <Text className="text-[18px] font-bold">{booking.dateCheckOut}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-[16px]">Guest: </Text>
          <Text className="text-[18px] font-bold">{booking.numberOfGuest}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="py-1 text-[16px]">Total Price: </Text>
          <Text className="text-[18px] font-bold">{booking.price}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-[16px]">View: </Text>
          <Text className="text-[18px] font-bold">{booking.propertyName}</Text>
        </View>
        <View className="">
          <Text className="pt-1 text-[16px]">apartment owner's email:</Text>
          <Text className="text-[18px] font-bold">{booking.ownerEmail}</Text>
        </View>
        <Image
          className="w-full h-[300px] my-3"
          source={{ uri: booking.propertyImage }}
        />
        <View>
          <Text className="text-[20px] font-bold">User of booking</Text>
          {booking.userOfBooking?.length > 0 && (
            <View>
              <View className="">
                <Text className="text-[16px]">Email: </Text>
                <Text className="text-[18px] font-bold">
                  {booking.userOfBooking[0].email}
                </Text>
              </View>
              <View className="flex flex-row items-baseline">
                <Text className="text-[16px]">Fullname: </Text>
                <Text className="text-[18px] font-bold">
                  {booking.userOfBooking[0].fullName}
                </Text>
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-[16px]">Phone Number: </Text>
                <Text className="text-[18px] font-bold">
                  {booking.userOfBooking[0].phoneNumber}
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
