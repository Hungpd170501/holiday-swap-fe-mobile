import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  { image: require("../../assets/images/landmark1.jpg") },
  { image: require("../../assets/images/landmark2.jpg") },
  { image: require("../../assets/images/landmark3.jpg") },
  { image: require("../../assets/images/landmark1.jpg") },
];

export default function CarouselApartmentDetail() {
  const navigation = useNavigation();
  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;
  const itemWidth = (screenWidth * itemWidthPercentage) / 100;

  const renderItem = ({ item, index }) => (
    <View>
      <View style={{ width: itemWidth, height: 300 }}>
        <Image style={{ width: "100%", height: "100%" }} source={item.image} />
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "black" }}>
            {`${index + 1}/${data.length}`}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View className="absolute z-10 top-3 w-full flex flex-row justify-between px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{ backgroundColor: "white", padding: 10, borderRadius: 30 }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{ backgroundColor: "white", padding: 10, borderRadius: 30 }}
          >
            <AntDesign name="hearto" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Carousel
        layout="default"
        data={data}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        renderItem={renderItem}
      />
    </View>
  );
}
