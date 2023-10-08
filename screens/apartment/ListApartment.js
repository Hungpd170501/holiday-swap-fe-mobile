import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import AvtHeader from "../../components/Home/AvtHeader";
import { ScrollView } from "react-native";
import CardApartment from "./CardApartment";

export default function ListApartment() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <View>
          <AvtHeader />
        </View>
        <View className="px-4">
          <CardApartment />
        </View>
      </ScrollView>
    </>
  );
}
