import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputEmail from "../../components/input/InputEmail";
import InputPassword from "../../components/input/InputPassword";
import BtnLoginGoogle from "../../components/button/BtnLoginGoogle";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/search/SearchBar";
import { Image } from "react-native";
import { ScrollView } from "react-native";

export default function ChatScreen() {
  const [isGreen, setIsGreen] = useState(false);
  const navigation = useNavigation();

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  return (
    <View className="flex-1 bg-white">
      <View className=" flex-row items-center justify-start px-4 gap-16 py-4">
        <View>
          <TouchableOpacity
            className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
          </TouchableOpacity>
        </View>
        <View className=" flex flex-row items-center justify-center">
          <Text className="font-bold text-[24px] ">Message</Text>
        </View>
      </View>
      <SearchBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-4 w-[95%] py-3"
      >
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity
              className="flex-row justify-start "
              onPress={() => navigation.navigate("ChatItemScreen")}
            >
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat2.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nguyễn (Nguyen)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat3.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Trần (Tran)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat4.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Lê (Le)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat5.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Phạm (Pham)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat6.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Hoàng (Hoang)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat7.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Huỳnh (Huyhn)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat8.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Phan (Phan)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat9.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Vũ (Vu)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat1.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Đặng (Dang)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity className="flex-row justify-start ">
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../../assets/images/avtChat1.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Dương (Duong)</Text>
                </View>
                <Text>Tôi muốn trao đổi một kì nghỉ tại... </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-[10px] ml-[20px]">
            <Text>10:30AM</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
