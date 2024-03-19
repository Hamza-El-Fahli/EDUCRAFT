import {   View  } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import styles from '../../styles/styles'
import Chart from '../../components/Chart'
import Statistics from '../../components/Statistics'
import Footer from '../../components/Footer'
const Profile = ({navigation }) => {

  return (
    <View style={styles.container}>

        <Header styles={styles} screen='Profile' navigation={navigation} />
        {/* ▼ Show User data ▼  */}
        <Chart  styles={styles}/>
        {/* ▲ Show User data ▲  */}
                {/* ▼ Show A horizontal line ▼  */}

        <View style={styles.hr} />
                {/* ▲ Show A horizontal line ▲  */}
                {/* ▼ Show user statistics , xp and trophies ▼  */}
                <Statistics styles={styles} />
                {/* ▲ Show user statistics , xp and trophies ▲  */}
                <Footer navigation={navigation} styles={styles} currentPage='Profile' />
    </View>
  )
}

export default Profile

