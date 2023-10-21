// import React from "react";
// import { Image, Text, View, Dimensions } from "react-native";
// import Carousel from "react-native-snap-carousel";

// const data = [
//   { image: require("../../assets/images/landmark1.jpg") },
//   { image: require("../../assets/images/landmark2.jpg") },
//   { image: require("../../assets/images/landmark3.jpg") },
//   { image: require("../../assets/images/landmark1.jpg") },
// ];

// export default function CarouselApartmentDetail() {
//   const { width: screenWidth } = Dimensions.get("window");
//   const itemWidthPercentage = 100;

//   const itemWidth = (screenWidth * itemWidthPercentage) / 100;

//   const renderItem = ({ item, index }) => (
//     <View className="px-4" style={{ width: itemWidth, height: 300 }}>
//       <Image style={{ width: "100%", height: "100%" }} source={item.image} />
//       <Text
//         style={{
//           position: "absolute",
//           fontSize: 15,
//           fontWeight: "bold",
//           bottom: 10,
//           right: 10,
//           color: "black",
//         }}
//       >
//         {`${index + 1}/${data.length}`}
//       </Text>
//     </View>
//   );

//   return (
//     <View>
//       <Carousel
//         layout="default"
//         data={data}
//         sliderWidth={screenWidth}
//         itemWidth={itemWidth}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }

import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  { image: require("../../assets/images/landmark1.jpg") },
  { image: require("../../assets/images/landmark2.jpg") },
  { image: require("../../assets/images/landmark3.jpg") },
  { image: require("../../assets/images/landmark1.jpg") },
];

export default function CarouselApartmentDetail() {
  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;

  const itemWidth = (screenWidth * itemWidthPercentage) / 100;

  const renderItem = ({ item, index }) => (
    <View style={{ width: itemWidth, height: 300 }}>
      <View className="px-4" style={{ width: "100%" }}>
        <Image style={{ width: "100%", height: "100%" }} source={item.image} />
        <View
          className="px-4"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {`${index + 1}/${data.length}`}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
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
