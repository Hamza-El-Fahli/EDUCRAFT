import {ActivityIndicator, Text, View, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {CoolRadioBox} from '../../components/CoolRadioBox.jsx';
import { Next_Quizzes, _API_URL} from '../../GlobalConfig';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/quizesStyle.js';
import { setScore } from '../../store/courseSlice.js';
import axios from 'axios';
const Quizes = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [loading, setloading] = useState(true)


  const [currentQuiz, setcurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [btnClicked, setbtnClicked] = useState(false);



useEffect(()=>{
    axios
    .get(`${Next_Quizzes}?module_id=`)
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
              width: `${((currentQuiz+1)/ quizzesForPage.length) * 100}%`,
            }}></View>
        </View>
      </View>
      <View style={styles.Body}>
        <View>
          <Text style={{...styles.QuizText, fontWeight: 'bold'}}>
            Question {currentQuiz + 1}:
          </Text>
          <Text style={styles.QuizText}>
            {quizzesForPage[currentQuiz].question}
          </Text>
        </View>
        <View>
          <Text style={{...styles.QuizText, fontWeight: 'bold'}}>
            Choose the best option :
          </Text>
          <CoolRadioBox
            Options={quizzesForPage[currentQuiz].choices}
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
            // if (!btnClicked) {
            //   setbtnClicked(true); // set state button to clicked to change the the UI
            //   setLocalScore(
            //     quizzesForPage[currentQuiz].correctAnswer == selectedOption
            //       ? score + 1
            //       : score,
            //   ); // if answer is correct add 1 to score
            // } else {
            //   setbtnClicked(false);
            //   if (currentQuiz >= quizzesForPage.length - 1) {
            //     dispatch(setScore({total :quizzesForPage.length , score }))
            //     navigation.navigate('ShowResults')
            //     return;
            //   }
            // }
              setcurrentQuiz(currentQuiz + 1); // move to next quiz
              setSelectedOption('')
          }}>
          <Text
            style={
              selectedOption == 0 // if no option selected disbale button
                ? {...styles.FooterBTN_Text, ...styles.FooterBTN_Text_disabled}
                : !btnClicked // if an option selected , check if button not clicked yet
                ? {...styles.FooterBTN_Text, ...styles.FooterBTN_Text_enabled}
                : {...styles.FooterBTN_Text, ...styles.FooterBTN_Text_clicked}
            }>
            {btnClicked ? 'Continue' : 'Submit'}
          </Text>
        </Pressable>
        <View
          style={{
            ...styles.CommentLabel,
            display: btnClicked ? 'flex' : 'none',
          }}>
          {quizzesForPage[currentQuiz].correctAnswer == selectedOption && (
            <>
              <Text style={{...styles.QuizText}}>Correct</Text>
              <Text
                style={{
                  ...styles.QuizText,
                  fontSize: styles.QuizText.fontSize - 5,
                }}>
                Keep Going
              </Text>
            </>
          )}
          {quizzesForPage[currentQuiz].correctAnswer != selectedOption && (
            <>
              <Text style={{...styles.QuizText}}>Not Correct</Text>
              <Text
                style={{
                  ...styles.QuizText,
                  fontSize: styles.QuizText.fontSize - 5,
                }}>
                want to review the course ?
              </Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Quizes;
