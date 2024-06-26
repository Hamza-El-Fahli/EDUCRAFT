import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Next_Lessons } from '../../GlobalConfig';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/quizesStyle';
export default function Lesson() {
  const [onError, setonError] = useState(false)
  const navigation = useNavigation()
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
        setonError(true)
        console.log(err)
      })
  }, [])
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.Lessons_Header}>

        <View style={styles.Lessons_Header_goBack}>
          <Pressable
            onPress={() => {
              navigation.goBack()
            }}
          >
 
            <Text style={styles.Lessons_Header_goBack_text} >
              Go Back
            </Text>
          </Pressable>

        </View>
        <View style={styles.Lessons_Header_Title}>

          <Text style={styles.Lessons_Header_Title_text}>
            {chapter?.title}
          </Text>

        </View>
      </View>
      {!onError ? images.length <= 0 ? <View
        style={styles.Lessons_images}
      >
        <ActivityIndicator size='large' color='#000000' />
      </View>
        :
        <ScrollView >
          {images?.map((item, index) => <ShowPic key={item} page={index + 1} imgUrl={item} />)}
        </ScrollView>
      :
      <View style={{flex: 1,justifyContent:'center'}}>
        <Text style={{alignSelf:'center',fontSize:30,textAlign:'center' , fontWeight:'700'}}>There No Lessons for this chapter yet</Text>

        </View>
      }
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'contain'

//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });




export function ShowPic({ imgUrl, page }) {
  // let imgLink = "https://static.wikia.nocookie.net/lunarath/images/d/d6/Wabu.jpg/revision/latest/thumbnail/width/360/height/360?cb=20210329164042";
  const [loading, setloading] = useState(true)
  const [resolution, setresolution] = useState({ height: 0, width: 0 })
  Image.getSize(imgUrl, (width, height) => { setresolution({ height, width }) },);
  return (
    <ReactNativeZoomableView
          maxZoom={2}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          onZoomAfter={this.logOutZoomState}
          
        >

    <View style={styles.Lessons_pic_container}>
      <View style={styles.Lessons_pagination}>
        <Text style={{ color: 'white' }}>
          {page < 10 ? '0' + page : page}
        </Text>
      </View>
      <Image
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

</ReactNativeZoomableView>
  )

}