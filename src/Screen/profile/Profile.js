import {   View  } from 'react-native'
import React from 'react'
import Header from '../../component/Header'
import styles from '../../Styles/styles'
import Chart from '../../component/Chart'
import Statistics from '../../component/Statistics'

const Profile = () => {
  return (
    <View style={styles.container}>
        <Header styles={styles} screen='Profile' />
        <Chart  styles={styles}/>
        <View style={styles.hr} />
        <Statistics styles={styles} />
    </View>
  )
}

export default Profile

