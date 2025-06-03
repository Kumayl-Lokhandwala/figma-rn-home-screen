import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import UserIcon from "../../../assets/svg/UserIcon";
import Scanner from "../../../assets/svg/Scanner";
import CopyIcon from "../../../assets/svg/CopyIcon";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { ToastAndroid, Platform, Alert } from "react-native";
import MyAppText from "../MyAppText";

const UPIId = () => {
  const handleCopy = async () => {
    await Clipboard.setStringAsync("9830274467@zypeupi");

    if (Platform.OS === "android") {
      ToastAndroid.show("Copied to clipboard!", ToastAndroid.SHORT);
    } else {
      Alert.alert("Copied to clipboard!");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.iconWrapper}>
          <View style={styles.userIconWrapper}>
            <UserIcon style={styles.userIcon} text="PB" />
          </View>
          <TouchableOpacity>
            <View style={styles.scannerWrapper}>
              <Scanner style={styles.scanner} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Right side with texts stacked vertically */}
        <View style={styles.rightWrapper}>
          <MyAppText style={styles.text}>Hello Prajakta</MyAppText>
          <View style={styles.textWrapper}>
            <MyAppText
              style={[styles.text, { fontWeight: "normal", fontSize: 12 }]}
            >
              UPI ID:{" "}
              <Text style={[styles.text, { fontSize: 12 }]}>
                9830274467@zypeupi
              </Text>
            </MyAppText>
            <TouchableOpacity onPress={handleCopy}>
              <CopyIcon style={{ width: 24, height: 24, marginLeft: 5 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UPIId;

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
  },
  mainWrapper: {
    flexDirection: "row",
    alignItems: "center", // vertical centering in row
    justifyContent: "center", // horizontal centering of content inside container
    width: "100%",
  },
  userIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // clip if needed
  },
  userIcon: {
    width: 56, // slightly smaller than wrapper so border is visible
    height: 56,
  },

  iconWrapper: {
    position: "relative",
    width: 64,
    height: 64,
    justifyContent: "center",
  },

  scannerWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#D9D9D9",
    height: 21,
    width: 21,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  scanner: {
    width: 12,
    height: 12,
  },
  rightWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    flex: 1, // helps take remaining space properly
  },

  textWrapper: {
    backgroundColor: "#1C466A",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 5,
    minWidth: 220,
    // REMOVE fixed height to let content size naturally
    // height: 28 ❌ (remove this)
    minHeight: 28, // ✅ ensures enough space
  },

  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
