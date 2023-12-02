import React, { useState } from "react";
import { View } from "react-native";
import Calendar from "react-native-calendar-range-picker";
import { useDispatch, useSelector } from "react-redux";
import { getDateRangeBooking } from "../../redux/actions/dateRangeActions";
import { format } from "date-fns";

export default function InputDateComponents({
  handleDateRange,
  dateRange,
  handleChangeDateRange,
}) {
  // Use local state to store the selected date range
  const [dateRangeBooking, setDateRangeBooking] = useState(dateRange);

  const { dateRangeBooking: dateRangeRedux } = useSelector(
    (state) => state.dateRangeBooking
  );
  const dispatch = useDispatch();

  // Function to handle date range changes
  const onDateRangeChange = (value) => {
    console.log("Check value", new Date(value.startDate));
    dispatch(
      getDateRangeBooking({
        startTimeBooking: new Date(value.startDate),
        endTimeBooking: new Date(value.endDate),
      })
    ); // Update the local state
    // handleDateRange(value); // Call the parent component's handler with the selected date range
    // handleChangeDateRange(value);
  };

  return (
    <View className="w-full h-[800px]">
      <Calendar
        startDate={format(
          new Date(dateRangeRedux.startTimeBooking),
          "yyyy-MM-dd"
        )}
        endDate={format(new Date(dateRangeRedux.endTimeBooking), "yyyy-MM-dd")}
        disabledBeforeToday
        futureYearRange={30}
        onChange={onDateRangeChange}
      />
    </View>
  );
}
