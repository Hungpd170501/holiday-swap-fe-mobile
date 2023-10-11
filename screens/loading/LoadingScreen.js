import React, { useEffect } from "react";
import { Text, View, StatusBar } from "react-native";
import Loading from "../../components/loading/Loading";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView>
      <View className="flex flex-col items-center justify-center w-full h-full bg-sky-500">
        <StatusBar backgroundColor="#ffffff" />
        <View className="w-[220px] h-[220px] absolute bg-sky-400 rounded-full flex items-center justify-center">
          <Text className="text-white text-[32px] font-bold">HolidaySwap</Text>
          <Text className="text-white text-base font-normal">
            Discover your destination
          </Text>
        </View>
        <View>
          <Loading />
        </View>
      </View>
    </ScrollView>
  );
}
