import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native";
import CaroselApartmentDetail from "../../components/apartment/CaroselApartmentDetail";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import ChoseApartment from "../../components/apartment/ChoseApartment";
import { Image } from "react-native";
import EditDateApartmentDetail from "../../components/apartment/EditDateApartmentDetail";
import MapApartmentDetail from "../../components/apartmentDetail/MapApartmentDetail";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import CarouselApartmentImage from "../../components/apartment/CarouselApartmentImage";
import index from "react-native-swipeable-carousel";

export default function DetailApartment() {
  const route = useRoute();
  const { id } = route.params;
  const [showMore, setShowMore] = useState(false);
  const [detailAapartMentForRent, setDetailAapartMentForRent] = useState({});
  const [apartmentImage, setApartmentImage] = useState([]);
  const [availableTime, setAvailableTime] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    fetchDetailApartmentForRent();
  }, []);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://holiday-swap.click/api/v1/apartment-for-rent/${id}`,
    headers: {},
  };
  const fetchDetailApartmentForRent = () => {
    axios
      .request(config)
      .then((response) => {
        setDetailAapartMentForRent(response.data);
        setApartmentImage(response.data?.property?.propertyImage);
        setAvailableTime(response.data?.availableTime);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;

  const itemWidth = (screenWidth * itemWidthPercentage) / 100;
  const startTime = new Date(availableTime?.startTime);
  const endTime = new Date(availableTime?.endTime);
  return (
    <View className="flex-1 ">
      <ScrollView>
        <View className=" bg-white relative">
          <CarouselApartmentImage image={detailAapartMentForRent?.property?.propertyImage} />
        </View>
        <View className="px-4 py-3 bg-white">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="flex row gap-10">
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialIcons size={25} color="gray" name="meeting-room" />
              </View>
              <Text className="mt-1">{detailAapartMentForRent.property?.numberBedsRoom} Beds room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <FontAwesome5 size={25} color="gray" name="house-user" />
              </View>
              <Text className="mt-1">{detailAapartMentForRent.property?.roomSize} meters</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons size={25} color="gray" name="google-classroom" />
              </View>
              <Text className="mt-1">Living room</Text>
            </View>
            <View className="flex flex-col items-center">
              <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                <MaterialCommunityIcons size={25} color="gray" name="balcony" />
              </View>
              <Text className="mt-1">Balcony</Text>
            </View>
          </ScrollView>
        </View>
        <View className="px-4 py-3 bg-white">
          <View>
            <Text className="text-[20px] font-bold">{detailAapartMentForRent.property?.propertyName}</Text>

            <View className="w-full h-[1px] bg-gray-300 my-3"></View>

            <View className="">
              <Text className="text-[17px]">
                {startTime.toDateString()} - {endTime.toDateString()}
              </Text>
              <View className="py-2  ">
                <Text className="text-black font-bold text-[17px]">Price for nights</Text>
              </View>
              <View className="flex flex-row gap-3 ">
                <View className="flex flex-row items-center ">
                  <Text className=" font-bold text-[25px] pr-2">
                    {detailAapartMentForRent.availableTime?.pricePerNight}
                  </Text>
                  <FontAwesome5 name="coins" size={20} color="orange" />
                </View>
              </View>
            </View>

            {/* <Text className="text-[15px]">Only one 1 on HolidaySwap</Text> */}
            <TouchableOpacity>
              <ChoseApartment detailAapartMentForRent={detailAapartMentForRent} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white px-4 mt-2 ">
          <Text className="font-bold text-[18px] py-4">Image</Text>
          <View className="">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ImageFullApartment", { apartmentImage });
              }}>
              <Image
                style={{ width: itemWidth, height: 300 }}
                source={{
                  uri: apartmentImage[0]?.link,
                }}
              />
            </TouchableOpacity>
            <View className="flex flex-row gap-2 mt-[1px] ">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageFullApartment", { apartmentImage });
                }}>
                <Image
                  style={{ width: itemWidth / 2, height: 300 / 2 }}
                  source={{
                    uri: apartmentImage[1]?.link,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ImageFullApartment", { apartmentImage });
                }}>
                <Image
                  style={{ width: itemWidth / 2, height: 300 / 2 }}
                  source={{
                    uri: apartmentImage[2]?.link,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ImageFullApartment", { apartmentImage });
              }}
              className="border border-gray-500 rounded-md mt-5 mb-4">
              <Text className="text-center py-3 font-bold">Show full image</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white mt-2">
          <Text className="font-bold px-4 text-[18px] py-4">Address</Text>

          <View>
            <MapApartmentDetail />
          </View>
        </View>
        <View className="px-4 bg-white mt-2 py-3">
          {/* <View className="flex flex-row ">
            <Text className="text-[17px] font-bold">Acreage:</Text>
            <Text className="text-[17px] font-bold"> 50 m2</Text>
          </View> */}
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          <View>
            <Text className="text-[17px] font-bold my-2">Describe</Text>
            <Text>{detailAapartMentForRent.property?.propertyDescription}</Text>
          </View>
          <View className="w-full bg-gray-300 h-[1px] my-4"></View>
          {/* <View className="flex flex-row items-center justify-between">
            <View>
              <Text className="text-[17px] font-bold my-2">The apartment is in good condition</Text>
              <EditDateApartmentDetail />
            </View>
            <MaterialIcons size={25} name="keyboard-arrow-right" />
          </View> */}
          {/* <View className="w-full bg-gray-300 h-[1px] my-4"></View> */}
          <View>
            <View className="flex flex-col">
              <Text className="text-[20px] font-bold">Amenity</Text>
              <View className="px-4 bg-white mt-2 py-3">
                <View style={styles.container}>
                  {/* {detailAapartMentForRent.property?.inRoomAmenityType?.map((item, index) => ( */}
                  {detailAapartMentForRent.property?.inRoomAmenityType?.slice(0, 2).map((item, index) => (
                    <View key={index} style={styles.column}>
                      <View style={styles.row}>
                        {/* Icon and title */}
                        <Text style={styles.icon}>{item?.inRoomAmenityTypeName}</Text>
                      </View>
                      <View style={styles.content}>
                        {/* Content items */}

                        {item?.inRoomAmenities?.map((item, index) => (
                          <Text>{item.inRoomAmenityName}</Text>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
                {showMore ? (
                  <View style={styles.container}>
                    {detailAapartMentForRent.property?.inRoomAmenityType?.slice(2).map((item, index) => (
                      <View key={index} style={styles.column}>
                        <View style={styles.row}>
                          {/* Icon and title */}
                          <Text style={styles.icon}>{item?.inRoomAmenityTypeName}</Text>
                        </View>
                        <View style={styles.content}>
                          {/* Content items */}

                          {item?.inRoomAmenities?.map((item, index) => (
                            <Text>{item.inRoomAmenityName}</Text>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <TouchableOpacity onPress={() => setShowMore(true)}>
                    <Text className="text-blue-700 font-bold text-[15px]">View more</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = {
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    width: "50%", // Two columns in one row
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 17,
    fontWeight: "bold",
  },
  content: {
    marginLeft: 10,
  },
};
