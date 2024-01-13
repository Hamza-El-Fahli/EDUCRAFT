import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import proPic from '../../images/1b.png'

const Home = () => {
  const [completed, setCompleted] = useState(true)
  const [pageTitle, setPageTitle] = useState('Home')
  return (
    <View style={styles.container}>
      <View style={styles.header} >
                <Button style={styles.course} title='CCNA 1' />
                <Image style={styles.logo} />
                <Image style={styles.strike} />
      </View>
      <View style={styles.body} >
                <View style={styles.welcom} >
                  <Text style={styles.welcom1}>Hello, Hamza</Text>
                  <Text style={styles.welcom2}>Welcome back to your course</Text>
                </View>
                <View style={styles.slide} >
                  <View style={styles.slide_item} >
                    <Text style={styles.slide_item_title} ></Text>
                    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
                    <View style={styles.slide_item_progression}>
                          {completed ? <Text>✔Completed!</Text> : <View></View>}
                    </View>
                    <Button title='REVIEW' />
                  </View>
                </View>
                <View style={styles.nav_btns}>

                </View>
      </View>
      <View style={styles.footer} >
        <Text style={styles.footer_title} >{pageTitle}</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})