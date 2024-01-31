import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const editProfile = require('./../images/svg/editProfile.png')


const Chart = ({styles}) => {
  return (
    <View style={styles.Chart}>
      <View style={styles.ChartLeft}>
        <Text style={styles.ChartLeft_title}>Hamza El Fahli</Text>
        <View style={styles.ChartLeft_data}>
        <Text style={styles.ChartLeft_data_year}>2eme Annee</Text>
        <Text style={styles.ChartLeft_data_specialite}>TSSRI</Text>
        </View>
        </View>
      <View style={styles.ChartRight}>
        <Text style={styles.ChartRight_logo}>H</Text>
        <Image style={styles.ChartRight_logo_edit} source={editProfile} />
        </View>
    </View>
  )
}

export default Chart

