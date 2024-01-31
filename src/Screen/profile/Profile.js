import {   View  } from 'react-native'
import React from 'react'
import Header from '../../component/Header'
import styles from '../../Styles/styles'
import Chart from '../../component/Chart'
import Statistics from '../../component/Statistics'
import Footer from '../../component/Footer'

const Profile = () => {
  return (
    <View style={styles.container}>
        <Header styles={styles} screen='Profile' />
        <Chart  styles={styles}/>
        <View style={styles.hr} />
        <Statistics styles={styles} />
        <Footer styles={styles} currentPage='Profile' />
    </View>
  )
}

export default Profile

