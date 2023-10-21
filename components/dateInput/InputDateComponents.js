import React, { useState } from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";

export default function InputDateComponents({ handleDateRange }) {
  // Use local state to store the selected date range
  const [dateRange, setDateRange] = useState(() => {
    // Initialize with initialDateRange when the component mounts
    const initialDateRange = {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    };
    return initialDateRange;
  });

  // Function to handle date range changes
  const onDateRangeChange = (value) => {
    setDateRange(value); // Update the local state
    handleDateRange(value); // Call the parent component's handler with the selected date range
  };

  return (
    <View className="w-full h-[800px]">
      <Calendar
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        disabledBeforeToday
        futureYearRange={3}
        onChange={onDateRangeChange}
      />
    </View>
  );
}
