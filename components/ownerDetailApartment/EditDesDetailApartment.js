import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EditDesDetailApartment() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [newApartmentDes, setNewApartmentDes] = useState(
    "My family is currently living in an apartment in An Binh apartment building. We have lived in this home for nearly 5 years. Every corner of the house bears the mark of my maturity."
  );
  const [apartmentName, setApartmentName] = useState(
    "My family is currently living in an apartment in An Binh apartment building. We have lived in this home for nearly 5 years. Every corner of the house bears the mark of my maturity."
  );

  const toggleBottomNavigationView = () => {
    if (apartmentName !== newApartmentDes) {
      setApartmentName(newApartmentDes);
    }
    setVisible(!visible);
  };
  return (
    <View className="">
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View className="flex flex-row justify-between items-center">
          <View className=" w-[90%]">
            <Text className="font-bold">Description apartment: </Text>
            <Text className="text-[15px] w-[80%]">{apartmentName}</Text>
          </View>
          <AntDesign size={25} name="edit" />
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ScrollView className="w-full px-4 mt-4 ">
                <TextInput
                  multiline
                  className="bg-blue-200 w-full px-2 py-4 rounded-lg"
                  placeholder="Landmark View"
                  value={newApartmentDes}
                  onChangeText={(text) => setNewApartmentDes(text)}
                />
                <View className="flex flex-row justify-end">
                  <TouchableOpacity
                    onPress={toggleBottomNavigationView}
                    className="bg-blue-500 rounded-md px-3 py-2 my-4"
                  >
                    <Text className="text-[20px] text-white">Apply</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "25%",
  },
});
