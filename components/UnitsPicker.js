import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="Cº" value="metric" />
        <Picker.Item label="Fº" value="imperial" />
      </Picker>
    </View>
  );
};

export default UnitsPicker;

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -30,
      },
      android: {
        top: 30,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
