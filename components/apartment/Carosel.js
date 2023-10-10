import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import Carousel from "react-native-swipeable-carousel";

// imagePath can get images URL or imported images.

const data = [
  "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-s/02/4b/d6/dd/shades.jpg?w=600&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/0d/4c/04/shades-resort-apartments.jpg?w=600&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-s/01/f7/09/b7/caption.jpg?w=600&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/8c/c7/27/shades-resort-apartments.jpg?w=1200&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/a5/29/82/our-room-on-day-2.jpg?w=600&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/02/9e/ce/shades-resort.jpg?w=1200&h=-1&s=1",
];

export default function Carosel() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ImageFullApartment")}>
      <Carousel images={data} enableGestureSwipe={true} />
    </TouchableOpacity>
  );
}
