import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import MapView, { Marker, Heatmap } from "react-native-maps";
import { Dimensions } from "react-native";

import { BottomSheet } from "react-native-btr";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function MapHome() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [mapLat, setMapLat] = useState(10.841328);
  const [mapLong, setMapLong] = useState(106.810473);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View className=" ">
      <View className=" mb-2 ">
        <TouchableOpacity
          onPress={toggleBottomNavigationView}
          className=" flex flex-row justify-center items-center  "
        >
          <Text className="border border-gray-400 rounded-full py-2 px-6 bg-black text-white text-center opacity-70">
            Maps
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View>
            <View>
              <MapView
                initialRegion={{
                  latitude: 10.841328,
                  longitude: 106.810473,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.02,
                }}
                style={styles.map}
                mapType="standard"
              >
                <Marker
                  coordinate={{
                    latitude: 10.841328,
                    longitude: 106.810473,
                  }}
                  title="Thức Bui Resort"
                  description="Saigon Park Resort"
                  pinColor={"red"}
                />
                <Marker
                  coordinate={{
                    latitude: 10.844406208155235,
                    longitude: 106.80725192959953,
                  }}
                  title="Thinh Bui Resort"
                  description="Lakeview Villa"
                  pinColor={"red"}
                />
                <Marker
                  coordinate={{
                    latitude: 10.840191283504446,
                    longitude: 106.80785274439928,
                  }}
                  title="Duy Thuong Resort"
                  description="Khu Nghỉ dưỡng Caroline Resort"
                  pinColor={"red"}
                />
              </MapView>
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
    height: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
