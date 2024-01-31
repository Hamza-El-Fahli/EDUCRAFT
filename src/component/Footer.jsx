import {   View , Image } from 'react-native'
import React from 'react'

const Icons = [
                [require('../images/svg/profileIcon.png'),'profile'],
                [require('../images/svg/homeIcon.png'),'home'],
]





const Footer = ({styles , currentPage }) => {

  return (
    <View style={styles.footer} >
      
        {
          Icons.map((icon,index)=>{
            
            if(icon[1] !== currentPage)
            return (
            <View key={index} style={styles.footer_icon} >
               <Image style={{width : 35 , height : 35}} source={icon[0]} /> 
            </View>)
            else
            return (
            <View key={index} style={styles.footer_selected_icon} >
               <Image style={{width : 35 , height : 35}} source={icon[0]} /> 
            </View>)

        })
        }
    </View>
  )
}

export default Footer

