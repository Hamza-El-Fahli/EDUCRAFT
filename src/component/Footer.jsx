import {   View , Image , Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Icons = [
                [require('../images/svg/profileIcon.png'),'Profile'],
                [require('../images/svg/homeIcon.png'),'Home'],
]





const Footer = ({styles , currentPage }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.footer} >

        {
          Icons.map((icon,index)=>{
            
            if(icon[1] !== currentPage)
            return (
              <Pressable  key={index}
              onPress={()=> navigation.navigate(icon[1])} >
            <View style={styles.footer_icon} >
               <Image style={{width : 35 , height : 35}} source={icon[0]} /> 
            </View>
            </Pressable>
            )
            else
            return (
              <Pressable  key={index}
              onPress={()=> navigation.navigate(icon[1])} >
            <View key={index} style={styles.footer_selected_icon} >
               <Image style={{width : 35 , height : 35}} source={icon[0]} /> 
            </View>
            </Pressable>
            )

        })
        }
    </View>
  )
}

export default Footer

