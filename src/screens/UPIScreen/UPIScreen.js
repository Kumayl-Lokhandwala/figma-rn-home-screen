import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppText from "../../components/MyAppText";
import Header from "../../components/UPIScreen/Header";
import { LinearGradient } from "expo-linear-gradient";
import UPIId from "../../components/UPIScreen/UPIId";
import Utility from "../../components/UPIScreen/Utility";
import Scanner from "../../components/UPIScreen/Scanner";
import People from "../../components/UPIScreen/People";
import Business from "../../components/UPIScreen/Business";
import Footer from "../../components/UPIScreen/Footer";
import Transactions from "../../components/UPIScreen/Transactions";

const UPIScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={["#02111A", "#0C5380"]}
          style={styles.headerContainer}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <Header />
          <UPIId />
          <Scanner />
          <Utility />
        </LinearGradient>
        <People />
        <Business/>
        <Transactions/>
        <Footer/>
      </ScrollView>

    </SafeAreaView>
  );
};

export default UPIScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#02111a",
  },

  headerContainer: {
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
