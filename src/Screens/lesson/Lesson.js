import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Next_Lessons } from '../../GlobalConfig';
import { useSelector } from 'react-redux';

export default function Lesson({navigation}) {

  const [images, setImages] = useState([])
  const chapter_id = useSelector(state => state.quiz.chapter_id);
  const chapter = useSelector(state => state.course.chapters.find(chapter => chapter._id == chapter_id));
  // const chapter_id = 1;
  useEffect(() => {
    axios
      .get(`${Next_Lessons}?chapter_id=${chapter_id}`)
      .then(res => {
        setImages(res.data)
      })
      .catch((err) => {
        console.log(chapter_id)
        console.log(err)
      })
  }, [])
  return (
    <View style={{flex:1}}>

      <View style={{
        // position: 'absolute',
        width: '100%',
        borderWidth: 2,
        height: 50,
        padding: 5,
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#ff00ff',
        // zIndex: 5

      }}>

        <View style={{
          borderWidth: 1,
          width: '20%',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Pressable
          onPress={()=>{
            navigation.goBack()}}
          >

          <Text >
            Go Back
          </Text>
          </Pressable>

        </View>
        <View style={{
          borderWidth: 1,
          width: '70%',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Text>
             {chapter?.title}
          </Text>

        </View>
      </View>
     { images.length <= 0     ?<View
      style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
      }}
     >
       <ActivityIndicator size='large' color='#000000' />
      </View>
        :
      <ScrollView >
        { images?.map((item, index) => <ShowPic key={item} page={index + 1} imgUrl={item} />)}
      </ScrollView>
}
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




export function ShowPic({ imgUrl, page }) {
  // let imgLink = "https://static.wikia.nocookie.net/lunarath/images/d/d6/Wabu.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210329164042";
  const [loading, setloading] = useState(true)
  const [resolution, setresolution] = useState({ height: 0, width: 0 })
  Image.getSize(imgUrl, (width, height) => { setresolution({ height, width }) },);
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      borderWidth: 1
    }}>
      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 3,
        paddingLeft: 5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 6,
        borderBottomLeftRadius: 8,
      }}>
        <Text style={{ color: 'white' }}>
          {page < 10 ? '0' + page : page}
        </Text>
      </View>
      <Image
        // style={styles.tinyLogo}
        style={{
          display: loading ? 'none' : 'flex',
          width: '100%',
          aspectRatio: resolution.height != 0 ? resolution.width / resolution.height : 1
        }}
        resizeMode={"contain"}
        onLoadStart={() => setloading(true)}
        source={{
          uri: imgUrl,
        }}
        onLoadEnd={() => {
          setloading(false)
        }}
      />
      {loading &&
        <ActivityIndicator size="large" color="#0000ff" />}
    </View>


  )

}