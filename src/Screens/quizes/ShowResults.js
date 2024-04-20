import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { setChapters } from '../../store/courseSlice';
import styles from '../../styles/quizesStyle';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Next_Quizzes_Check} from '../../GlobalConfig';
const ShowResults = () => {
  const answers = useSelector(state => state.quiz.answers);
const dispatch = useDispatch()
  const chapter_id = useSelector(state => state.quiz.chapter_id);
  const quizGroup = useSelector(state => state.quiz.selectedGroup);
  const module_id = useSelector(state => state.course.selectedModule_id);
  const user_id = useSelector(state => state.user.user._id);
  const chapters = useSelector(state=>state.course.chapters)


  const navigation = useNavigation();
  const [testedAnswers, setTestedAnswers] = useState([]);
  const [loading, setloading] = useState(true);


  useEffect(() => {
    axios
      .post(`${Next_Quizzes_Check}`, {
        answers,
        user_id,
        module_id,
        quizGroup,
        chapter_id,
      })
      .then(res => {
        setTestedAnswers(res.data);
        if (res.data.every(answer => answer.isCorrect)) {
          const newChaptersState = chapters.map((chapter)=>{
            if(chapter._id == chapter_id) return {...chapter , isDone : chapter.isDone+1}
            return chapter
          })
          dispatch(setChapters(newChaptersState))
        }
        setloading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      {testedAnswers.map((answer, index) => {
        return (
          <Text key={index} style={{color: answer.isCorrect ? 'green' : 'red'}}>
            Q{index + 1}: {answer.quiz_question}
          </Text>
        );
      })}
    </View>
  );
};

export default ShowResults;
