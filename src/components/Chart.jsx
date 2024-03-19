import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const editProfile = require('./../images/svg/editProfile.png')
import { useSelector } from 'react-redux'


const Chart = ({styles}) => {

  const user = useSelector((state)=>state.user.user)
  console.log(user)
// 
  //    LEFT              |                 RIGHT 
  //                      |                  ______
  //                      |                 |     |
  // Hamza el fahli       |                 |  H  | 
  //  2eme annee          |                 |     |
  //  tssri               |                 -------
  //
  return (
    <View style={styles.Chart}>
      <View style={styles.ChartLeft}>
        <Text style={styles.ChartLeft_title}>{capitalize(user.name)}</Text>
        <View style={styles.ChartLeft_data}>
        <Text style={styles.ChartLeft_data_year}>
          {user.annee > 1 ? user.annee+' eme Annee' : user.annee+' ere Annee'}
          </Text>
        <Text style={styles.ChartLeft_data_specialite}>{user.filiere}</Text>
        </View>
        </View>
      <View style={styles.ChartRight}>
        <Text style={styles.ChartRight_logo}>{user.name[0].toUpperCase()}</Text>
        <Image style={styles.ChartRight_logo_edit} source={editProfile} />
        </View>
    </View>
  )
}

export default Chart



const capitalize = (str='')=>{
  str.toLowerCase()
  const res = []
  str.split(' ').map((chr,index)=>{
    res.push(`${chr.charAt(0).toUpperCase()}${chr.slice(1)} `)
  })
  return res.join('').trim()
}