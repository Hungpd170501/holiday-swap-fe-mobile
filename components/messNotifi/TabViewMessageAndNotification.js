import {AntDesign, FontAwesome5} from "@expo/vector-icons";
import React, {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import CarouselApartmentHome from "../apartment/CaroselApartmentHome";
import SearchBar from "../search/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {NotificationApis} from "../../apis/NotificationApis";
import {fetchNotifications} from "../../redux/slices/pushNotificationSlice";
import {formatRelative} from "date-fns";
import {fetchConversations, setConversationLoaded} from "../../redux/slices/conversationSlice";
import ConversationApis from "../../apis/ConversationApis";
import {UserApis} from "../../apis/UserApis";

const getAvatarSource = (item, currentUser) => {
    const defaultAvatar = `https://ui-avatars.com/api/?name=${item.conversationName}`;
    if (item?.participants?.length > 2) {
        return defaultAvatar;
    }
    const participant = item?.participants.find(user => user.user.userId !== currentUser?.userId)?.user;
    return participant?.avatar || `https://ui-avatars.com/api/?name=${participant?.username || item.conversationName}`;
};

export default function TabViewMessageAndNotification() {
    const tabs = ["Chat", "Notifications"];
    const [selectedTab, setSelectedTab] = useState("Chat");
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const notifications = useSelector((state) => state.pushNotification.data);
    const conversations = useSelector((state) => state.conversation.data);
    const [currentUser, setCurrentUser] = useState();
    const dispatch = useDispatch();

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            NotificationApis.getAll().then((res) => {
                dispatch(fetchNotifications(res));
                // console.log("Check notification", res);
            });
            dispatch(setConversationLoaded(false));
            ConversationApis.getCurrentUserConversation().then((res) => {
                dispatch(fetchConversations(res));
                dispatch(setConversationLoaded(true));
            });
            UserApis.getCurrentProfile().then((res) => {
                setCurrentUser(res);
                // console.log("Check user", res);
            });
            setLoading(false)
        }, [dispatch])
    );

    const renderTabContent = () => {
        switch (selectedTab) {
            case "Chat":
                return (
                    <View>
                        <SearchBar/>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            className="w-[95%] py-3"
                        >
                            {conversations &&
                                (conversations?.length !== 0 ? (
                                    conversations?.map((item, index) => (
                                        <TouchableOpacity
                                            key={item?.conversationId}
                                            className="flex flex-row items-center w-full py-4 gap-2 px-3"
                                            onPress={() =>
                                                navigation.navigate("ChatItemScreen", {
                                                    avatar: getAvatarSource(item, currentUser),
                                                    conversationId: item?.conversationId,
                                                    conversationName:
                                                        item.participants?.length > 2
                                                            ? item.conversationName
                                                            : item.participants?.find(
                                                                (user) =>
                                                                    user.user.userId !== currentUser?.userId
                                                            )?.user?.username,
                                                    currentUser: currentUser,
                                                    users: item?.participants,
                                                })
                                            }
                                        >
                                            <Image
                                                className="mr-[8px] rounded-full w-[60] h-[60] mb-[20px]"
                                                source={{uri: getAvatarSource(item, currentUser)}}
                                            />
                                            <View className="w-full pr-3 flex flex-col">
                                                <Text
                                                    className="text-[15px] font-bold text-ellipsis overflow-hidden text-gray-900 dark:text-white">
                                                    {item.participants?.length > 2
                                                        ? item.conversationName
                                                        : item.participants?.find(
                                                            (user) => user.user.userId !== currentUser?.userId
                                                        )?.user?.username}
                                                </Text>
                                                <Text
                                                    className="text-ellipsis overflow-hidden text-sm text-gray-400 dark:text-zinc-400">
                                                    {item?.message?.authorId &&
                                                    item?.participants?.length > 0 ? (
                                                        item?.message?.authorId === currentUser?.userId ? (
                                                            "You: "
                                                        ) : (
                                                            (item?.participants?.find(
                                                                (user) => user?.user?.userId === item?.message?.authorId
                                                            )?.user?.username ?? "") + ": "
                                                        )
                                                    ) : (
                                                        ""
                                                    )}
                                                    {item?.message?.text ?? "Started a Conversation"}{" "}
                                                </Text>
                                                {item?.message?.createdOn && (
                                                    <Text className="text-xs text-blue-600 dark:text-blue-500">
                                                        {formatRelative(
                                                            new Date(item?.message?.createdOn),
                                                            new Date()
                                                        )}
                                                    </Text>
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                ) : (
                                    <View className="px-4">
                                        <Text className="text-[20px] py-3 font-bold">
                                            No conversation yet... Still none.
                                        </Text>
                                        <Text className="w-[80%] text-[15px] py-3">
                                            "It's time to start a new conversation and connect with someone."
                                        </Text>
                                    </View>
                                ))}
                        </ScrollView>
                    </View>
                );
            case "Notifications":
                return (
                    <View style={styles.shadow} className="flex-1 ">
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {notifications && (notifications?.length !== 0 ? (
                                notifications?.map((item, index) => (
                                    <TouchableOpacity
                                        key={`notification-${index}`}
                                        className="flex flex-row items-center w-full py-4 gap-2 px-3"
                                    >
                                        <AntDesign
                                            name="notification"
                                            size={32}
                                            color={`${item?.isRead ? 'gray' : '#ff3030'}`}
                                        />
                                        <View className="w-full pr-3 flex flex-col gap-2">
                                            <Text
                                                className="text-[15px] font-bold text-ellipsis overflow-hidden text-gray-900 dark:text-white"
                                            >
                                                {item?.subject}
                                            </Text>
                                            <Text
                                                className="text-ellipsis overflow-hidden text-sm text-gray-400 dark:text-zinc-400"
                                            >
                                                {item?.content}
                                            </Text>
                                            <View className="flex flex-row items-center pr-3">
                                                <Text
                                                    className="text-xs text-blue-600 dark:text-blue-500"
                                                >
                                                    {formatRelative(
                                                        new Date(item?.createdOn),
                                                        new Date()
                                                    )}
                                                </Text>
                                                {!item?.isRead && (
                                                    <View
                                                        style={{
                                                            backgroundColor: 'green',
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: 4,
                                                            marginLeft: 12,
                                                            marginRight: 3,
                                                            marginTop: 3,
                                                            marginBottom: 3,
                                                        }}
                                                    />
                                                )}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <View className="px-4">
                                    <Text className="text-[20px] py-3 font-bold">
                                        No notification.
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                );

            default:
                return null;
        }
    };

    return (
        <View className="flex-1 px-4 bg-white">
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="flex flex-row gap-6">
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                className="pb-1"
                                key={tab}
                                onPress={() => setSelectedTab(tab)}
                                style={[
                                    styles.tabButton,
                                    {
                                        borderBottomWidth: selectedTab === tab ? 2 : 0,
                                        borderBottomColor:
                                            selectedTab === tab ? "#009FC2" : "transparent",
                                    },
                                ]}
                            >
                                <Text
                                    className="text-[15px] font-bold mt-3"
                                    style={selectedTab === tab ? {color: "#007FC4"} : {}}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            {!loading && renderTabContent()}
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
