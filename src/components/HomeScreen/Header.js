import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ZypeLogo from "../../../assets/svg/icons/ZypeLogo";
import NotificationIcon from "../../../assets/svg/icons/NotificationIcon";
import SettingsIcon from "../../../assets/svg/icons/SettingsIcon";
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
    width: 60,
    flexDirection: "row",
    gap: 20,
  },
});
