import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import ChoseApartment from "../../components/apartment/ChoseApartment";
import { Image } from "react-native";
import EditDateApartmentDetail from "../../components/apartment/EditDateApartmentDetail";
import MapApartmentDetail from "../../components/apartmentDetail/MapApartmentDetail";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import axios from "axios";
import CarouselApartmentImage from "../../components/apartment/CarouselApartmentImage";
import index from "react-native-swipeable-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAparmentDetail } from "../../redux/actions/apartmentActions";
import {
  addDays,
  addMonths,
  differenceInDays,
  format,
  parseISO,
  subDays,
} from "date-fns";
import { ActivityIndicator } from "react-native";
import Loading from "../../components/Loading";
import CarouselApartmentDetail from "../../components/apartment/CaroselApartmentDetail";
import { StatusBar } from "expo-status-bar";
import {
  getDateRangeBooking,
  getDateRangeDefault,
  getDateRangeOut,
} from "../../redux/actions/dateRangeActions";
import { getRatingApartment } from "../../redux/actions/ratingActions";
import { BottomSheet } from "react-native-btr";
import { XMarkIcon } from "react-native-heroicons/solid";
import StarRating from "react-native-star-rating-widget";

export default function DetailApartment() {
  const route = useRoute();
  const { id, propertyId, roomId } = route.params;
  const [showMore, setShowMore] = useState(false);
  const { apartment, loading } = useSelector((state) => state.apartmentDetail);
  const { ratings } = useSelector((state) => state.ratings);
  const dispatch = useDispatch();
  const [detailAapartMentForRent, setDetailAapartMentForRent] = useState({});
  const [apartmentImage, setApartmentImage] = useState([]);
  const [availableTime, setAvailableTime] = useState({});
  const navigation = useNavigation();
  const [dateRange, setDateRange] = useState();
  const [dateOut, setDateOut] = useState([]);

  const [checkInMap, setCheckInMap] = useState(new Map());
  const [checkOutMap, setCheckOutMap] = useState(new Map());
  const [visibleRating, setVisibleRating] = useState(false);

  useEffect(() => {
    const updateCheckInAndOutMaps = () => {
      const newCheckInMap = new Map();
      const newCheckOutMap = new Map();

      if (
        apartment.timeHasBooked &&
        Array.isArray(apartment.timeHasBooked) &&
        apartment.timeHasBooked.length > 0
      ) {
        apartment.timeHasBooked.forEach((booking, index) => {
          const checkInDate = new Date(booking.checkIn);
          const checkOutDate = new Date(booking.checkOut);

          newCheckInMap.set(format(checkInDate, "yyyy-MM-dd"), checkInDate);
          newCheckOutMap.set(format(checkOutDate, "yyyy-MM-dd"), checkOutDate);
        });
      }

      setCheckInMap(newCheckInMap);
      setCheckOutMap(newCheckOutMap);
    };

    updateCheckInAndOutMaps();
  }, [apartment.timeHasBooked]);

  useEffect(() => {
    dispatch(getAparmentDetail(id));
    dispatch(getRatingApartment(propertyId, roomId));
  }, [dispatch, id, propertyId, roomId]);

  useEffect(() => {
    if (apartment) {
      setApartmentImage(apartment?.property?.propertyImage);
      setAvailableTime(apartment?.availableTime);
    }
  }, [apartment]);

  const { width: screenWidth } = Dimensions.get("window");
  const itemWidthPercentage = 100;

  const itemWidth = (screenWidth * itemWidthPercentage) / 100;
  const startTime = apartment?.availableTime?.startTime;
  const endTime = apartment?.availableTime?.endTime;

  const { dateRangeBooking } = useSelector((state) => state.dateRangeBooking);
  const { dateRangeDefault } = useSelector((state) => state.dateRangeDefault);
  const { dateRangeOut } = useSelector((state) => state.dateOut);

  useFocusEffect(
    useCallback(() => {
      if (apartment) {
        const startTimeBooking = apartment?.availableTime?.startTime;
        const endTimeBooking = apartment?.availableTime?.endTime;
        dispatch(getDateRangeBooking({ startTimeBooking, endTimeBooking }));
      }
    }, [dispatch, apartment])
  );

  useFocusEffect(
    useCallback(() => {
      const startTimeDefault = apartment?.availableTime?.startTime;
      const endTimeDefault = apartment?.availableTime?.endTime;
      dispatch(getDateRangeDefault({ startTimeDefault, endTimeDefault }));
    }, [dispatch, apartment])
  );

  const getDatesOutsideDateRange = (dateRange) => {
    const startDate = new Date(dateRange?.startTimeDefault);
    const endDate = new Date(dateRange?.endTimeDefault);

    const startDateOutsideDateRange = addDays(endDate, 1);
    const endDateOutsideDateRange = subDays(addMonths(startDate, 30), 1);

    const datesOutsideDateRange = [];
    for (
      let i = startDateOutsideDateRange.getTime();
      i <= endDateOutsideDateRange.getTime();
      i += 24 * 60 * 60 * 1000
    ) {
      datesOutsideDateRange.push(new Date(i));
    }

    if (
      apartment.timeHasBooked &&
      Array.isArray(apartment.timeHasBooked) &&
      apartment.timeHasBooked.length > 0
    ) {
      apartment.timeHasBooked.forEach((booking) => {
        const checkInDate = new Date(booking.checkIn);
        const checkOutDate = new Date(booking.checkOut);

        // console.log('Check difference', differenceInDays(checkOutDate, checkInDate));

        if (differenceInDays(checkOutDate, checkInDate) < 2) {
          checkInMap.forEach((checkInDate, key) => {
            if (checkOutMap.has(format(checkInDate, "yyyy-MM-dd"))) {
              datesOutsideDateRange.push(new Date(checkInDate));
            } else {
              // console.log('Ko có');
            }
          });

          // Check if a date is beyond the general availability range
          if (startDate) {
            if (checkInMap.has(format(startDate, "yyyy-MM-dd"))) {
              datesOutsideDateRange.push(new Date(startDate));
            }
          }

          if (endDate) {
            if (checkOutMap.has(format(endDate, "yyyy-MM-dd"))) {
              datesOutsideDateRange.push(new Date(endDate));
            }
          }
        } else {
          for (
            let i = checkInDate.getTime() + 24 * 60 * 60 * 1000;
            i <= checkOutDate.getTime() - 24 * 60 * 60 * 1000;
            i += 24 * 60 * 60 * 1000
          ) {
            checkInMap.forEach((checkInDate) => {
              if (checkOutMap.has(format(checkInDate, "yyyy-MM-dd"))) {
                datesOutsideDateRange.push(new Date(checkInDate));
              } else {
                // console.log('Ko có');
              }
            });

            if (startDate) {
              if (checkInMap.has(format(startDate, "yyyy-MM-dd"))) {
                datesOutsideDateRange.push(new Date(startDate));
              }
            }

            if (endDate) {
              if (checkOutMap.has(format(endDate, "yyyy-MM-dd"))) {
                datesOutsideDateRange.push(new Date(endDate));
              }
            }
            datesOutsideDateRange.push(new Date(i));
          }
        }
      });
    }

    return datesOutsideDateRange;
  };

  useFocusEffect(
    useCallback(() => {
      if (dateRangeDefault) {
        dispatch(getDateRangeOut(getDatesOutsideDateRange(dateRangeDefault)));
      }
    }, [dispatch, dateRangeDefault])
  );

  const toggleBottomNavigationRating = () => {
    setVisibleRating(!visibleRating);
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {/* <StatusBar style="dark" /> */}
          {apartment && (
            <SafeAreaView className="flex-1 ">
              <StatusBar style="dark" hidden={false} animated />
              <ScrollView>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="absolute top-10 left-2 z-10"
                >
                  <View className="bg-slate-50 rounded-full px-3 py-3 opacity-40">
                    <Ionicons name="arrow-back" size={25} />
                  </View>
                </TouchableOpacity>
                <View className=" bg-white relative">
                  <CarouselApartmentDetail
                    image={apartment?.property?.propertyImage}
                  />
                </View>
                <View className="px-4 py-3 bg-white">
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    className="flex row gap-10"
                  >
                    <View className="flex flex-col items-center">
                      <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                        <MaterialIcons
                          size={25}
                          color="gray"
                          name="meeting-room"
                        />
                      </View>
                      <Text className="mt-1">
                        {apartment?.property?.numberBedsRoom} Beds room
                      </Text>
                    </View>
                    <View className="flex flex-col items-center">
                      <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                        <FontAwesome5
                          size={25}
                          color="gray"
                          name="house-user"
                        />
                      </View>
                      <Text className="mt-1">
                        {apartment?.property?.roomSize} meters
                      </Text>
                    </View>
                    <View className="flex flex-col items-center">
                      <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                        <MaterialCommunityIcons
                          size={25}
                          color="gray"
                          name="google-classroom"
                        />
                      </View>
                      <Text className="mt-1">Living room</Text>
                    </View>
                    <View className="flex flex-col items-center">
                      <View className="bg-gray-300 rounded-full w-12 h-12 flex flex-col items-center justify-center">
                        <MaterialCommunityIcons
                          size={25}
                          color="gray"
                          name="balcony"
                        />
                      </View>
                      <Text className="mt-1">Balcony</Text>
                    </View>
                  </ScrollView>
                </View>
                <View className="px-4 py-3 bg-white">
                  <View>
                    <View className="flex flex-row justify-between items-center">
                      <Text className="text-[20px] font-bold">
                        {apartment?.property?.propertyName}
                      </Text>
                      <View className="flex flex-row gap-1 items-center">
                        <AntDesign name="star" color="orange" />
                        <Text className="text-[20px]">
                          {apartment?.property?.rating
                            ? Number(apartment?.property?.rating).toFixed(1)
                            : ""}
                        </Text>
                      </View>
                    </View>

                    <View className="w-full h-[1px] bg-gray-300 my-3"></View>

                    <View className="">
                      <Text className="text-[17px]">
                        {new Date(startTime)?.toDateString()} -{" "}
                        {new Date(endTime)?.toDateString()}
                      </Text>
                      <View className="py-2  ">
                        <Text className="text-black font-bold text-[17px]">
                          Price per nights
                        </Text>
                      </View>
                      <View className="flex flex-row items-center gap-1">
                        {/* <Text>Owner: </Text> */}
                        {/* <Text className="font-bold">
                          {apartment.user.fullName}
                        </Text> */}
                      </View>
                      <View className="flex flex-row gap-3 ">
                        <View className="flex flex-row items-center ">
                          <Text className=" font-bold text-[25px] pr-2">
                            {apartment?.availableTime?.pricePerNight}
                          </Text>
                          <FontAwesome5 name="coins" size={20} color="orange" />
                        </View>
                      </View>
                    </View>

                    {/* <Text className="text-[15px]">Only one 1 on HolidaySwap</Text> */}
                    <TouchableOpacity>
                      <ChoseApartment data={apartment} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-white px-4 mt-2 ">
                  <Text className="font-bold text-[18px] py-4">Image</Text>
                  <View className="">
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ImageFullApartment", {
                          apartmentImage,
                        });
                      }}
                    >
                      <Image
                        style={{ width: "100%", height: 300 }}
                        source={{
                          uri: apartment.property?.propertyImage[0]?.link,
                        }}
                      />
                    </TouchableOpacity>
                    <View className="flex flex-row gap-2 mt-[1px] w-full ">
                      <TouchableOpacity
                        className="w-[50%]"
                        onPress={() => {
                          navigation.navigate("ImageFullApartment", {
                            apartmentImage,
                          });
                        }}
                      >
                        <Image
                          style={{ width: "100%", height: 300 / 2 }}
                          source={{
                            uri: apartment.property?.propertyImage[1]?.link,
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="w-[50%]"
                        onPress={() => {
                          navigation.navigate("ImageFullApartment", {
                            apartmentImage,
                          });
                        }}
                      >
                        <Image
                          style={{ width: "96%", height: 300 / 2 }}
                          source={{
                            uri: apartment.property?.propertyImage[2]?.link,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ImageFullApartment", {
                          apartmentImage,
                        });
                      }}
                      className="border border-gray-500 rounded-md mt-5 mb-4"
                    >
                      <Text className="text-center py-3 font-bold">
                        Show full image
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="bg-white mt-2">
                  <Text className="font-bold px-4 text-[18px] pt-4">
                    Address
                  </Text>

                  {apartment ? (
                    <View>
                      <Text className="text-neutral-500 dark:text-neutral-400 pb-4 px-3">
                        {apartment?.resort?.locationFormattedName}
                      </Text>
                      <MapApartmentDetail
                        latitude={apartment?.resort?.latitude}
                        longitude={apartment?.resort?.longitude}
                        apartment={apartment}
                      />
                    </View>
                  ) : (
                    <View></View>
                  )}
                </View>

                <View className="px-4 bg-white mt-2 py-3">
                  {/* <View className="flex flex-row ">
            <Text className="text-[17px] font-bold">Acreage:</Text>
            <Text className="text-[17px] font-bold"> 50 m2</Text>
          </View> */}
                  <View className="w-full bg-gray-300 h-[1px] my-4"></View>
                  <View>
                    <Text className="text-[17px] font-bold my-2">Describe</Text>
                    <Text>{apartment?.property?.propertyDescription}</Text>
                  </View>
                  <View className="w-full bg-gray-300 h-[1px] my-4"></View>
                  <View className="w-full">
                    <Text className="text-[18px] font-bold mb-2">Owner: </Text>
                    <View className="flex flex-row items-center justify-between">
                      <View className="flex flex-row items-center gap-1">
                        <Image
                          className="rounded-full"
                          style={{ width: 40, height: 40 }}
                          source={{
                            uri: apartment?.user?.avatar,
                          }}
                        />
                        <View>
                          <Text>{apartment?.user?.username}</Text>
                          <Text className="text-[12px] text-green-500">
                            Email verified
                          </Text>
                        </View>
                      </View>
                      <View>
                        <TouchableOpacity className="bg-blue-500 px-2 py-2 rounded-md">
                          <Text className="text-white">Contact with owner</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
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
                      <View className=" bg-white mt-2 py-3">
                        <View style={styles.container}>
                          {/* {apartment.property?.inRoomAmenityType?.map((item, index) => ( */}
                          {apartment?.property?.inRoomAmenityType
                            ?.slice(0, 2)
                            .map((item, index) => (
                              <View key={index} style={styles.column}>
                                <View style={styles.row}>
                                  {/* Icon and title */}
                                  <Text style={styles.icon}>
                                    {item?.inRoomAmenityTypeName}
                                  </Text>
                                </View>
                                <View style={styles.content}>
                                  {/* Content items */}

                                  {item?.inRoomAmenities?.map((item, index) => (
                                    <Text key={index}>
                                      {item.inRoomAmenityName}
                                    </Text>
                                  ))}
                                </View>
                              </View>
                            ))}
                        </View>
                        {showMore ? (
                          <View style={styles.container}>
                            {apartment?.property?.inRoomAmenityType
                              ?.slice(2)
                              .map((item, index) => (
                                <View key={index} style={styles.column}>
                                  <View style={styles.row}>
                                    {/* Icon and title */}
                                    <Text style={styles.icon}>
                                      {item?.inRoomAmenityTypeName}
                                    </Text>
                                  </View>
                                  <View style={styles.content}>
                                    {/* Content items */}

                                    {item?.inRoomAmenities?.map(
                                      (item, index) => (
                                        <Text key={index}>
                                          {item.inRoomAmenityName}
                                        </Text>
                                      )
                                    )}
                                  </View>
                                </View>
                              ))}
                          </View>
                        ) : (
                          <TouchableOpacity onPress={() => setShowMore(true)}>
                            <Text className="text-blue-700 font-bold text-[15px]">
                              View more
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                  {ratings && (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={toggleBottomNavigationRating}
                      className="flex flex-row justify-between items-center"
                    >
                      <Text className="font-bold text-[18px] py-4">Review</Text>
                      <Octicons name="chevron-right" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                </View>
              </ScrollView>
            </SafeAreaView>
          )}

          {/* Rating */}
          <BottomSheet
            visible={visibleRating}
            onBackButtonPress={toggleBottomNavigationRating}
            onBackdropPress={toggleBottomNavigationRating}
          >
            <View style={stylesRating.bottomNavigationView}>
              <View>
                <View className="py-3 border-b w-full border-gray-300 flex flex-row gap-9 items-center px-2">
                  <XMarkIcon
                    onPress={toggleBottomNavigationRating}
                    size={30}
                    color={"black"}
                  />
                  <Text className="text-xl font-bold text-black text-center">
                    Review
                  </Text>
                </View>
                {ratings ? (
                  <ScrollView className="pt-5 px-4">
                    {ratings?.content?.map((item, index) => (
                      <View key={item.id} className="pb-5">
                        <View className="flex flex-row gap-3 items-center">
                          <Image
                            source={
                              item?.user?.avatar
                                ? { uri: item?.user?.avatar }
                                : require("../../assets/images/avatar.png")
                            }
                            className="rounded-full h-20 w-20"
                          />
                          <View>
                            <Text className="font-semibold text-base">
                              {item.ratingType !== "PRIVATE"
                                ? item?.user?.fullName
                                : `Anymous user`}
                            </Text>
                            {item?.createDate ? (
                              <Text>
                                {format(
                                  new Date(item?.createDate),
                                  "dd/MM/yyyy 'at' h:mm a"
                                )}
                              </Text>
                            ) : (
                              ""
                            )}
                            <View pointerEvents="none">
                              <StarRating starSize={18} rating={item?.rating} />
                            </View>
                          </View>
                        </View>

                        <View className="pt-4">
                          <Text className="text-lg font-semibold">
                            {item?.comment}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </ScrollView>
                ) : (
                  <View>
                    <Text className="text-lg font-bold">No have reviews</Text>
                  </View>
                )}
              </View>
            </View>
          </BottomSheet>
        </Fragment>
      )}
    </Fragment>
  );
}
const styles = {
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    width: "50%",
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

const stylesRating = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});
