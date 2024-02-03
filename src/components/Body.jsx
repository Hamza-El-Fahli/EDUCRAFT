import { Animated, useState, Pressable , Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/styles'


const  Body =  ({ pageNumber , setPageNumber , setShowQuiz}) => {
  return (
    
    <View style={styles.body} >
    <View style={styles.welcom} >
      <Text style={styles.welcom1}>Hello, Hamza</Text>
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


const data = [
  { id:0,
    title : 'Section 1 : Modèle OSI',
    progression : 100
},
{ id:1,
  title : 'Section 2 : Modèle    TCP/IP',
  progression : '30'
},
{ id:2,
title : 'Section 3 : LAN Switching Technologies',
progression : 80
},
{ id:3,
title : 'Section 4 : Routing Technologies',
progression : 0
},
{ id:4,
title : 'Section 5 : WAN Technologies',
progression : 20
},
{ id:5,
title : 'Section 6 : Infrastructure Services',
progression : 100
},
{ id:6,
title : 'Section 7 : Infrastructure Security',
progression : 50
},

]



export default Body

