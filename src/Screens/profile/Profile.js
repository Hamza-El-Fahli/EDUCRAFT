import {   View  } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import styles from '../../styles/styles'
import Chart from '../../components/Chart'
import Statistics from '../../components/Statistics'
import Footer from '../../components/Footer'

const Profile = ({setScreen}) => {
  return (
    <View style={styles.container}>
        <Header styles={styles} screen='Profile' setScreen={setScreen} />
        <Chart  styles={styles}/>
        <View style={styles.hr} />
        <Statistics styles={styles} />
        <Footer setScreen={setScreen} styles={styles} currentPage='Profile' />
    </View>
  )
}

export default Profile

