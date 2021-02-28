import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils";

const ReloadIcon = ({ load }) => {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
};

export default ReloadIcon;

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 60,
      },
      android: {
        top: 40,
      },
    }),
    right: 20,
  },
});
