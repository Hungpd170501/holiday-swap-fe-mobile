import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Text, CheckBox } from "react-native";
import { View } from "react-native-animatable";
import { Checkbox } from "react-native-paper";

export default function InputInfomationScreen() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [checkedA, setCheckedA] = React.useState(false);
  const [checkedB, setCheckedB] = React.useState(false);

  const [items, setItems] = useState([1]);
  const [clickedButtons, setClickedButtons] = useState([]);

  const addItem = () => {
    const newItem = items.length + 1;
    setItems([...items, newItem]);
  };

  const handleButtonClick = (item) => {
    if (!clickedButtons.includes(item)) {
      setClickedButtons([...clickedButtons, item]);
    }
  };

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">
          Fill in your information
        </Text>
      </View>
      <ScrollView className="flex-1">
        <View className="px-3">
          <View className="bg-white mb-2 px-2 rounded-md mt-2">
            <View className="py-4">
              <Text className="font-bold text-[18px]">Booking for?</Text>
            </View>
            <View className="mb-4">
              <View className="flex flex-row pt-2">
                <Text className="">Last Name</Text>
                <Text className="text-red-700">*</Text>
              </View>
              <View className="mt-2">
                <TextInput
                  className="border border-gray-500 px-2 py-3 rounded-md"
                  placeholder="Your name"
                />
              </View>
            </View>
            <View className="mb-4">
              <View className="flex flex-row">
                <Text>First name</Text>
                <Text className="text-red-700">*</Text>
              </View>
              <View className="mt-2">
                <TextInput
                  className="border border-gray-500 px-2 py-3 rounded-md"
                  placeholder="Your name"
                />
              </View>
            </View>
            <View className="mb-4">
              <View className="flex flex-row">
                <Text>Email adress</Text>
                <Text className="text-red-700">*</Text>
              </View>
              <View className="mt-2">
                <TextInput
                  className="border border-gray-500 px-2 py-3 rounded-md"
                  placeholder="Buitrithuc1008@gmail.com"
                />
              </View>
            </View>

            <View className="mb-4">
              <View className="flex flex-row">
                <Text>Phone</Text>
                <Text className="text-red-700">*</Text>
              </View>
              <View className="mt-2">
                <TextInput
                  className="border border-gray-500 px-2 py-3 rounded-md"
                  value="0856597778"
                />
              </View>
            </View>
          </View>
          <View className="bg-white px-2 rounded-md">
            <Text className="font-bold text-[18px] py-3">Guest</Text>

            <View className="bg-white px-2 rounded-md">
              {items.map((item) => (
                <View key={item}>
                  <Text className="pb-3 font-bold">{item}</Text>
                  <View className="mb-4">
                    <View className="flex flex-row">
                      <Text>Name</Text>
                      <Text className="text-red-700">*</Text>
                    </View>
                    <View className="mt-2">
                      <TextInput
                        className="border border-gray-500 px-2 py-3 rounded-md"
                        placeholder="Your name"
                      />
                    </View>
                  </View>
                  <View className="mb-4">
                    <View className="flex flex-row">
                      <Text>Phone</Text>
                      <Text className="text-red-700">*</Text>
                    </View>
                    <View className="mt-2">
                      <TextInput
                        className="border border-gray-500 px-2 py-3 rounded-md"
                        placeholder="Your name"
                      />
                    </View>
                  </View>
                  <View className="mb-4">
                    <View className="flex flex-row">
                      <Text>Email</Text>
                      <Text className="text-red-700">*</Text>
                    </View>
                    <View className="mt-2">
                      <TextInput
                        className="border border-gray-500 px-2 py-3 rounded-md"
                        placeholder="Your name"
                      />
                    </View>
                  </View>
                  {!clickedButtons.includes(item) && (
                    <TouchableOpacity
                      className="flex flex-row gap-5 justify-end mb-3"
                      onPress={() => {
                        addItem();
                        handleButtonClick(item);
                      }}
                    >
                      <AntDesign name="pluscircleo" size={20} />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
        <View className="bg-white mt-2 rounded-md px-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[15px]">
              Save your information for future bookings
            </Text>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <View>
            <Text className="text-[20px] font-bold py-3">
              What is the purpose of your trip?
            </Text>
            <View className="flex flex-row items-center justify-start gap-6 mb-5">
              <View className="flex flex-row items-center">
                <Text>Business travel</Text>
                <Checkbox
                  status={checkedA ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedA(!checkedA);
                  }}
                />
              </View>
              <View className="flex flex-row items-center">
                <Text>Entertainment</Text>
                <Checkbox
                  status={checkedB ? "checked" : "unchecked"}
                  onPress={() => {
                    setCheckedB(!checkedB);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="border-t bg-white border-gray-300 flex flex-row items-center justify-between px-3 h-16">
        <View className="w-[48%]">
          <View className="flex flex-row items-center">
            <Text className="text-[25px] font-bold mr-1">25.000</Text>
            <FontAwesome5 name="coins" size={20} color="orange" />
          </View>
        </View>
        <View className="w-[48%]">
          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentScreen")}
            className="bg-blue-500 py-3 rounded-md"
          >
            <Text className="text-white text-2xl text-center">Next step</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
