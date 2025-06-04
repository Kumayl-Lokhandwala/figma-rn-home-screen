import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import MyAppText from '../MyAppText';

const BottomSheetHomeComponent = ({ sheetRef }) => {
  // State for text input
  const [inputText, setInputText] = useState('');

  // Handler for Close button
  const handleClose = () => {
    sheetRef.current?.dismiss();
  };

  // Handler for text input changes
  const handleTextChange = (text) => {
    setInputText(text);
    console.log('Input text:', text); // Replace with your logic
  };

  return (
    <View style={styles.container}>
      <MyAppText style={styles.header}>Home Screen Modal</MyAppText>
      <BottomSheetTextInput
        style={styles.textInput}
        placeholder="Enter text here"
        placeholderTextColor="#888888"
        value={inputText}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity onPress={handleClose}>
        <View style={styles.button}>
          <MyAppText style={styles.buttonText}>Close</MyAppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetHomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02111A',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  textInput: {
    width: '80%',
    backgroundColor: '#333333',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    width: 100,
    backgroundColor: '#0099FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});