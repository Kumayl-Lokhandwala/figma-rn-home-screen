import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UPIYesBank from '../../../assets/svg/icons/UPIYesBank'
import MyAppText from '../MyAppText'

const Footer = () => {
  return (
    <View style={styles.container}>
      <MyAppText style= {styles.text}>Powered by </MyAppText>
      {<UPIYesBank/>}
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
            marginTop:10,
    padding:10,
    },
    text:{
        color:"#e1e3e4",
        size:10
    },
    image:{
        height:30,
        width:150
    }
})