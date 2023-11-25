import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetails } from "../../redux/actions/blogAction";
import { Ionicons } from "@expo/vector-icons";

export default function BlogDetail() {
  const route = useRoute();
  const { id } = route.params;
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogDetail);
  const navigation = useNavigation();
  console.log("Check booking", blog);

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Detail Blog</Text>
      </View>
      <Text> Blof detai</Text>
    </View>
  );
}
