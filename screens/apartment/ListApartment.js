import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import AvtHeader from "../../components/Home/AvtHeader";
import { ScrollView } from "react-native";
import CardApartment from "../../components/apartment/CardApartment";

export default function ListApartment() {
  const navigation = useNavigation();

  return (
    <>
      <AvtHeader />
      <ScrollView>
        <View className="px-4">
          <CardApartment />
        </View>
      </ScrollView>
    </>
  );
}
