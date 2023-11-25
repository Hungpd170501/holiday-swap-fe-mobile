import React, { useEffect } from "react";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native"; // Import Image component for displaying avatars
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetails, likePost } from "../../redux/actions/blogAction";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import HTML from "react-native-render-html";
import { format } from "date-fns";

export default function BlogDetail() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params;
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogDetail);

  const userId = "your_user_id"; // replace with actual user ID
  const { loading, error, postLike } = useSelector((state) => state.likePost);

  useEffect(() => {
    dispatch(getBlogDetails(id));
  }, [dispatch, id]);

  const handleLikeClick = () => {
    dispatch(likePost(blog.postId, userId));
  };

  useEffect(() => {
    console.log("Redux state:", { loading, error, postLike });
    if (postLike && postLike === "Post reacted to") {
      console.log("Post liked successfully!");
    } else if (error) {
      console.error("Error liking post:", error);
    }
  }, [postLike, error]);

  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px] flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Detail Blog</Text>
      </View>

      {blog ? (
        <ScrollView className="px-3 bg-white py-5 ">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-2">
              <Image
                className="w-[50px] h-[50px]"
                source={{ uri: blog.avatar }}
              />
              <View>
                <Text className="text-[18px] font-bold"> {blog.userName}</Text>
                <Text className="text-[13px]">{blog?.datePosted}</Text>
                {/* <Text>{format(new Date(blog?.datePosted), "dd-MM-yyyy")}</Text> */}
              </View>
            </View>
            <View className="flex flex-row items-center gap-3">
              <View className="flex flex-row items-center gap-1">
                <AntDesign
                  onPress={handleLikeClick}
                  name="like2"
                  size={20}
                  color="gray"
                />
                <Text>{blog.likes}</Text>
              </View>

              <View className="flex flex-row items-center gap-1">
                <AntDesign name="dislike2" size={20} color="gray" />
                <Text>{blog.dislikes}</Text>
              </View>
            </View>
          </View>
          <Text className="py-5">Title: {blog.title}</Text>

          <HTML source={{ html: blog.content }} />
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
