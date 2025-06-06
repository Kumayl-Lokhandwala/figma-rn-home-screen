import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyAppText from '../../components/MyAppText';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

const BankDetailsScreen = ({ route }) => {
  const { bank } = route.params;
  return (
    <View style={styles.container}>
      {bank.icon}
      <MyAppText style={styles.title}>{bank.title}</MyAppText>
      <BottomSheetTextInput
        placeholder='Enter Account Number'
        style={styles.textInput}
        placeholderTextColor={"white"}
      />
      <BottomSheetTextInput
        placeholder='Enter IFSC Code'
        style={styles.textInput}
        placeholderTextColor={"white"}
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
    width: '100%',           // ensures horizontal fill
    minHeight: '100%',       // ensures vertical fill inside modal
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
  },
  textInput: {
    color: '#fff',
    fontFamily: "Poppins-Regular",
    borderWidth: 1,
    borderColor: '#0099FF',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginTop: 20,
  }
});
