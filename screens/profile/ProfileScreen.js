import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Location from "react-native-vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ProfileScreen() {
  return (
    <ScrollView className="mt-[90px] pl-[25px] pr-[25px]">
      <View className="flex-row items-center">
        <View>
          <Image
            className="w-[50px] h-[50px] rounded-full"
            source={require("../../assets/images/avt.jpg")}
          />
        </View>
        <View className="ml-[5px]">
          <Text className="text-[30px] font-bold ">Bui Tri Thuc</Text>
          <View className="flex-row items-center ">
            <Location name="location" />
            <Text className="text-[15px]"> Vinh ha long</Text>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text className="font-semibold mt-[25px] mb-[10px]">
            Personal info
          </Text>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Location name="location" size={20} />
              <Text className="ml-[10px] text-[20px]">My Address</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <MaterialIcons name="payment" size={20} />
              <Text className="ml-[10px] text-[20px]">Payment Method</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-semibold mt-[25px] mb-[10px]">Security</Text>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Feather name="lock" size={20} />
              <Text className="ml-[10px] text-[20px]">Change Password</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Feather name="unlock" size={20} />
              <Text className="ml-[10px] text-[20px]">Forgot Password</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Ionicons name="shield-checkmark-outline" size={20} />
              <Text className="ml-[10px] text-[20px]">Security</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-semibold mt-[25px] mb-[10px]">General</Text>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <MaterialIcons name="language" size={20} />
              <Text className="ml-[10px] text-[20px]">Language </Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <FontAwesome name="trash-o" size={20} />
              <Text className="ml-[10px] text-[20px]">Clear Cache</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-semibold mt-[25px] mb-[10px]">About</Text>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Feather name="shield" size={20} />
              <Text className="ml-[10px] text-[20px]">Legal and Policies</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <Feather name="help-circle" size={20} />
              <Text className="ml-[10px] text-[20px]">Help and Support</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between mb-[30px]">
            <View className="flex-row items-center">
              <MaterialIcons name="model-training" size={20} />
              <Text className="ml-[10px] text-[20px]">Dark Mode</Text>
            </View>
            <View>
              <MaterialIcons name="navigate-next" size={30} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity className=" items-center justify-center border-[1px] border-collapse border-blue-500 w-[317] h-[58] rounded-3xl mb-[20px]">
            <Text className="text-blue-500 font-bold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
