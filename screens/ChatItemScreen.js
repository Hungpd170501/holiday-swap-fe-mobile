import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import BtnLoginGoogle from "../components/BtnLoginGoogle";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function ChatItemScreen() {
  const [isGreen, setIsGreen] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="flex justify-between items-center w-full">
      <View className="flex-row items-center justify-center mt-[70px]">
        <View className="-ml-[130px] mr-[70px]">
          <TouchableOpacity
            className="w-[55px] h-[55px] bg-[#D9D5D5] rounded-full flex justify-center items-center "
            onPress={() => navigation.navigate("ChatScreen")}
          >
            <AntDesign name="arrowleft" size={20} color="#AAAAAA" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-bold text-[24px]">Lụa lã</Text>
        </View>
      </View>
      <View className="flex-row mb-[40px] mt-[40px]">
        <Image
          className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
          source={require("../assets/images/avtChat4.jpg")}
        />
        <View className="w-auto h-auto bg-slate-200 px-6 py-10 rounded-2xl">
          <Text>Tôi có một khu nghỉ dưỡng cần trao đổi</Text>
        </View>
      </View>
      <View className="flex-row mb-[40px]">
        <View className="w-auto h-auto bg-slate-200 px-6 py-10 rounded-2xl">
          <Text>Tôi có một khu nghỉ dưỡng cần trao đổi</Text>
        </View>
        <Image
          className="ml-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
          source={require("../assets/images/avtChat4.jpg")}
        />
      </View>
      <View className="flex-row mb-[40px]">
        <Image
          className="ml-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
          source={require("../assets/images/avtChat4.jpg")}
        />
        <View className="w-auto h-auto bg-slate-200 px-6 py-10 rounded-2xl">
          <Text>Tôi có một khu nghỉ dưỡng cần trao đổi</Text>
        </View>
      </View>
      <View className="flex-row mb-[40px]">
        <View className="w-auto h-auto bg-slate-200 px-6 py-10 rounded-2xl">
          <Text>Tôi có một khu nghỉ dưỡng cần trao đổi</Text>
        </View>
        <Image
          className="ml-[8px] rounded-full w-[60] h-[60] mb-[20px]  "
          source={require("../assets/images/avtChat4.jpg")}
        />
      </View>
      <View className="flex-row items-center">
        <TextInput
          placeholder="Message"
          className="px-[20px] py-[10px] border border-gray-300 bg-slate-100 rounded-3xl w-[340px]"
        />
        <MaterialIcons
          name="send"
          size={25}
          color="#2196F3"
          style={{ marginLeft: -30 }}
        />
      </View>
    </View>
  );
}
