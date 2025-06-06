import React, { useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import MyAppText from '../../components/MyAppText';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

const BankDetailsScreen = ({ route, sheetRef, navigation }) => {
  const { bank } = route.params;

  // Handle back button in BankDetailsScreen
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.navigate('BottomSheetHome'); // Navigate back to BottomSheetHome
      return true; // Prevent default back action
    });

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {bank.icon}
      <MyAppText style={styles.title}>{bank.title}</MyAppText>
      <BottomSheetTextInput
        placeholder="Enter Account Number"
        style={styles.textInput}
        placeholderTextColor="white"
      />
      <BottomSheetTextInput
        placeholder="Enter IFSC Code"
        style={styles.textInput}
        placeholderTextColor="white"
      />
    </View>
  );
};

export default BankDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02111A',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    minHeight: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  textInput: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: '#0099FF',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginTop: 20,
  },
});