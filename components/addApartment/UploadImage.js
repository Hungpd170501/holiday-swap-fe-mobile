import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function UploadImage() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // Lấy danh sách các hình ảnh đã chọn
      const selectedImages = result.assets.map((asset) => asset.uri);
      setImages([...images, ...selectedImages]);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage}>
        <Text className="text-[20px] font-bold  mb-5 bg-blue-500 px-2 py-3 rounded-md text-white">
          Upload image
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <View key={index} style={{ width: "33.33%", padding: 5 }}>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", aspectRatio: 1 }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}