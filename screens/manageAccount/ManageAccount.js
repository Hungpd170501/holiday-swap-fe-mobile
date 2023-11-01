import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userActions";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

export default function ManageAccount() {
  const dispatch = useDispatch();
  const { user, userProfile, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  const navigation = useNavigation();

  // console.log("Check profile", userProfile);
  const [isHide, setIsHide] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const handleInputChange = (text) => {
    setDisplayName(text);
    setIsHide(text !== "");
  };
  return (
    <View className="flex-1">
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">Your details</Text>
        <TouchableOpacity className="flex flex-row justify-end w-[50%]">
          {isHide && (
            <Text className="text-[20px] text-white text-end font-bold">
              Save
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text className="text-[15px] mt-5">Public Details</Text>
          <View className="flex flex-row items-center py-5 gap-5">
            <Image
              className="w-16 h-16 rounded-full"
              source={require("../../assets/images/avt.jpg")}
            />
            <TextInput
              className=" bg-transparent px-1 w-[72%] border-b border-gray-500"
              value={userProfile?.username}
              onChangeText={handleInputChange}
            />
          </View>
          <View className="mt-5">
            <TextInput
              onChangeText={handleInputChange}
              keyboardType="number-pad"
              className=" bg-transparent w-[100%] border-b border-gray-400"
              value={userProfile?.dob}
            />
          </View>
        </View>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text className="text-[15px]">Personal infomation</Text>
          <View className="my-5">
            <TextInput
              onChangeText={handleInputChange}
              label={"First name"}
              className="w-[100%] bg-transparent border-b border-gray-400"
              value={userProfile?.username}
            />
          </View>
          <View className="my-5">
            <TextInput
              onChangeText={handleInputChange}
              label="Last name"
              className="w-[100%] border-b border-gray-400 bg-transparent"
              value={userProfile?.username}
            />
          </View>
          <View className="my-5">
            <TextInput
              onChangeText={handleInputChange}
              label="Phone number"
              value={userProfile?.phone}
              className="  w-[100%] border-b border-gray-400 bg-transparent"
            />
          </View>
          <View className="my-5">
            <TextInput
              onChangeText={handleInputChange}
              className="w-[100%] border-b border-gray-400 bg-transparent"
              label="Gender"
              value={userProfile?.gender}
            />
          </View>
          <View className="py-5">
            <TextInput
              onChangeText={handleInputChange}
              className="w-[100%] border-b border-gray-400 bg-transparent"
              label="City"
            />
          </View>
        </View>
        <View style={styles.shadow} className="mx-2 my-2 px-4 py-4 bg-white ">
          <Text>Email adress</Text>
          <View className="flex flex-row items-center gap-4 py-4">
            <AntDesign name="checkcircleo" size={25} color="green" />
            <View>
              <Text>toilikeyou23@gmail.com</Text>
              <Text>Email has been confirmed</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text className="text-blue-500">EDIT EMAIL ADDRESS</Text>
          </TouchableOpacity>
        </View>
        <View className="mx-2  my-2 px-4 py-4 bg-white ">
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text className="text-red-600 text-center text-[17px]">
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
