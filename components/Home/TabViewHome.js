import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";
import MapHome from "../mapHome/MapHome";
import axios from "axios";
import CarouselApartmentImage from "../apartment/CarouselApartmentImage";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-paper";
import { submitSearchParamApartmentForRent } from "../../redux/actions/searchParamActions";

const ApartmentDatasImpress = [
  {
    id: 1,
    carosel: <CarouselApartmentHome />,
    name: "Alex's the view top of Apartment - Landmark 81 Tower",
    rat: 3.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 301,
    price: "25.000",
    nightNumber: "5 night",
    time: "23nd 28st August",
  },
  {
    id: 2,
    carosel: <CarouselApartmentHome />,
    name: " Landmark 81 Tower",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 981,
    price: 15.0,
    nightNumber: "10 night",
    time: "13nd 23st August",
  },
];
const ApartmentDatasHilly = [
  {
    id: 1,
    carosel: <CarouselApartmentHome />,
    name: "Victoria Núi Sam Lodge",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 301,
    price: 25.0,
    nightNumber: "5 night",
    time: "23nd 28st August",
  },
  {
    id: 2,
    carosel: <CarouselApartmentHome />,
    name: "Sapa Jade Hill Resort",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 981,
    price: 15.0,
    nightNumber: "10 night",
    time: "13nd 23st August",
  },
];
const ApartmentDatasOcean = [
  {
    id: 1,
    carosel: <CarouselApartmentHome />,
    name: "Regent Phú Quốc",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 301,
    price: 25.0,
    nightNumber: "5 night",
    time: "23nd 28st August",
  },
  {
    id: 2,
    carosel: <CarouselApartmentHome />,
    name: " JW Marriott Phu Quoc Emerald Bay Resort & Spa.",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 981,
    price: 15.0,
    nightNumber: "10 night",
    time: "13nd 23st August",
  },
];
const ApartmentDatasCity = [
  {
    id: 1,
    carosel: <CarouselApartmentHome />,
    name: "Regent Phú Quốc",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 301,
    price: 25.0,
    nightNumber: "5 night",
    time: "23nd 28st August",
  },
  {
    id: 2,
    carosel: <CarouselApartmentHome />,
    name: " JW Marriott Phu Quoc Emerald Bay Resort & Spa.",
    rat: 4.9,
    nameResort: "Les Hameaux de l'Orient",
    type: "luxury property",
    apartmentID: 981,
    price: 15.0,
    nightNumber: "10 night",
    time: "13nd 23st August",
  },
];

export default function TabViewHome(props) {
  const { searchParam } = useSelector((state) => state.searchParam);
  useEffect(() => {
    fetchListApartmentForRent();
  }, [searchParam]);

  const navigation = useNavigation();
  const tabs = ["Caroline Resort", "Saigon Park Resort", "Lakeview Villa", "Resort InterContinental Danang "];
  const [selectedTab, setSelectedTab] = useState("Caroline Resort");
  let pageNo = searchParam.pageNo;
  const [listApartmentForRent, setListApartmentForRent] = useState([]);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  let param = "";
  const apiUrl = "https://holiday-swap.click/api/v1/apartment-for-rent";

  const loadArrayOfParram = (listOfParram, name) => {
    listOfParram.map((data) => {
      param += `&${name}=${data}`;
    });
  };
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "",
    headers: {},
  };
  const fetchListApartmentForRent = async () => {
    param = `?locationName=${searchParam.locationName}&resortId=${searchParam.resortId}&checkIn=${searchParam.checkIn}&checkOut=${searchParam.checkOut}&min=${searchParam.min}&max=${searchParam.max}&guest=${searchParam.guest}&numberBedsRoom=${searchParam.numberBedsRoom}&numberBathRoom=${searchParam.numberBathRoom}&pageNo=${searchParam.pageNo}&pageSize=${searchParam.pageSize}&sortBy=${searchParam.sortBy}&sortDirection=${searchParam.sortDirection}`;
    loadArrayOfParram(searchParam.listOfInRoomAmenity, "listOfInRoomAmenity", param);
    loadArrayOfParram(searchParam.listOfPropertyView, "listOfPropertyView", param);
    loadArrayOfParram(searchParam.listOfPropertyType, "listOfPropertyType", param);
    config.url = apiUrl.concat(param);
    console.log("config.url :>> ", config.url);
    await axios
      .request(config)
      .then((response) => {
        // setListApartmentForRent(...listApartmentForRent, ...contentRsp);
        let contentRsp = listApartmentForRent.concat(response.data.content);
        if (searchParam.pageNo == 0) setListApartmentForRent(response.data.content);
        else setListApartmentForRent(contentRsp);
        setData(response.data);
        {
          // Get the property values from the data array.
          const propertyList = response.data.content.map((obj) => obj.property);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOnScrollEnd = () => {
    if (pageNo < data.totalPages - 1) {
      pageNo++;
      var searchParam = { pageNo: pageNo };
      dispatch(submitSearchParamApartmentForRent(searchParam));
    }
  };
  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    // Calculate the current scroll position
    const scrollY = contentOffset.y;

    // Calculate the height of the ScrollView's visible area
    const scrollViewHeight = layoutMeasurement.height;

    // Calculate the height of the entire content
    const contentHeight = contentSize.height;

    // Check if the user has scrolled to the end
    if (scrollY + scrollViewHeight >= contentHeight - 100) {
      // User has reached the end of the ScrollView content
      console.log("Scrolled to the end");
      handleOnScrollEnd();
    }
  };
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Caroline Resort":
        return (
          <View style={styles.shadow} className="flex-1  ">
            <ScrollView
              showsVerticalScrollIndicator={false}
              onScrollEndDrag={(event) => {
                handleScroll(event);
              }}
              className="mt-5">
              <View>
                {listApartmentForRent.map((item, index) => {
                  const startTime = new Date(item.availableTime?.startTime);
                  const endTime = new Date(item.availableTime?.endTime);
                  // Calculate the time difference in milliseconds
                  const timeDiff = endTime - startTime;

                  // Calculate the number of days (nights)
                  const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

                  return (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("DetailApartment", { id: item.availableTime.id })}>
                        <CarouselApartmentImage image={item.property.propertyImage} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("DetailApartment", { id: item.availableTime.id })}
                        className=" mb-8">
                        <View className="">
                          <View className="">
                            <View className="flex flex-row items-center justify-between">
                              <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">
                                {item.property.propertyName}
                              </Text>
                              <View className="flex flex-row items-center gap-1">
                                <Text>{5}</Text>
                                <AntDesign name="star" color="orange" />
                              </View>
                            </View>
                            <View className="flex flex-row gap-2 ">
                              <Text className="font-bold">Resort:</Text>
                              <Text>{item.resort.resortName}</Text>
                            </View>
                            <View className="flex flex-row gap-2 py-2">
                              <Text className="font-bold">Type:</Text>
                              <Text>{item.property.propertyType.propertyTypeName}</Text>
                            </View>
                            {/* <View className="flex flex-row gap-2 mb-2"> */}
                            {/* <Text className="font-bold">Apartment ID:</Text> */}
                            {/* <Text>{apartment.apartmentID}</Text> */}
                            {/* </View> */}

                            <View className="max-w-[100%] overflow-hidden pb-2">
                              <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                                {item.property.propertyDescription}
                              </Text>
                            </View>
                            <View className="flex flex-row gap-1 items-center mb-1">
                              <Text className="text-[20px] font-bold">{item.availableTime.pricePerNight}</Text>
                              <FontAwesome5 name="coins" size={20} color="orange" />
                            </View>

                            <View className="flex flex-row items-center ">
                              <Text className="font-bold">{nights} nights</Text>
                            </View>
                            <View className="flex flex-row items-center ">
                              <Text className="font-bold">
                                {startTime.toDateString()} - {endTime.toDateString()}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
            <View className=" w-full absolute  flex h-full flex-col justify-end ">
              <MapHome />
            </View>
          </View>
        );
      case "Saigon Park Resort":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <TouchableOpacity onPress={() => navigation.navigate("DetailApartment")} className=" mb-8">
                <View className="">
                  {ApartmentDatasHilly.map((apartment) => (
                    <View className="mb-10" key={apartment.id}>
                      <View>{apartment.carosel}</View>
                      <View className="flex flex-row items-center justify-between">
                        <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">{apartment.name}</Text>
                        <View className="flex flex-row items-center gap-1">
                          <Text>4.94</Text>
                          <AntDesign name="star" color="orange" />
                        </View>
                      </View>
                      <View className="flex flex-row gap-2 ">
                        <Text className="font-bold">Resort:</Text>
                        <Text>Les Hameaux de l'Orient</Text>
                      </View>
                      <View className="flex flex-row gap-2 py-2">
                        <Text className="font-bold">Type:</Text>
                        <Text>Luxury property</Text>
                      </View>
                      <View className="flex flex-row gap-2 mb-2">
                        <Text className="font-bold">Apartment ID:</Text>
                        <Text>310</Text>
                      </View>

                      <View className="max-w-[100%] overflow-hidden pb-2">
                        <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                          Unique and secluded atmosphere with limitless views
                        </Text>
                      </View>
                      <View className="flex flex-row gap-1 items-center mb-1">
                        <Text className="text-[20px] font-bold">25.000</Text>
                        <FontAwesome5 name="coins" size={20} color="orange" />
                      </View>

                      <View className="flex flex-row items-center ">
                        <Text className="font-bold">5 Night : </Text>
                        <Text className="font-bold">23rd - 28nd August</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className=" w-full absolute  flex h-full flex-col justify-end ">
              <MapHome />
            </View>
          </View>
        );
      case "Lakeview Villa":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <TouchableOpacity onPress={() => navigation.navigate("DetailApartment")} className=" mb-8">
                <View className="">
                  {ApartmentDatasOcean.map((apartment) => (
                    <View className="mb-10" key={apartment.id}>
                      <View>{apartment.carosel}</View>
                      <View className="flex flex-row items-center justify-between">
                        <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">{apartment.name}</Text>
                        <View className="flex flex-row items-center gap-1">
                          <Text>4.94</Text>
                          <AntDesign name="star" color="orange" />
                        </View>
                      </View>
                      <View className="flex flex-row gap-2 ">
                        <Text className="font-bold">Resort:</Text>
                        <Text>Les Hameaux de l'Orient</Text>
                      </View>
                      <View className="flex flex-row gap-2 py-2">
                        <Text className="font-bold">Type:</Text>
                        <Text>Luxury property</Text>
                      </View>
                      <View className="flex flex-row gap-2 mb-2">
                        <Text className="font-bold">Apartment ID:</Text>
                        <Text>310</Text>
                      </View>

                      <View className="max-w-[100%] overflow-hidden pb-2">
                        <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                          Unique and secluded atmosphere with limitless views
                        </Text>
                      </View>
                      <View className="flex flex-row gap-1 items-center mb-1">
                        <Text className="text-[20px] font-bold">25.000</Text>
                        <FontAwesome5 name="coins" size={20} color="orange" />
                      </View>

                      <View className="flex flex-row items-center ">
                        <Text className="font-bold">5 Night : </Text>
                        <Text className="font-bold">23rd - 28nd August</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className=" w-full absolute  flex h-full flex-col justify-end ">
              <MapHome />
            </View>
          </View>
        );
      case "Resort InterContinental Danang ":
        return (
          <View style={styles.shadow} className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <TouchableOpacity onPress={() => navigation.navigate("DetailApartment")} className=" mb-8">
                <View className="">
                  {ApartmentDatasCity.map((apartment) => (
                    <View className="mb-10" key={apartment.id}>
                      <View>{apartment.carosel}</View>
                      <View className="flex flex-row items-center justify-between">
                        <Text className="underline pb-3 w-[80%] text-[18px] font-bold pt-2">{apartment.name}</Text>
                        <View className="flex flex-row items-center gap-1">
                          <Text>4.94</Text>
                          <AntDesign name="star" color="orange" />
                        </View>
                      </View>
                      <View className="flex flex-row gap-2 ">
                        <Text className="font-bold">Resort:</Text>
                        <Text>Les Hameaux de l'Orient</Text>
                      </View>
                      <View className="flex flex-row gap-2 py-2">
                        <Text className="font-bold">Type:</Text>
                        <Text>Luxury property</Text>
                      </View>
                      <View className="flex flex-row gap-2 mb-2">
                        <Text className="font-bold">Apartment ID:</Text>
                        <Text>310</Text>
                      </View>

                      <View className="max-w-[100%] overflow-hidden pb-2">
                        <Text className="text-[15px] whitespace-nowrap overflow-ellipsis">
                          Unique and secluded atmosphere with limitless views
                        </Text>
                      </View>
                      <View className="flex flex-row gap-1 items-center mb-1">
                        <Text className="text-[20px] font-bold">25.000</Text>
                        <FontAwesome5 name="coins" size={20} color="orange" />
                      </View>

                      <View className="flex flex-row items-center ">
                        <Text className="font-bold">5 Night : </Text>
                        <Text className="font-bold">23rd - 28nd August</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View className=" w-full absolute  flex h-full flex-col justify-end ">
              <MapHome />
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 px-4 bg-white">
      {/* <Text>{paramSearch?.sortDirection}</Text> */}
      <View className=" border-b border-blue-200 ">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row gap-10 ">
            {tabs.map((tab) => (
              <TouchableOpacity
                className="pb-3"
                key={tab}
                onPress={() => setSelectedTab(tab)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: selectedTab === tab ? 2 : 0,
                    borderBottomColor: selectedTab === tab ? "#009FC2" : "transparent",
                  },
                ]}>
                <Text style={selectedTab === tab ? { color: "#007FC4" } : {}}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      {renderTabContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
