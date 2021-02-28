import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
      >
        <Picker.Item label="Cº" value="metric" />
        <Picker.Item label="Fº" value="imperial" />
      </Picker>
    </View>
  );
};

export default UnitsPicker;

const styles = StyleSheet.create({});
