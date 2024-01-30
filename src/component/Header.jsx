import { Pressable, Text, View } from 'react-native'
import React from 'react'
import Logo from'../images/svg/Logo'
import Flame from '../images/svg/Flame'

const Header = ({styles}) => {
  return (
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
}

export default Header

