import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Lesson() {
  const imagees = [0, 1, 2, 3, 4];
  return (
    <View>

      <View style={{position:'absolute' ,
       width:'100%',
       borderWidth:2,
       height:50,
       padding:5,
       flexDirection:'row',
       gap:10,
       backgroundColor:'#ff00ff',
       zIndex:5
       
       }}>

<View style={{
       borderWidth: 1,
          width:'20%',
          borderRadius:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
          }}>
<Text >
          Go Back
        </Text>

</View>
<View style={{
       borderWidth: 1,
          width:'70%',
          borderRadius:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center'
          }}>

        <Text>
          This is Chapter title
        </Text>

            </View>
      </View>

      <ScrollView >


        {imagees.map((item) => <ShowPic />)}



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain'

  },
  logo: {
    width: 66,
    height: 58,
  },
});




export function ShowPic(imgUrl) {
  let imgLink = "https://static.wikia.nocookie.net/lunarath/images/d/d6/Wabu.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210329164042";

  const [loading, setloading] = useState(true)
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderWidth: 1
    }}>

      <Image
        style={styles.tinyLogo}
        // resizeMode={"contain"} 
        onLoadStart={() => setloading(true)}
        source={{
          uri: imgLink,
        }}
        onLoadEnd={() => {
          setloading(false)
          console.log('rendered')
        }}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>


  )

}