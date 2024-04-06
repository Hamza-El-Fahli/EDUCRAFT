import {ActivityIndicator, Text, View, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {CoolRadioBox} from '../../components/CoolRadioBox.jsx';
import { Next_Quizzes, _API_URL} from '../../GlobalConfig';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/quizesStyle.js';
import { setScore } from '../../store/courseSlice.js';
import axios from 'axios';
import { setAnswers, setQuizzes } from '../../store/quizzesSlice.js';
const Quizes = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [loading, setloading] = useState(true)

  const [answers, setanswers] = useState([])
  const [currentQuiz, setcurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [btnClicked, setbtnClicked] = useState(false);

  const currentChapterId = useSelector( state =>state.quiz.chapter_id)
  const quizGroup = useSelector(state => state.quiz.selectedGroup)
  const quizzes = useSelector(state => state.quiz.quizzes)
useEffect(()=>{
    axios
    .get(`${Next_Quizzes}?chapter_id=${currentChapterId}&quiz_group=${quizGroup}`)
    .then((res)=>{
      dispatch(setQuizzes(res.data))
      setloading(false)
    })
    .catch(err => console.log(err))
},[])





  return ( loading ?
     <ActivityIndicator /> 
     :
    <View style={styles.container}>
      <View style={styles.QuizHeader}>
        <Text style={{...styles.x, position: 'absolute', left: 0}}>X</Text>
        <View style={styles.QuizHeader_progressBG}>
          <View
            style={{
              ...styles.QuizHeader_progressFG,
              width: `${((currentQuiz+1)/ quizzes.length) * 100}%`,
            }}></View>
        </View>
      </View>
      <View style={styles.Body}>
        <View>
          <Text style={{...styles.QuizText, fontWeight: 'bold'}}>
            Question {currentQuiz + 1}:
          </Text>
          <Text style={styles.QuizText}>
            {quizzes[currentQuiz].question}
          </Text>
        </View>
        <View>
          <Text style={{...styles.QuizText, fontWeight: 'bold'}}>
            Choose the best option :
          </Text>
          <CoolRadioBox
            Options={quizzes[currentQuiz].answers}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </View>
      </View>
      <View style={styles.Footer}>
        <Pressable
          style={styles.FooterBTN}
          onPress={() => {
            if (selectedOption == 0) {
              console.log('Choose an option');
              return;
            }
            
            if(currentQuiz+1  < quizzes.length){
              setanswers([...answers, {quiz_id : quizzes[currentQuiz]._id , answer : selectedOption}])
              setSelectedOption('')
              setcurrentQuiz(currentQuiz + 1); // move to next quiz
            }
              else{
                dispatch(setAnswers([...answers, {quiz_id : quizzes[currentQuiz]._id , answer : selectedOption}]))
                navigation.navigate('ShowResults')
              }
          }}>
          <Text
            style={
              selectedOption == 0 // if no option selected disbale button
                ? {...styles.FooterBTN_Text, ...styles.FooterBTN_Text_disabled}
                :  {...styles.FooterBTN_Text, ...styles.FooterBTN_Text_enabled}
            }>
            Continue
          </Text>
        </Pressable>
        
      </View>
    </View>
  );
};

export default Quizes;
