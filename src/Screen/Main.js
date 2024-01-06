import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import proPic from '../images/1b.png'

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
            <FontAwesome name='plus-square' size={24}/>
          </Pressable>
          <Pressable style={styles.profilePic}>
          <Image style={styles.logo} />
          </Pressable>
      </View>
      <View style={styles.welcome} >
        <Text style={styles.textH1} >Hello , Hamza</Text>
        <Text style={styles.textH2} >Welcome back to your course</Text>
      </View>
      <View style={styles.search} >
          <TextInput  placeholder='Search by course, instructor....'
          placeholderTextColor={'gray'}
          style={{padding : 5,paddingLeft : 10,height:'100%',width:'100%'}}
          />
      </View>
      <View style={styles.filter} >
        <Text style={{...styles.textH1,...styles.textBold}} >
            Category
        </Text>
        <Pressable>
           <Text style={{color : "#4680B9"}}> View all</Text>
        </Pressable>
      </View>
      <View style={styles.courses} >
          {Cources.map((elem)=>
                  <View style={{width : 180 ,height : 80 , borderWidth : 2, marginBottom : 10 }} key={Math.random()}>
                  <Text style={{position : 'absolute' , top : 20,  left : 80}}>
                    {elem.name}
                  </Text>
                    <Text style={{position : 'absolute' , top : 40, left : 80}}>
                      {elem.lectures} Lectures
                    </Text>
                    <Text style={{position : 'absolute' , top : 20, left : 20}}>
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
  nav  : {
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : 'gray',
    justifyContent : 'space-between',
    padding : 10 ,
  },
  humberger : { },
  profilePic : {},
  logo : {
    backgroundColor : 'white',
    height : 20,
    width : 20,
  },
  welcome : {
    padding : 10,
    marginTop : 10,
    marginBottom : 10,
  },
  textH1 : {
    color : 'white',
    fontSize: 28,
    fontWeight : 'bold',
  },
  textH2 : {
    color : 'white',
    fontSize: 22,
  },
  search : {
    borderWidth : 3,
    borderColor : 'white',
    borderRadius : 10,
    margin : 10,
    height : 50,
  },
  filter : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    margin : 10,
  },
  courses : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around',
    flexWrap: 'wrap',
  },

})