import React from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import AvtHeader from "../../components/Home/AvtHeader";
import SearchSession from "../../components/search/SearchSession";

export default function ResortList() {
  return (
    <View>
      <View>
        <AvtHeader />
      </View>
      <View>
        <SearchSession />
      </View>
    </View>
  );
}
