import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import BtnLoginGoogle from "../components/BtnLoginGoogle";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { Image } from "react-native";
import { ScrollView } from "react-native";

export default function ChatScreen() {
  const [isGreen, setIsGreen] = useState(false);
  const navigation = useNavigation();

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  return (
    <View className="flex justify-between items-center w-full">
      <View className="flex-row items-center justify-center mt-[70px]">
        <View className="-ml-[130px] mr-[70px]">
          <TouchableOpacity
            className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
            onPress={() => navigation.navigate("WelcomeBackScreen")}
          >
            <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-bold text-[24px]">Message</Text>
        </View>
      </View>
      <SearchBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-96 mr-[33px] ml-[50px] my-[10px]"
      >
        <View className="flex-row mr-[100px]">
          <View className="  py-[5px]">
            <TouchableOpacity
              className="flex-row justify-start "
              onPress={() => navigation.navigate("ChatItemScreen")}
            >
              <Image
                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
                source={require("../assets/images/avtChat2.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Lụa Lã</Text>
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
                source={require("../assets/images/avtChat3.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nguyễn Thị Làn</Text>
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
                source={require("../assets/images/avtChat4.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Đức Thịnh</Text>
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
                source={require("../assets/images/avtChat5.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Duy Thưởng</Text>
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
                source={require("../assets/images/avtChat6.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Mạnh Hải</Text>
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
                source={require("../assets/images/avtChat7.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nguyễn Hải Đăng</Text>
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
                source={require("../assets/images/avtChat8.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Thị Kim Yến</Text>
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
                source={require("../assets/images/avtChat9.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Nguyễn Văn Sơn</Text>
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
                source={require("../assets/images/avtChat1.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Đức Thịnh</Text>
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
                source={require("../assets/images/avtChat1.jpg")}
              />
              <View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg font-bold">Bùi Trí Thức</Text>
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
      <View className="w-[100px] h-[100px] rounded-full bg-slate-700">
        <Text>asd</Text>
      </View>
    </View>
  );
}
