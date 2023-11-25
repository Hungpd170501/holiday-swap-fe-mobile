import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getBookingDetails } from "../../redux/actions/bookingActions";

export default function BookingDetail() {
  const route = useRoute();
  const { id } = route.params;
  const dispatch = useDispatch();
  const { booking } = useSelector((state) => state.bookingDetail);

  console.log("Check booking", booking);

  useEffect(() => {
    dispatch(getBookingDetails(id));
  }, [dispatch]);

  return (
    <View>
      <Text>Detail booking</Text>
    </View>
  );
}
