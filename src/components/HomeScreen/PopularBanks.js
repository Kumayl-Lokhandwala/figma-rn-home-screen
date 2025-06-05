import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MyAppText from "../MyAppText";
import popularBanksData from "../../../data/popularBanksData";
import { BottomSheetView } from "@gorhom/bottom-sheet";

const PopularBanks = ({ searchQuery }) => {
  const filteredData = popularBanksData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredData.length === 0) {
    return null; // or show a "No results" message
  }

  return (
    <BottomSheetView style={styles.container}>
      <MyAppText style={styles.headerText}>Popular Banks</MyAppText>
      <View style={styles.gridContainer}>
        {filteredData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.itemWrapper,
              // Remove right margin on every 4th item
              (index + 1) % 4 === 0 && { marginRight: 0 },
            ]}
          >
            <TouchableOpacity style={styles.item}>
              {item.icon}
            </TouchableOpacity>
            <MyAppText style={styles.label}>{item.title}</MyAppText>
          </View>
        ))}
      </View>
    </BottomSheetView>
  );
};

export default PopularBanks;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    paddingLeft: 5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  itemWrapper: {
    width: "23%", // Just under 25% to allow margin
    marginRight: "2%", // space between items, removed on last of row
    marginBottom: 16,
    alignItems: "center",
  },
  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  label: {
    marginTop: 6,
    textAlign: "center",
    fontSize: 10,
    color: "white",
  },
});
