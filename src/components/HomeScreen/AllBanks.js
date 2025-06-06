import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import allBanksData from '../../../data/allBanksData';
import MyAppText from '../MyAppText';

const AllBanks = ({ searchQuery, navigation }) => {
  const filteredBanks = allBanksData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredBanks.length === 0) {
    return (
      <View style={styles.container}>
        <MyAppText style={styles.headerText}>All Banks</MyAppText>
        <MyAppText style={styles.noResultsText}>No banks found</MyAppText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MyAppText style={styles.headerText}>All Banks</MyAppText>
      <ScrollView style={{ maxHeight: 300 }}>
        {filteredBanks.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('BankDetails', { bank: item })}
          >
            <View style={styles.itemContainer}>
              {item.icon}
              <View style={styles.textWrapper}>
                <MyAppText style={styles.itemText}>{item.title}</MyAppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllBanks;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: '#02111A',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  textWrapper: {
    marginLeft: 20,
  },
  itemText: {
    fontSize: 18,
    color: 'white',
  },
  noResultsText: {
    color: 'white',
    fontStyle: 'italic',
    marginTop: 10,
  },
});
