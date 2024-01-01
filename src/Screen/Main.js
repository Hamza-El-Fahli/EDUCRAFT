import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Main = () => {

  const Cources = [
    {
      name : 'Adobe XD',
      lectures : 94,
      logo : 'Image',
    },
    {
      name : 'Illustrator',
      lectures : 56,
      logo : 'Image',
    },
    {
      name : 'Lightroom',
      lectures : 100,
      logo : 'Image',
    },
    {
      name : 'Photoshop',
      lectures : 89,
      logo : 'Image',
    },
  ];


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
      <View style={styles.courses} >
          {Cources.map((elem)=>
                  <View key={Math.random()}>
                  <Text>
                    {elem.name}
                  </Text>
                    <Text>
                      {elem.lectures} Lectures
                    </Text>
                    <Text>
                      {elem.logo}
                    </Text>
                  </View>)}
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