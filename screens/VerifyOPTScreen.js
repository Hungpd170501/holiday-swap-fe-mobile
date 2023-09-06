import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Keyboard,
  Pressable,
} from "react-native";
import * as Icon from "react-native-feather";
import OTPInputField from "../components/OTPInputField";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import ModalConfirm from "../components/ModalConfirm";

const VerifyOPTScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* Button back */}
          <View className="relative py-6">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="absolute top-4 left-4 bg-[#ECECEC] p-3 rounded-full shadow"
            >
              <Icon.ArrowLeft strokeWidth={3} stroke={"#AAAAAA"} />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View className="justify-center items-center flex w-full py-3">
            <Text className="text-3xl font-bold justify-center">
              Verify OTP
            </Text>
            <Text className="text-lg font-normal mx-6 my-6 text-center">
              We have just sent 4 digit code via your email: email@gmail.com
            </Text>
          </View>

          <OTPInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          />

          <Button
            text={"Continue"}
            disabled={!pinReady}
            style={{
              backgroundColor: !pinReady ? "#66B4F4" : "#2196F3",
              marginTop: 60,
            }}
            onPress={() => setModalVisible(true)}
          />

          <View>
            <View className="flex-row justify-center">
              <Text className="text-lg font-bold">Didn’t receive code? </Text>
              <Text className="text-lg font-bold text-[#2196F3]">
                Resend code
              </Text>
            </View>
          </View>

          {/* Modal */}
          <ModalConfirm
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default VerifyOPTScreen;
