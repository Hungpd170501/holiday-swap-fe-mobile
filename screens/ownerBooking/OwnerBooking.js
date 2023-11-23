import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import Loading from "../../components/Loading";
import { getOwnerBooking } from "../../redux/actions/bookingActions";

export default function YourTrip() {
  const dispatch = useDispatch();
  const { ownerBooking, error, loading } = useSelector(
    (state) => state.ownerBooking
  );
  console.log("check listboooking", ownerBooking);

  const [isDataLoaded, setDataLoaded] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getOwnerBooking());
    }, [dispatch])
  );

  useEffect(() => {
    if (ownerBooking || error) {
      setDataLoaded(true);
    }
  }, [ownerBooking, error]);

  const navigation = useNavigation();

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Owner booking</Text>
      </View>
      <ScrollView>
        {loading && (
          <View className="mt-20">
            <Loading />
          </View>
        )}
        {isDataLoaded && !loading && (
          <>
            {ownerBooking && ownerBooking.length > 0 ? (
              ownerBooking.map((booking, index) => (
                <View
                  key={index}
                  className="px-4 py-3 border-b border-gray-300"
                >
                  <Image
                    source={{ uri: booking.propertyImage }}
                    style={{ width: "100%", height: 200 }}
                  />
                  <Text className="text-[20px] font-bold py-2">
                    {booking.propertyName}
                  </Text>
                  <Text>Resort: {booking.resortName}</Text>
                  <Text>Room: {booking.roomId}</Text>
                  <Text>Check-in: {booking.checkInDate}</Text>
                  <Text>Check-out: {booking.checkOutDate}</Text>
                  <Text>Price: ${booking.price}</Text>
                </View>
              ))
            ) : (
              <View className="px-4">
                <Text className="text-[20px] py-3 font-bold">
                  No trips have been booked yet... Still not.
                </Text>
                <Text className="w-[80%] text-[15px] py-3">
                  "It's time to dust off your luggage and start preparing for
                  your next adventure."
                </Text>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
}
