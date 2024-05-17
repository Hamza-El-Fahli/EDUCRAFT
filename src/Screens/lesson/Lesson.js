import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Lesson() {
  const imagees = [0,1,2,3,4];
  return (
    <View>

      <ScrollView >
        <Text>
          Welcome
        </Text>


{imagees.map((item)=><ShowPic />)}



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