import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MyAppText from '../MyAppText';

const BottomSheetComponent = ({ sheetRef }) => {
  // Handler for Cancel button
  const handleCancel = () => {
    sheetRef.current?.dismiss();
  };

  // Handler for Block button (customize as needed)
  const handleBlock = () => {
    console.log('Block button pressed');
    // Add block logic here
    sheetRef.current?.dismiss(); // Optionally dismiss after block
  };

  return (
    <View style={styles.container}>
      <MyAppText style={styles.header}>Block Pratik Khadpe</MyAppText>
      <MyAppText style={styles.text}>
        Pratik Khadpe won't be able to receive or pay money on Zype UPI
      </MyAppText>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCancel}>
          <View style={styles.button1}>
            <MyAppText style={styles.buttonText}>Cancel</MyAppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBlock}>
          <View style={styles.button2}>
            <MyAppText style={styles.buttonText}>Block</MyAppText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetComponent;

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
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
    
  },
  button1: {
    width: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#0099FF',
    borderWidth: 1,
    backgroundColor: 'transparent', // Transparent for border-only button
  },
  button2: {
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