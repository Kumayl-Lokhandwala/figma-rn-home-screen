import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAppText from "../../components/MyAppText";
import Header from "../../components/HomeScreen/Header";
import { LinearGradient } from "expo-linear-gradient";
import UPIId from "../../components/HomeScreen/UPIId";
import Utility from "../../components/HomeScreen/Utility";
import Scanner from "../../components/HomeScreen/Scanner";
import People from "../../components/HomeScreen/People";
import Business from "../../components/HomeScreen/Business";
import Footer from "../../components/HomeScreen/Footer";
import Transactions from "../../components/HomeScreen/Transactions";

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
