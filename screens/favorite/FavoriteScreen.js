import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import ModalRemoveFavorite from "../../components/modal/ModalRemoveFavorite";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function FavoriteScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [items, setItems] = React.useState([
    {
      id: 1,
      name: "Landmark View",
      image: require("../../assets/images/landmark4.jpg"),
    },
    {
      id: 2,
      name: "Landmark View ",
      image: require("../../assets/images/landmark2.jpg"),
    },
    {
      id: 3,
      name: "Landmark View",
      image: require("../../assets/images/landmark3.jpg"),
    },
  ]);

  const handleDeleteItem = (itemIdToDelete) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemIdToDelete)
    );
  };

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Favorites list</Text>
      </View>
      <ScrollView>
        {items.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate("OwnerDetailApartment")}
              className="flex flex-row bg-white mt-3 items-center justify-start rounded-md py-2 px-2"
            >
              <Image
                className="w-[25%] h-[90px] rounded-md mr-3"
                source={item.image}
              />
              <View className="w-[65%]">
                <Text className="text-[20px] font-bold">{item.name}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setItemToDelete(item.id); // Lưu item.id cần xóa
                  setModalVisible(true);
                }}
              >
                <Ionicons name="close" size={20} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ModalRemoveFavorite
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onRemoveItem={handleDeleteItem}
        itemToDelete={itemToDelete}
      />
    </View>
  );
}
