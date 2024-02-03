import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from './../images/svg/Logo'
import Flame from './../images/svg/Flame'
import styles from '../styles/styles'
import Colors from '../styles/colors'
const configIcon = require('./../images/svg/configIcon.png')


const Header = ({ screen }) => {
  return (
    <View style={styles.header} >
      <Pressable>
        <Text style={styles.course}>CCNA 1</Text>
      </Pressable>
      
      <View
        style={styles.dropDown}>
          
        <Pressable>
          <Text style={styles.dropDown_item}>CCNA 1</Text>
        </Pressable>

        <Pressable>
          <Text style={{
            ...styles.course,
            height: '70%',
            width: 110,
            borderWidth: 2,
            fontSize: 20
          }}>CCNA 1</Text>
        </Pressable>

        <Pressable>
          <Text style={{
            ...styles.course,
            height: '70%',
            width: 110,
            borderWidth: 2,
            fontSize: 20
          }}>CCNA 1</Text>
        </Pressable>

      </View>

      <Logo style={{ margin: 10 }} />
      {(screen !== 'Profile') ?
        <View style={styles.strike} >
          <Flame style={styles.strike_svg} />
          <Text style={styles.strike_num}>0</Text>
        </View> :
        <View style={styles.strike} >
          <Image style={{ height: 30, width: 30 }} source={configIcon} />
        </View>
      }
    </View>
  )
}

export default Header

