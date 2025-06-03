import { StyleSheet, View } from 'react-native';
import React from 'react';
import MyAppText from './MyAppText';

const Icon = ({ name, type = 'contact', icon = null }) => {
  const isUtility = type === 'utility';

  return (
    <View style={[styles.iconContainer, isUtility ? styles.utilityBg : styles.contactBg]}>
      {isUtility ? (
        icon
      ) : (
        <MyAppText style={styles.text}>
          {name?.charAt(0).toUpperCase()}
        </MyAppText>
      )}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28, // circular shape
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:8
  },
  contactBg: {
    backgroundColor: '#1C466A',
  },
  utilityBg: {
    backgroundColor: '#0B2A3E',
  },
  text: {
    fontSize: 32,
    color: '#0099FF',
    marginTop: 4,
  },
});
