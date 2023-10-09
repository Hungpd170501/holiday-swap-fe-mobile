import React from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import AvtHeader from "../../components/Home/AvtHeader";
import SearchSession from "../../components/search/SearchSession";
import CardListResort from "../../components/resort/CardListResort";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
export default function ResortList() {
  return (
    <View>
      <View>
        <AvtHeader />
      </View>
      <ScrollView>
        <View>
          <SearchSession />
        </View>
        <View>
          <CardListResort />
        </View>
      </ScrollView>
    </View>
  );
}
