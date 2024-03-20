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
import { Next_Quizzes } from '../../GlobalConfig';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { setQuizzesByModule, setQuizzesForPage } from '../../store/courseSlice';

const upArrowIcon = require('./../../images/svg/arrow.png');
const bookIcon = require('./../../images/svg/book.png');
const validIcoin = require('./../../images/svg/valid.png');
const invalidIcoin = require('./../../images/svg/invalid.png');

const ChaptersPage = ({navigation}) => {
  const dispatch = useDispatch()
  const selectedModule = useSelector(state => state.course.selectedModule);

  const [loader, setloader] = useState(false);
  const chapters = useSelector(state => state.course.chapter);
  const quizzesByModule = useSelector((state)=>state.course.quizzesByModule)

useEffect(()=>{
  axios.get(`${Next_Quizzes}?module_id=${chapters[selectedModule].module_id}`)
  .then((res)=>{
    dispatch(setQuizzesByModule(formatQuizzes(res.data)))
  })
  .catch((err)=>console.log(`error happened ${err} when try ${Next_Quizzes}?module_id=${chapters[selectedModule].module_id}`))
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
                  {quizzesByModule?.filter((quiz)=>{
                    // console.log(oneChapter._id)
                    
                    return quiz.chapterID == oneChapter._id})?.map((quiz2,index)=>{
                  return (<OneQuiz quizData={quiz2.questions} key={index} />)})}
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

export default ChaptersPage;




function OneQuiz({quizData}){
const navigation = useNavigation()
const dispatch = useDispatch()

  return <View style={styles.quiz}>
  <Pressable onPress={()=>{

    dispatch(setQuizzesForPage(quizData))
    navigation.navigate('Quizes')
        
    }}>
    <View
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={validIcoin} style={{margin: 10}} />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#E9E8F1' /*Colors.Dark.white*/,
        }}>
        Quiz 1 : 5/{quizData.length}
      </Text>
    </View>
  </Pressable>
</View>
}


function formatQuizzes(apiResponse) {
  const formattedQuizzes = [];

  apiResponse.quizzes.forEach((quiz) => {
    const formattedQuiz = {
      chapterName: quiz.chapter_name,
      chapterID: quiz.chapter_id,
      questions: [],
    };

    Object.keys(quiz).forEach((key) => {
      if (key !== 'chapter_name' && key !== 'chapter_id') {
        const question = {
          id: quiz[key]._id,
          question: quiz[key].question,
          correctAnswer: quiz[key].correct_answer,
          choices: quiz[key].answers,
        };

        formattedQuiz.questions.push(question);
      }
    });

    formattedQuizzes.push(formattedQuiz);
  });

  return formattedQuizzes;
}