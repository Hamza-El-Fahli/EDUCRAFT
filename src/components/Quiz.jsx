import { Image, Pressable,SafeAreaView , ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import Colors from '../styles/colors'


const upArrowIcon = require('./../images/svg/arrow.png')
const bookIcon = require('./../images/svg/book.png')
const validIcoin = require('./../images/svg/valid.png')
const invalidIcoin = require('./../images/svg/invalid.png')


const Quiz = ({setShowQuiz}) => {
    return (
<View style={styles.container}>
        <View>
            <View style={styles.section_item} >
                <Text style={styles.section_item_title} >{data[0].title}</Text>
                <Pressable onPress={()=>{setShowQuiz(false)}} style={styles.section_item_btn}>
                    <Image source={upArrowIcon} />
                </Pressable>
            </View>
        </View>
    <View style={styles.unite}>
        <Text style={styles.unite_title} >Unite 1 :</Text>
        <Text style={styles.unite_details} >
            Understand what is OSI module , and why we use it
            </Text>
        <Pressable  style={styles.unite_icon} ><Image source={bookIcon} /></Pressable>
    </View>


        <SafeAreaView style={{
    height : '50%'
  }} >

    <ScrollView>
        {quizUnits.map((unit)=>{
            return (    <QuizUnit data={unit} length={quizUnits.length}/>
            )
        })}
    </ScrollView>
        </SafeAreaView >
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


const QuizUnit = ({data,length})=>{
    return (
        <View key={data.id} style={{paddingLeft : '20%',margin : '1%'}}>
            
        <View style={{flexDirection : 'row',alignItems : 'center'}}>
            <Image style={{marginRight : '5%' }} source={data.completed === data.task ? validIcoin : invalidIcoin} />
            <Text style={{fontSize : 32 , color : Colors.Dark.gray ,fontWeight : 'bold'}}>{data.id}.....{data.title}: {data.completed}/{data.task}</Text>
        </View>
        <View style={{borderColor :  data.id < length-1 ?data.completed === data.task ? Colors.Dark.gray : Colors.Dark.lightGray : 'transparent' , borderWidth : 2,width : 0,height : 60,marginLeft : '8%' ,marginTop : '3%' }} />
        </View>
    )
}


const quizUnits = [
    {id : 0 , title : 'Quiz 1' , task : 5 , completed : 5},
    {id : 1 , title : 'Quiz 2' , task : 5 , completed : 2},
    {id : 2 , title : 'Quiz 3' , task : 5 , completed : 0},
    {id : 3 , title : 'Quiz 4' , task : 5 , completed : 0},
    {id : 4 , title : 'Quiz 5' , task : 5 , completed : 0},
]






export default Quiz
