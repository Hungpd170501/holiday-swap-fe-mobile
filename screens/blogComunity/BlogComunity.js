import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import HTML from "react-native-render-html";
import { getBlog } from "../../redux/actions/blogAction";
import Loading from "../../components/loading/Loading";
import { Image } from "react-native";
import { format } from "date-fns";

export default function BlogComunity({ navigation }) {
  const dispatch = useDispatch();
  const { listBlog, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Blog Community</Text>
      </View>

      {error ? (
        <View>
          <Text>Error: {error}</Text>
        </View>
      ) : (
        <ScrollView className="flex flex-col px-5  gap-3 mt-5 mb-5">
          {listBlog && listBlog.length > 0 ? (
            listBlog.map((blog) => (
              <View
                key={blog.id}
                className=" border border-gray-300 rounded-md"
              >
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-2 p-3">
                    <Image
                      className="w-[50px] h-[50px] rounded-full"
                      source={{ uri: blog?.avatar }}
                    />
                    <View>
                      <Text className="text-[20px] font-bold">
                        {blog.userName}
                      </Text>
                      <Text>
                        {format(new Date(blog.datePosted), "MMMM d, yyyy")}
                      </Text>
                    </View>
                  </View>
                  <View className="p-3 flex gap-1 flex-row items-center">
                    <View>
                      <AntDesign name="like2" size={20} color="gray" />
                    </View>
                    <View>
                      <Text>{blog.likes}</Text>
                    </View>
                  </View>
                </View>
                <View className="p-3">
                  <HTML source={{ html: blog.content }} />
                </View>
              </View>
            ))
          ) : (
            <View className="mb-[80%]">
              <Loading />
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}
