import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    width: 200,
    height: 200,
  },
});

export default function Loading() {
  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <ActivityIndicator color="black" size="large" style={styles.loading} />
    </View>
  );
}
