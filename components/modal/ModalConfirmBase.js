import React, { useState } from "react";
import { View, Modal } from "react-native";
import Button from "../button/Button";
import { Text } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

const ModalConfirmBase = ({
  modalVisible,
  setModalVisible,
  context,
  onPress,
}) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center bg-slate-200">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-slate-200 opacity-90">
          <View className="m-5 bg-white rounded-3xl p-9 items-center shadow-md">
            <Text className="mb-4 text-center text-3xl font-black">
              {context}
            </Text>
            <View className="flex flex-row gap-3">
              <Button text={"Continue"} onPress={onPress} />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="px-5 py-2 rounded-md bg-gray-300 flex my-4 mx-4"
              >
                <Text className="text-center justify-center font-bold text-black text-xl">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalConfirmBase;
