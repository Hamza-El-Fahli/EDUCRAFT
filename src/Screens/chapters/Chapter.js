import {
    Image,
    Pressable,
    SafeAreaView,
    ActivityIndicator,
    ScrollView,
    Text,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import styles from '../../styles/ChaptesStyle';
  import Header from '../../components/Header';
  import {useDispatch, useSelector} from 'react-redux';
  import axios from 'axios';
  import { useNavigation } from '@react-navigation/native';
  import { setChapters, setQuizzesByModule, setQuizzesForPage } from '../../store/courseSlice';
import { Next_Chapters } from '../../GlobalConfig';
  
  const upArrowIcon = require('./../../images/svg/arrow.png');
  const bookIcon = require('./../../images/svg/book.png');
  const validIcoin = require('./../../images/svg/valid.png');
  const invalidIcoin = require('./../../images/svg/invalid.png');
  
  const Chapters = ({navigation}) => {
    const dispatch = useDispatch()
    const selectedModule_id = useSelector(state => state.course.selectedModule_id);
    const [loader, setloader] = useState(true);
    const chapters = useSelector(state=>state.course.chapters)
  useEffect(()=>{
    axios
    .get(`${Next_Chapters}?module_id=${selectedModule_id}`)
    .then((res)=>{
        dispatch(setChapters(res.data))
        setloader(false)

    })
    .catch((err)=>{
        console.log(err)
    })
  },[])
  
    return (
      <View style={styles.container}>
        {loader ? (
          <ActivityIndicator
            size="x-larg"
            style={{alignSelf: 'center', marginTop: '50%'}}
            color="#0000ff"
          />
        ) : (
          <>
            {/*/////////////// Header ////////////////// */}
            <Header navigation={navigation} />
            {/*/////////////// Header ////////////////// */}
  
            {/*/////////////// Module Title ////////////////// */}
            <View style={styles.module}>
              <Text style={styles.module_title}>Modele 1 : Modèle OSI</Text>
            </View>
            {/*/////////////// Module Title END ////////////////// */}
  
            <ScrollView style={styles.scroll}>
              {chapters.map((oneChapter, index) => {
                const isLastElement = chapters.length - 1 === index;
                return (
                  <View
                    style={{
                      ...styles.chapter,
  
                      borderBottomWidth: isLastElement ? 2 : 0,
                      borderBottomLeftRadius: isLastElement ? 0 : 20,
                      borderBottomRightRadius: isLastElement ? 0 : 20,
                    }}
                    key={index}>
                    <View style={styles.chapter_title}>
                      {/*/////////////// Chapter Title////////////////// */}
  
                      <View style={styles.chapter_title_left}>
                        <Text style={styles.chapter_title_left1}>
                          Chapter {index + 1}
                        </Text>
                        <Text style={styles.chapter_title_left2}>
                        {oneChapter.description}
                        </Text>
                      </View>
  
                      <View style={styles.chapter_title_right}>
                        <Image source={bookIcon} />
                      </View>
                    </View>
                    {/*///////////////  Chapter Title End ////////////////// */}
                    {/*///////////////  Chapter Quiz ////////////////// */}
                  
                    {/* {Quizzes[0]?.chapter_id == oneChapter._id && <Text>hahaha</Text>} */}
                    
                    {/*///////////////  Chapter Quiz END ////////////////// */}
                  </View>
                );
              })}
            </ScrollView>
          </>
        )}
      </View>
    );
  };
  
  export default Chapters;
  
  
  
  
  function OneQuiz({quizData}){
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
    return <View style={styles.quiz}>
    <Pressable onPress={()=>{
  
      dispatch(setQuizzesForPage(quizData))
      console.log(quizData)
      navigation.navigate('Quizes')
          
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={invalidIcoin} style={{margin: 10}} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#E9E8F1' /*Colors.Dark.white*/,
          }}>
          Quiz 1 : 1/{quizData.length}
        </Text>
      </View>
    </Pressable>
  </View>
  }
  
  