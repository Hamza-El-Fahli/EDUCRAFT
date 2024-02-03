import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

const upArrowIcon = require('./../images/svg/arrow.png')
const bookIcon = require('./../images/svg/book.png')
const validIcoin = require('./../images/svg/valid.png')
const invalidIcoin = require('./../images/svg/invalid.png')


const Quiz = () => {
    return (
<View style={styles.container}>
        <View>
            <View style={styles.section_item} >
                <Text style={styles.section_item_title} >{data[0].title}</Text>
                <Pressable style={styles.section_item_btn}>
                    <Image source={upArrowIcon} />
                </Pressable>
            </View>
        </View>
    <View style={styles.unite}>
        <Text style={styles.unite_title} >Unite 1 :</Text>
        <Text style={styles.unite_details} >
            Understand what is OSI module , and why we use it
            </Text>
        <Pressable style={styles.unite_icon} ><Image source={bookIcon} /></Pressable>
    </View>



    <ScrollView>
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    <QuizUnit />
    </ScrollView>
</View>
    )
}


const data = [
    {
        id: 0,
        title: 'Section 1 : Modèle OSI',
    },
    {
        id: 1,
        title: 'Section 2 : Modèle    TCP/IP',
    },
    {
        id: 2,
        title: 'Section 3 : LAN Switching Technologies',
    },
    {
        id: 3,
        title: 'Section 4 : Routing Technologies',
    },
    {
        id: 4,
        title: 'Section 5 : WAN Technologies',
    },
    {
        id: 5,
        title: 'Section 6 : Infrastructure Services',
    },
    {
        id: 6,
        title: 'Section 7 : Infrastructure Security',
    },
]


const QuizUnit = ()=>{
    return (
        <View style={{paddingLeft : '20%',margin : '1%'}}>
            
        <View style={{flexDirection : 'row',alignItems : 'center'}}>
            <Image style={{marginRight : '5%' }} source={validIcoin} />
            <Text style={{fontSize : 32 , color : 'white',fontWeight : 'bold'}}> Quiz 1 : 5/5</Text>
        </View>
        <View style={{borderColor : 'white' , borderWidth : 2,width : 0,height : 60,marginLeft : '8%' ,marginTop : '3%' }} />
        </View>
    )
}









export default Quiz
