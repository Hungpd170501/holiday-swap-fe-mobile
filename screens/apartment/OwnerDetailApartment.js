import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import EditNameApartment from "../../components/ownerDetailApartment/EditNameApartment";
import EditDesDetailApartment from "../../components/ownerDetailApartment/EditDesDetailApartment";
import EditImgDetailApartment from "../../components/ownerDetailApartment/EditImgDetailApartment";
import EditPublicTime from "../../components/ownerDetailApartment/EditPublicTime";
import ModalUpdate from "../../components/ownerDetailApartment/ModalUpdate";
import { useState } from "react";

export default function OwnerDetailApartment() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Manage Apartment</Text>
      </View>
      <View className="">
        <ScrollView>
          <View className="px-4 mt-2 ">
            <EditNameApartment />
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center py-4">
                <Text className="font-bold">Adress: </Text>
                <Text className="text-[20px]">Phu Quoc resort </Text>
              </View>
              <TouchableOpacity>
                <Entypo name="block" size={20} />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                <Text className="font-bold">Property type: </Text>
                <Text className="text-[20px]">Luxury property </Text>
              </View>
              <TouchableOpacity>
                <Entypo name="block" size={20} />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-between mt-4">
              <View className="flex flex-row items-center">
                <Text className="font-bold">Apartment ID: </Text>
                <Text className="text-[20px]">868 </Text>
              </View>
              <TouchableOpacity>
                <Entypo name="block" size={20} />
              </TouchableOpacity>
            </View>
            <View className="pt-4">
              <EditDesDetailApartment />
            </View>
            <View>
              <EditPublicTime />
            </View>
            <View>
              <EditImgDetailApartment />
            </View>
          </View>
        </ScrollView>
      </View>
      <ModalUpdate
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View className="flex flex-row justify-end px-4">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-blue-500 py-3 px-5 rounded-md mt-10"
        >
          <Text className="text-white font-bold">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
