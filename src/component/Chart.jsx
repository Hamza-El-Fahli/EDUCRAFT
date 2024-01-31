import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const editProfile = require('./../images/svg/editProfile.png')


const Chart = ({styles}) => {
  return (
    <View style={styles.Chart}>
      <View style={styles.ChartLeft}>
        <Text>Hamza El Fahli</Text>
        </View>
      <View style={styles.ChartRight}>
        <Text style={styles.ChartRight_logo}>G</Text>
        <Image style={styles.ChartRight_logo_edit} source={editProfile} />
        </View>
    </View>
  )
}

export default Chart

