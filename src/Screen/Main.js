import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.body}>
      <View style={styles.nav}>
          <Pressable style={styles.humberger}>

          </Pressable>
          <Image style={styles.logo} />
          <Pressable style={styles.profilePic} />
      </View>
      <View style={styles.welcome} >
        <Text style={styles.textH1} >Hello , Hamza</Text>
        <Text style={styles.textH2} >Welcome back to your course</Text>
      </View>
      <View style={styles.search} >
          <TextInput  placeholder='Search by course, instructor....'/>
      </View>
      <View style={styles.filter} >
        <Text style={{...styles.textH1,...styles.textBold}} >
            Category
        </Text>
        <Pressable>
           <Text> View all</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  body : {
    backgroundColor : '#17172D',

  },
  nav  : {},
  humberger : {},
  profilePic : {},


})