import {   View , Image , Pressable } from 'react-native'
import React from 'react'

const Icons = [
                [require('../images/svg/profileIcon.png'),'Profile',4],
                [require('../images/svg/homeIcon.png'),'Home',3],
]





const Footer = ({setScreen, styles , currentPage }) => {

  return (
    <View style={styles.footer} >

        {
          Icons.map((icon,index)=>{
            
            if(icon[1] !== currentPage)
            return (
              <Pressable  key={index} 
              onPress={()=>{setScreen(icon[2])}}
              >
            <View style={styles.footer_selected_icon} >
               <Image style={{width : 35 , height : 35}} source={icon[0]} /> 
            </View>
            </Pressable>
            )
            else
            return (
              <Pressable  key={index}
              onPress={()=>{setScreen(icon[2])}}
              >
            <View key={index} style={styles.footer_icon} >
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

