import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Scanner = () => {
  return (
    <View style={{marginVertical:20}}>
     <LottieView source = {require('../../../assets/animation/scanQr.json')} style = {styles.scanner} autoPlay loop  />
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({
    scanner:{
        widht:200,
        height:200,
    }
})