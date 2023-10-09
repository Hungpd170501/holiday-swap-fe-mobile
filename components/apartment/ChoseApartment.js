import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import InputDateComponents from "../dateInput/InputDateComponents";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native";

export default function ChoseApartment() {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View className="">
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View className="border border-blue-300 w-full my-3 rounded-sm ">
          <Text className="text-center py-4 text-blue-700 font-bold">
            CHOSE
          </Text>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}></View>
            <View style={{ flex: 1, flexDirection: "row" }}></View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "20%",
  },
});
