import { Animated, useState, Pressable , Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

const  Body =  ({ pageNumber , setPageNumber , setShowQuiz,UserName, CCNA, Data}) => {
  const data = Data[CCNA]

  return (
    
    <View style={styles.body} >
    <View style={styles.welcom} >
      <Text style={styles.welcom1}>Hello, {UserName}</Text>
      <Text style={styles.welcom2}>Welcome back to your course</Text>
    </View>





    <Slides pageNumber={pageNumber} setShowQuiz={setShowQuiz}  data={data}  />




    <View style={styles.nav_btns}>
          {data.map((item)=>{
            if(item.id == pageNumber) return (<Pressable style={{padding : 10}}  onPress={()=>{setPageNumber(item.id)}} key={item.id}><Text style={{...styles.nav_btn,...styles.nav_btn_selected}}>.</Text></Pressable>)
            return (<Pressable style={{padding : 10}}  onPress={()=>{setPageNumber(item.id)}} key={item.id}><Text style={styles.nav_btn}>.</Text></Pressable>)
          })}
    </View>
</View>
  )
}

const Slides = ({ pageNumber  , data,setShowQuiz })=>{
  const fading = new Animated.Value(0)
  Animated.timing(fading,
    {
      toValue:1,
      useNativeDriver: true,
      duration: 200,
    }).start()


return (
  
  <Animated.View style={{...styles.slide,
      opacity:fading,
    }} >
   <View style={{...styles.slide_item,
  }} >
    <Text style={styles.slide_item_title} >{data[pageNumber].title}</Text>
    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
    
    
    { 
    data[pageNumber].progression === 100 &&
     <View >
         <Text style={styles.slide_item_progression}>✔Completed!</Text>
    </View>
    }

      {
        data[pageNumber].progression < 100 &&
        <View 
        style={styles.progression_bar_bg} 
        key='progression_bar'
        >
        <View 
          style={{...styles.progression_bar,width : data[pageNumber].progression+'%'}}
          />
        </View>
      }

      <Pressable onPress={()=>{setShowQuiz(true)}} style={styles.slide_item_btn_grp}>
        <Text style={styles.slide_item_btn}>{data[pageNumber].progression < 100 ? 'CONTINUE' : 'REVIEW'}</Text>
      </Pressable>
      
  </View>
  
</Animated.View>

)
}





export default Body

