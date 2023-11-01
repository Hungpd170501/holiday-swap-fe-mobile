import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";
import MapHome from "../mapHome/MapHome";
import axios from "axios";
import CarouselApartmentImage from "../apartment/CarouselApartmentImage";

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

export default function TabViewHome() {
  useEffect(() => {
    fetchListApartmentForRent();
  }, []);

  const tabs = ["Caroline Resort", "Saigon Park Resort", "Lakeview Villa", "Resort InterContinental Danang "];
  const [selectedTab, setSelectedTab] = useState("Caroline Resort");

  const [listApartmentForRent, setListApartmentForRent] = useState([]);
  const [apartment, setApartment] = useState({});
  const [listApartment, setListApartment] = useState([]);
  const [resort, setResort] = useState({});
  const navigation = useNavigation();
  const apiUrl = "https://api.example.com/apartments";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://holiday-swap.click/api/v1/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=10&sortBy=id&sortDirection=asc",
    headers: {},
  };
  const fetchListApartmentForRent = () => {
    axios
      .request(config)
      .then((response) => {
        setListApartmentForRent(response.data.content);
        {
          // Get the property values from the data array.
          const propertyList = response.data.content.map((obj) => obj.property);

          // Set the list of apartments.
          setListApartment(propertyList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Caroline Resort":
        return (
          <View style={styles.shadow} className="flex-1  ">
            <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
              <View>
                {listApartmentForRent.map((item, index) => (
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
                            <Text className="font-bold">{/* {apartment.nightNumber} */}</Text>
                            <Text className="font-bold">
                              {item.availableTime.startTime} - {item.availableTime.endTime}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
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
