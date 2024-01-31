import { Pressable, Text, View , Image } from 'react-native'
import React from 'react'
import Logo from'./../images/svg/Logo'
import Flame from './../images/svg/Flame'

const configIcon = require('./../images/svg/configIcon.png')


const Header = ({styles , screen}) => {
  if (screen !== 'Profile') return (
    <View style={styles.header} >
    <Pressable>
        <Text  style={styles.course}>CCNA 1</Text>
      </Pressable>  
    <Logo  style={{margin : 10}} />
    <View style={styles.strike} >
        <Flame style={styles.strike_svg}/>
        <Text style={styles.strike_num}>0</Text>
    </View>
</View>
  )
  else return (
    <View style={styles.header} >
    <Pressable>
        <Text  style={styles.course}>CCNA 1</Text>
      </Pressable>  
    <Logo  style={{margin : 10}} />
    <View style={styles.strike} >
        <Image source={configIcon}  />
    </View>
</View>
  )
}

export default Header

