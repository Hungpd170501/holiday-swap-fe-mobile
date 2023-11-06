import React, { useState } from "react";
import { Image, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function CarouselApartmentImage(data) {
  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;

  const itemWidth = (screenWidth * itemWidthPercentage) / 100;

  const renderItem = ({ item, index }) => (
    <View style={{ width: itemWidth, height: 300 }}>
      <View className="" style={{ width: "100%" }}>
        <Image style={{ width: "100%", height: "100%" }} source={item.link ? { uri: item.link } : null} />
        <View
          className="px-7"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "black",
            }}>
            {`${index + 1}/${data.image.length}`}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <Carousel
        layout="default"
        data={data.image}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        renderItem={renderItem}
      />
    </View>
  );
}
