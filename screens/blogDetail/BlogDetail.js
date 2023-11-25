import React, { useEffect } from "react";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native"; // Import Image component for displaying avatars
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetails } from "../../redux/actions/blogAction";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import { format } from "date-fns";

export default function BlogDetail() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params;
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogDetail);

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Detail Blog</Text>
      </View>

      {blog ? (
        <ScrollView className=" px-3 bg-white">
          <View className="flex flex-row items-center justify-between py-5">
            <View className="flex flex-row  gap-2">
              <Image
                source={{ uri: blog.avatar }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <View>
                <View className="flex flex-row items-center">
                  <Text className="text-[16px]">Author: </Text>
                  <Text className="text-[18px] font-bold">{blog.userName}</Text>
                </View>
                <View className="flex flex-row items-center ">
                  <Text className="text-[16px]">Date Posted:</Text>
                  <Text className="text-[18px] font-bold">
                    {format(new Date(blog.datePosted), "dd-MM-yyyy")}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text>Likes: {blog.likes}</Text>
              <Text>Dislikes: {blog.dislikes}</Text>
            </View>
          </View>
          <Text>Title: {blog.title}</Text>

          <HTML source={{ html: blog.content }} />
          {/* 
          <Image
            source={{ uri: blog.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          /> */}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
