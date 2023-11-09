import React from "react";
import { View } from "react-native-animatable";
import TabViewHome from "../../components/Home/TabViewHome";
import SearchHome from "../../components/Home/SearchHome";
import { Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { id } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const { user } = useSelector((state) => state.user);
  const { searchParam } = useSelector((state) => state.searchParam);
  const navigation = useNavigation();

  const getToken = () => {
    return SecureStore.getItemAsync("secure_token");
  };

  const [authen, setAuthen] = useState(
    getToken().then((token) => setAuthen(token))
  );

  useEffect(() => {
    if (!authen) {
      navigation.navigate("SignInScreen");
    }
  }, [authen]);
  return (
    <>
      <View className="bg-white ">
        <StatusBar style="light" />
        <SearchHome />
      </View>
      <TabViewHome />
    </>
  );
}
