import { StyleSheet, View } from "react-native";
import React from "react";
import utilityData from "../../../data/utilityData";
import MyAppText from "../MyAppText";
import { TouchableOpacity } from "react-native";
import Icon from "../Icon"; // Assuming it's in the same folder as MyAppText

const Utility = () => {
  return (
    <View style={styles.container}>
      {utilityData.map((item, index) => (
        <View key={index} style={styles.item}>
          <TouchableOpacity>
            <Icon type="utility" icon={item.icon} />
          </TouchableOpacity>
          <MyAppText style={styles.label}>{item.name}</MyAppText>
        </View>
      ))}
    </View>
  );
};

export default Utility;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  item: {
    alignItems: "center",
    marginVertical: 12,
    width: 56,
  },
  label: {
    textAlign: "center",
    fontSize: 10,
    color: "white",
  },
});
