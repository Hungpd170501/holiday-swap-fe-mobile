import React from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";

export default function InputDateComponents() {
  return (
    <View className="w-full h-[500px]">
      <Calendar
        startDate="2023-05-10"
        endDate="2023-06-10"
        onChange={({ startDate, endDate }) =>
          console.log({ startDate, endDate })
        }
      />
    </View>
  );
}
