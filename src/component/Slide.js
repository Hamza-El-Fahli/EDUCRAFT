import { StyleSheet, Text, View } from 'react-native'
import { useState }, react from 'react'


const Slide = () => {
    const [pageNumber, setPageNumber] = useState(3)
    return (
    <View>
    <View style={styles.slide} >
                  {pageNumber == 0 && <View style={styles.slide_item} >
                    <Text style={styles.slide_item_title} >Section 1 : Modèle OSI</Text>
                    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
                    <View >
                          {completed ? <Text style={styles.slide_item_progression}>✔Completed!</Text> : <View style={styles.slide_item_progression} ></View>}
                    </View>
                      <Pressable>
                        <Text style={styles.slide_item_btn}>REVIEW</Text>
                      </Pressable>
                  </View>}
                  {pageNumber == 1 &&<View style={styles.slide_item} >
                    <Text style={styles.slide_item_title} >Section 2 : Modèle mOSI</Text>
                    <Pressable ><Text style={styles.slide_item_details}>VOIR DETAILS</Text></Pressable>
                    <View >
                          {completed ? <Text style={styles.slide_item_progression}>✔Completed!</Text> : <View style={styles.slide_item_progression} ></View>}
                    </View>
                      <Pressable>
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

export default Slide

const styles = StyleSheet.create({})