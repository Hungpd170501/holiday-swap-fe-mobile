// import React, { useState } from "react";
// import { TouchableOpacity } from "react-native";
// import { StyleSheet } from "react-native";
// import { Text } from "react-native";
// import { View } from "react-native-animatable";
// import { BottomSheet } from "react-native-btr";
// import InputDateComponents from "../dateInput/InputDateComponents";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { TextInput } from "react-native";
// import { Octicons } from "@expo/vector-icons";

// export default function FilterSelect() {
//   const [visible, setVisible] = useState(false);

//   const toggleBottomNavigationView = () => {
//     setVisible(!visible);
//   };
//   return (
//     <View className="">
//       <TouchableOpacity onPress={toggleBottomNavigationView}>
//         <View className="border mr-2 border-blue-300 rounded-full px-3 py-1">
//           <Octicons size={25} color="#7BB0EE" name="multi-select" />
//         </View>
//       </TouchableOpacity>
//       <BottomSheet
//         visible={visible}
//         onBackButtonPress={toggleBottomNavigationView}
//         onBackdropPress={toggleBottomNavigationView}
//       >
//         <View style={styles.bottomNavigationView}>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//           >
//             <View className="flex-1 flex-col justify-end">
//               <View className="flex flex-row justify-around mb-4">
//                 <TouchableOpacity
//                   className="bg-blue-500 px-10 py-3 rounded-md"
//                 >
//                   <Text className="text-white">Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity className="bg-blue-500 px-10 py-3 rounded-md">
//                   <Text className="text-white">Apply</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},
//   bottomNavigationView: {
//     backgroundColor: "#fff",
//     width: "100%",
//     height: 700,
//   },
// });
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import InputDateComponents from "../dateInput/InputDateComponents";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";
import InputDate from "../Home/InputDate";

export default function FilterSelect() {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    setVisible(false); // Tắt BottomSheet khi bấm Cancel
  };

  const handleApply = () => {
    // Thực hiện xử lý khi bấm Apply ở đây
    // Sau khi hoàn thành xử lý, bạn có thể tắt BottomSheet tương tự như handleCancel:
    setVisible(false);
  };

  return (
    <View className="">
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View className="border mr-2 border-blue-300 rounded-full px-3 py-1">
          <Octicons size={25} color="#7BB0EE" name="multi-select" />
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View className="flex-1 flex-col">
            <View>
              <InputDate />
            </View>
            <View className="flex-1 flex-col justify-end">
              <View className="flex flex-row justify-around mb-4">
                <TouchableOpacity
                  className="bg-blue-500 px-10 py-3 rounded-md"
                  onPress={handleCancel} // Gọi handleCancel khi bấm Cancel
                >
                  <Text className="text-white">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-blue-500 px-10 py-3 rounded-md"
                  onPress={handleApply} // Gọi handleApply khi bấm Apply
                >
                  <Text className="text-white">Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 700,
  },
});
