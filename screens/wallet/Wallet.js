import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

export default function Wallet() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Wallet</Text>
      </View>

      <ScrollView>
        <View className="flex flex-col h-[200px] w-full  bg-blue-500 items-center">
          <Image
            className="w-[80px] h-[80px] rounded-full"
            source={require("../../assets/images/avt.jpg")}
          />
          <Text className="text-[30px] font-bold text-white py-2">
            Bui Tri Thuc
          </Text>
          <Text className="text-yellow-400">Membership</Text>
        </View>

        <View className="mb-28">
          <View className="px-4  py-4 bg-white">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[30px] font-bold">Point</Text>
              <View className="flex flex-row items-center">
                <Text className="text-[20px] font-bold mr-2">15.000</Text>
                <FontAwesome5 name="coins" size={20} color="orange" />
              </View>
            </View>
            <View className="w-full h-[1px] bg-gray-300 my-4"></View>
          </View>
          <View className="bg-white px-4 py-4 mt-3 flex flex-col items-center justify-center">
            <AntDesign name="creditcard" size={30} />
            <Text>No credit cards</Text>
            <Text>You can add points to the application via vnpay</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Rechart")}
              className="bg-blue-500 px-6 rounded-md py-3 my-3"
            >
              <Text className="text-white">Recharge</Text>
            </TouchableOpacity>
          </View>
          <View className="pr-6 pl-3 py-4 bg-white mt-3">
            <View className="flex flex-row justify-start">
              <Text className="font-bold">View transaction history</Text>
            </View>
            <View className=" flex flex-row justify-between items-center mt-4 w-[80%] ">
              <View className="flex flex-row items-center ">
                <Image
                  className="w-[50px] h-[50px] rounded-full"
                  source={require("../../assets/images/avt.jpg")}
                />
                <View className="ml-2 w-[80%]">
                  <Text className="text-[13px] font-bold">
                    +100,000VND into the application
                  </Text>
                  <Text>09:12 - 12/10/2023</Text>
                  <View className="flex flex-row items-center">
                    <Text>Residual number: </Text>
                    <Text className="mr-1">30.000</Text>
                    <FontAwesome5 name="coins" size={10} color="orange" />
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Text className="text-[20px] font-bold">+8.000</Text>
                <FontAwesome5 name="coins" size={15} color="orange" />
              </View>
            </View>
            <View className=" flex flex-row justify-between items-center mt-4 w-[80%] ">
              <View className="flex flex-row items-center ">
                <Image
                  className="w-[50px] h-[50px] rounded-full"
                  source={require("../../assets/images/avt.jpg")}
                />
                <View className="ml-2 w-[80%]">
                  <Text className="font-bold text-[13px]">
                    Rent payment for Alex's apartment
                  </Text>
                  <Text>00:12 - 11/12/2023</Text>
                  <View className="flex flex-row items-center">
                    <Text>Residual number: </Text>
                    <Text className="mr-1">10.000</Text>
                    <FontAwesome5 name="coins" size={10} color="orange" />
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Text className="text-[20px] font-bold">-20.000</Text>
                <FontAwesome5 name="coins" size={15} color="orange" />
              </View>
            </View>
            <View className=" flex flex-row justify-between items-center mt-4 w-[80%] ">
              <View className="flex flex-row items-center ">
                <Image
                  className="w-[50px] h-[50px] rounded-full"
                  source={require("../../assets/images/avt.jpg")}
                />
                <View className="ml-2 w-[80%]">
                  <Text className="text-[13px] font-bold">
                    +200,000VND into the application
                  </Text>
                  <Text>09:12 - 12/10/2023</Text>
                  <View className="flex flex-row items-center">
                    <Text>Residual number: </Text>
                    <Text className="mr-1">30.000</Text>
                    <FontAwesome5 name="coins" size={10} color="orange" />
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Text className="text-[20px] font-bold">+16.000</Text>
                <FontAwesome5 name="coins" size={15} color="orange" />
              </View>
            </View>
            <View className=" flex flex-row justify-between items-center mt-4 w-[80%] ">
              <View className="flex flex-row items-center ">
                <Image
                  className="w-[50px] h-[50px] rounded-full"
                  source={require("../../assets/images/avt.jpg")}
                />
                <View className="ml-2 w-[80%]">
                  <Text className="text-[13px] font-bold">
                    +100,000VND into the application
                  </Text>
                  <Text>09:12 - 12/10/2023</Text>
                  <View className="flex flex-row items-center">
                    <Text>Residual number: </Text>
                    <Text className="mr-1">30.000</Text>
                    <FontAwesome5 name="coins" size={10} color="orange" />
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Text className="text-[20px] font-bold">+8.000</Text>
                <FontAwesome5 name="coins" size={15} color="orange" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
