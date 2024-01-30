import {   View , Image } from 'react-native'
import React from 'react'
const Footer = ({styles , icon}) => {

  return (
    <View style={styles.footer} >
        <View style={styles.footer_icon} >
        <Image style={{width : 35 , height : 35}} source={icon} />
        </View>
    </View>
  )
}

export default Footer

