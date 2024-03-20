import {ActivityIndicator,  Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { RadioButton } from 'react-native-paper';

import {setGivenAnswers} from '../../store/courseSlice';
import RadioBox from '../../components/RadioBox';
import axios from 'axios';
import {_API_URL} from '../../GlobalConfig';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/quizesStyle.js';
const Quizes = () => {
 const quizzesForPage = useSelector((state)=>state.course.quizzesForPage) 
const [currentQuiz, setcurrentQuiz] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.QuizHeader}>
          <Text style={{...styles.x,position:'absolute',left:0}}>X</Text>
          <View style={styles.QuizHeader_progressBG}>
              <View style={{...styles.QuizHeader_progressFG,width:`${(3/5)*100}%`}}></View>
          </View>
      </View>
      <View style={styles.Body}>
        
      <View >
          <Text style={styles.QuizText}>Question {currentQuiz+1}:</Text>
          <Text style={styles.QuizText}>{quizzesForPage[0].question}</Text>
          </View>
          <View>
        <Text style={styles.QuizText}> Choose the best option :</Text>
            <CoolRadioBox Options={quizzesForPage[0]} />
          </View>
      </View>
          <View style={styles.Footer}>
              <Text style={styles.FooterBTN}>
                  Continue
                  </Text>
              <View style={styles.CommentLabel}>
                <Text style={{...styles.x,position:'absolute',top:10,right:10}}>X</Text>
              <Text style={{...styles.QuizText}}>Not Correct</Text>
              <Text style={{...styles.QuizText,fontSize:styles.QuizText.fontSize-5}}>want to review the course ?</Text>
              </View>
          </View>
    </View>
  );
};

export default Quizes;

const CoolRadioBox = ({Options}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [MyOptions, setMyOptions] = useState([])
  const generateOptions = (choices, correctAnswer , countOfOptions)=>{
    const result = [correctAnswer]
    const bt = [choices.indexOf(correctAnswer)]
  
    while(result.length < countOfOptions){
      const tmpIndex = Math.floor(Math.random()*choices.length)
      if(tmpIndex in bt) continue
      result.push(choices[tmpIndex])
      bt.push(tmpIndex)
    }
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
  }  return result 
  }
  
  useEffect(()=>{
    setMyOptions(generateOptions(Options.choices,Options.correctAnswer,4))
  },[Options])
  
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option1" color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[0]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option2" color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[1]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option3" color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[2]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option4" color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[3]}</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};
