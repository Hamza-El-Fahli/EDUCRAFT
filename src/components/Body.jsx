import { Pressable , Text, View } from 'react-native'
import React from 'react'
import styles from '../styles/styles'


const Body =  ({ pageNumber , setPageNumber, progression}) => {
  const data = [
    { id:0,
      title : 'Section 1 : Modèle OSI',
      progression : '100'
  },
  { id:1,
    title : 'Section 2 : Modèle     TCP/IP',
    progression : '80'
},
{ id:2,
  title : 'Section 3 : LAN Switching Technologies',
  progression : '80'
},
{ id:3,
  title : 'Section 4 : Routing Technologies',
  progression : '80'
},
{ id:4,
  title : 'Section 5 : WAN Technologies',
  progression : '80'
},
{ id:5,
  title : 'Section 6 : Infrastructure Services',
  progression : '80'
},
{ id:6,
  title : 'Section 7 : Infrastructure Security',
  progression : '80'
},
  
  ]
  return (
    
    <View style={styles.body} >
    <View style={styles.welcom} >
      <Text style={styles.welcom1}>Hello, Hamza</Text>
      <Text style={styles.welcom2}>Welcome back to your course</Text>
    </View>





    <Slides pageNumber={pageNumber} progression={progression} data={data} />




    <View style={styles.nav_btns}>
          {data.map((item)=>{
            if(item.id == pageNumber) return (<Pressable  onPress={()=>{setPageNumber(item.id)}} key={item.id}><Text style={{...styles.nav_btn,...styles.nav_btn_selected}}>.</Text></Pressable>)
            return (<Text style={styles.nav_btn} onPress={()=>{setPageNumber(item.id) ; console.log(data[item.id])}} key={item.id}>.</Text>)
          })}
    </View>
</View>
  )
}

const Slides = ({ pageNumber  , data })=>{
return (
  
  <View style={styles.slide} >
  {pageNumber == 0 && <View style={styles.slide_item} >
    <Text style={styles.slide_item_title} >{data[pageNumber].title}</Text>
    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
    <View >
         <Text style={styles.slide_item_progression}>✔Completed!</Text>
    </View>
      <Pressable style={styles.slide_item_btn_grp}>
        <Text style={styles.slide_item_btn}>REVIEW</Text>
      </Pressable>
  </View>}
  {pageNumber != 0 &&<View style={styles.slide_item} >
    <Text style={styles.slide_item_title} >{data[1].title}</Text>
    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
    <View 
      style={styles.progression_bar_bg} 
      key='progression_bar'
      >
      <View 
        style={{...styles.progression_bar,width : data[1].progression+'%'}}
        />
      </View>
      <Pressable style={styles.slide_item_btn_grp}>
        <Text style={styles.slide_item_btn}>REVIEW</Text>
      </Pressable>
  </View>}
</View>

)
}

export default Body

