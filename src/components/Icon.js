import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyAppText from './MyAppText';

const Icon = ({name}) => {
  return (
    <View style={styles.iconContainer}>
      <MyAppText style={styles.text}>{name}</MyAppText>
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    iconContainer:{
        height:56,
        width:56,
        borderRadius:"50%",
        backgroundColor:"#1C466A",
        justifyContent:"center",
        alignItems:"center",

    },
    text:{
        fontSize:32,
        color:"#0099FF",
        marginTop:4
    }
})