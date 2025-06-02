import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ZypeLogo from "../../../assets/svg/ZypeLogo";
import NotificationIcon from "../../../assets/svg/NotificationIcon";
import SettingsIcon from "../../../assets/svg/SettingsIcon";
import { TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <ZypeLogo />
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <SettingsIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    widrh: 60,
    flexDirection: "row",
    gap: 20,
  },
});
