import { Button, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../images/svg/Logo'
import Flame from '../../images/svg/Flame'
import styles from '../../Styles/styles'

const Home = () => {

 
  const [completed, setCompleted] = useState(true)
  const [pageTitle, setPageTitle] = useState('Home')
  
  return (
    <View style={styles.container}>
      <View style={styles.header} >
                <Pressable>
                    <Text  style={styles.course}>CCNA 1</Text>
                  </Pressable>  
                <Logo />
                <View style={styles.strike} >
                    <Flame style={styles.strike_svg}/>
                    <Text style={styles.strike_num}>0</Text>
                </View>
      </View>
      <View style={styles.body} >
                <View style={styles.welcom} >
                  <Text style={styles.welcom1}>Hello, Hamza</Text>
                  <Text style={styles.welcom2}>Welcome back to your course</Text>
                </View>
                <View style={styles.slide} >
                  <View style={styles.slide_item} >
                    <Text style={styles.slide_item_title} >Section 1 : Modèle OSI</Text>
                    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
                    <View >
                          {completed ? <Text style={styles.slide_item_progression}>✔Completed!</Text> : <View style={styles.slide_item_progression} ></View>}
                    </View>
                      <Pressable>
                        <Text style={styles.slide_item_btn}>REVIEW</Text>
                      </Pressable>
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
