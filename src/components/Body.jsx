import { Pressable , Text, View } from 'react-native'
import React from 'react'

const Body =  ({styles, pageNumber , setPageNumber, progression}) => {
  return (
    
    <View style={styles.body} >
    <View style={styles.welcom} >
      <Text style={styles.welcom1}>Hello, Hamza</Text>
      <Text style={styles.welcom2}>Welcome back to your course</Text>
    </View>
    <View style={styles.slide} >
      {pageNumber == 0 && <View style={styles.slide_item} >
        <Text style={styles.slide_item_title} >Section 1 : Modèle OSI</Text>
        <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
        <View >
             <Text style={styles.slide_item_progression}>✔Completed!</Text>
        </View>
          <Pressable style={styles.slide_item_btn_grp}>
            <Text style={styles.slide_item_btn}>REVIEW</Text>
          </Pressable>
      </View>}
      {pageNumber != 0 &&<View style={styles.slide_item} >
        <Text style={styles.slide_item_title} >Section 2 : Modèle     TCP/IP</Text>
        <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
        <View 
          style={styles.progression_bar_bg} 
          key='progression_bar'
          >
          <View 
            style={{...styles.progression_bar,width : progression+'%'}}
            />
          </View>
          <Pressable style={styles.slide_item_btn_grp}>
            <Text style={styles.slide_item_btn}>REVIEW</Text>
          </Pressable>
      </View>}
    </View>
    <View style={styles.nav_btns}>
          {([0,1,2,3,4,5,6]).map((item)=>{
            if(item == pageNumber) return (<Text style={{...styles.nav_btn,...styles.nav_btn_selected}} onPress={()=>{setPageNumber(item)}} key={item}>.</Text>)
            return (<Text style={styles.nav_btn} onPress={()=>{setPageNumber(item)}} key={item}>.</Text>)
          })}
    </View>
</View>
  )
}

export default Body

