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
 
  
  return (
    <View style={styles.container}>
      <View style={styles.QuizHeader}>
          <Text style={{position:'absolute',top:0,left:0}}>X</Text>
          <View style={styles.QuizHeader_progressBG}>
              <View style={{...styles.QuizHeader_progressFG,width:`${(3/5)*100}%`}}></View>
          </View>
      </View>
      <View style={styles.Body}>
        
      <View >
          <Text style={styles.QuizText}>Question 1:</Text>
          <Text style={styles.QuizText}>this is the question text this is the question text this is the question text this is the question text</Text>
          </View>
          <View>
        <Text style={styles.QuizText}> Choose the best option :</Text>
            <CoolRadioBox />
          </View>
      </View>
          <View style={styles.Footer}>
              <Text style={styles.FooterBTN}>
                  Continue
                  </Text>
          </View>
    </View>
  );
};

export default Quizes;

const CoolRadioBox = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option1" color="#AAAAAA" />
          <Text>Option 1</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option2" color="#AAAAAA" />
          <Text>Option 2</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option3" color="#AAAAAA" />
          <Text>Option 3</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton.Android value="option4" color="#AAAAAA" />
          <Text>Option 4</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};
