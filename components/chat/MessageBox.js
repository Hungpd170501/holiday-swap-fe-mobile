import React, {useEffect, useState} from "react";
import {ActivityIndicator, Image, Modal, Text, TouchableOpacity} from "react-native";
import {View} from "react-native";
import {formatRelative} from "date-fns";

const MessageBox = ({message, users, currentUser}) => {
    const user = users?.find((item) => item?.user?.userId?.toString() === message?.authorId?.toString());
    const isOwn = message?.authorId?.toString() === currentUser?.userId?.toString();
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View>
            {isOwn ? (
                <View className="flex flex-row mb-3 justify-end">
                    <View className="mr-[5%] ">
                        {message.image && (
                            <TouchableOpacity onPress={openModal}>
                            <View className="flex flex-row justify-end">
                                <Image
                                    style={{ width: 200, aspectRatio: 1 }}
                                    source={{ uri: message?.image}}
                                    accessibilityViewIsModal={true}

                                />
                            </View>
                            </TouchableOpacity>
                        )}
                        <View className="flex flex-row justify-end">
                            {message.text && (
                                <Text className="bg-blue-500 w-fit justify-end text-white py-2 rounded-tl-[20] rounded-tr-[20] rounded-bl-[20] px-3">
                                    {message.text}
                                </Text>
                            )}
                        </View>
                        <View className="flex flex-row justify-end">
                            <Text className="text-gray-400 text-[12px]">
                                {formatRelative(new Date(message.createdOn), new Date())}
                            </Text>
                        </View>
                    </View>
                    <Image
                        className="w-[40px] h-[40px] rounded-full"
                        source={{ uri: user?.user?.avatar }}
                    />
                </View>
            ) : (
                <View className="flex flex-row mb-3">
                    <Image
                        className="w-[40px] h-[40px] rounded-full"
                        source={{ uri: user?.user?.avatar}}
                    />
                    <View className="ml-[5%]">
                        {message.image && (
                            <TouchableOpacity onPress={openModal}>
                            <View className="flex flex-row justify-start">
                                <Image
                                    style={{ width: 200, aspectRatio: 1 }}
                                    source={{ uri: message?.image}}
                                    accessibilityViewIsModal={true}

                                />
                            </View>
                            </TouchableOpacity>
                        )}
                        <View className="flex flex-row justify-start">
                            {message.text && (
                                <Text className="bg-gray-200 w-fit text-gray-600 py-2 px-3 rounded-tl-[20] rounded-tr-[20] rounded-br-[20]">
                                    {message.text}
                                </Text>
                            )}
                        </View>
                        <Text className="text-gray-400 text-[12px]">
                            {formatRelative(new Date(message.createdOn), new Date())}
                        </Text>
                    </View>
                </View>
            )}
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={{ uri: message?.image }}
                        style={{ aspectRatio: 1 }}
                        className="w-full"
                    />
                    <TouchableOpacity onPress={closeModal}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default MessageBox;
