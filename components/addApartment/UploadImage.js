import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import * as FileSystem from "expo-file-system";

export default function UploadImage({ handleChangeImage }) {
  const [images, setImages] = useState([]);

  const convertAssetToFile = async (asset) => {
    const fileInfo = await FileSystem.getInfoAsync(asset.uri);
    const fileUri = fileInfo.uri;
    const fileExtension = fileUri.split(".").pop();

    const newFileUri =
      FileSystem.documentDirectory + `image_${Date.now()}.${fileExtension}`;

    await FileSystem.copyAsync({
      from: fileUri,
      to: newFileUri,
    });

    return {
      uri: newFileUri,
      name: `image_${Date.now()}.${fileExtension}`,
      type: `image/${fileExtension}`,
    };
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      // Lấy danh sách các hình ảnh đã chọn
      const selectedImages = result.assets.map((asset) => asset.uri);
      const selectedImageChange = result.assets.map((asset) => asset);

      setImages([...images, ...selectedImages]);
      handleChangeImage(selectedImageChange);
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
