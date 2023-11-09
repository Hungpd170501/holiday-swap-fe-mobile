import React, { useState } from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";

export default function InputDateComponents({
  handleDateRange,
  dateRange,
  handleChangeDateRange,
}) {
  // Use local state to store the selected date range
  const [dateRangeBooking, setDateRangeBooking] = useState(dateRange);

  // Function to handle date range changes
  const onDateRangeChange = (value) => {
    setDateRangeBooking(value); // Update the local state
    handleDateRange(value); // Call the parent component's handler with the selected date range
    handleChangeDateRange(value);
  };

  return (
    <View className="w-full h-[800px]">
      <Calendar
        startDate={dateRangeBooking.startDate}
        endDate={dateRangeBooking.endDate}
        disabledBeforeToday
        futureYearRange={30}
        onChange={onDateRangeChange}
      />
    </View>
  );
}
