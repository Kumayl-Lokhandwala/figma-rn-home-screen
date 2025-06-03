import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native'

const Scanner = () => {
  return (
    <View style={{marginVertical:20}}>
    <TouchableOpacity>
     <LottieView source = {require('../../../assets/animation/scanQr.json')} style = {styles.scanner} autoPlay loop  />
     </TouchableOpacity>
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