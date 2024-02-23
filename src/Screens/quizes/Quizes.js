import {ActivityIndicator, StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setGivenAnswers} from '../../store/courseSlice';
import RadioBox from '../../components/RadioBox';
import axios from 'axios';
import {_API_URL} from '../../GlobalConfig';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/quizesStyle';
const Quizes = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loader, setloader] = useState(false);
  const [MyQuizes, setMyQuizes] = useState([]);
  const [quizIndex, setquizIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const GivenAnswers = useSelector(state => state.course.GivenAnswers);

  const selectedChapter = useSelector(state => state.course.selectedChapter);
  const options = [
    {value: 0, label: MyQuizes ? MyQuizes[quizIndex]?.answers[0] : null},
    {value: 1, label: MyQuizes ? MyQuizes[quizIndex]?.answers[1] : null},
    {value: 2, label: MyQuizes ? MyQuizes[quizIndex]?.answers[2] : null},
    {value: 3, label: MyQuizes ? MyQuizes[quizIndex]?.answers[3] : null},
  ];
  useEffect(() => {
    (async function () {
      dispatch(setGivenAnswers([]));
      const thisQuizIsTheFirstQuiz = 1;
      axios
        .get(`${_API_URL}/tests/${selectedChapter}/${thisQuizIsTheFirstQuiz}`)
        .then(async result => {
          const quizes = await result.data;
          const firstQuiz = quizes.filter(
            item => item.quiz == thisQuizIsTheFirstQuiz,
          );
          //   console.log(firstQuiz.length);
          setMyQuizes(firstQuiz);
        })
        .catch(e => console.log(e));
    })();
  }, []);

  function nextQuizPlease() {
    if (selected == null) {
      // console.log('Ohoooooo');
      return;
    }
    if (quizIndex < 3) {
      setquizIndex(quizIndex + 1);
      dispatch(
        setGivenAnswers([
          ...GivenAnswers,
          {
            userAnswer: options[selected].value,
            correctAnswer: MyQuizes[quizIndex]?.correctAnswer,
            question: MyQuizes[quizIndex]?.question,
          },
        ]),
      );
      setSelected(null);
    } else {
      //   setloader(true);
      dispatch(
        setGivenAnswers([
          ...GivenAnswers,
          {
            userAnswer: options[selected].value,
            correctAnswer: MyQuizes[quizIndex]?.correctAnswer,
            question: MyQuizes[quizIndex]?.question,
          },
        ]),
      );

      navigation.navigate('ShowResults');
    }
  }

  return (
    <View style={styles.container}>
      {/* ▼ Show loaders untill fetch completed ▼ */}
      {loader ? (
        <ActivityIndicator
          size="x-larg"
          style={{alignSelf: 'center', marginTop: '50%'}}
          color="#0000ff"
          />
          ) : (
            <>
            {/* ▲ Show loaders untill fetch completed ▲ */}
        {/* ▼ Show Questions when fetch completed ▼ */}
          <View style={styles.quiz_header}>
            <Text style={styles.quiz_header}>X -------------</Text>
          </View>

          <View style={styles.Question}>
            <Text style={styles.question_label}>Question</Text>
            <Text style={styles.question_content}>
              {MyQuizes[quizIndex]?.question}
            </Text>
          </View>

          <View style={styles.answers}>
            <RadioBox
              options={options}
              //selectedValue={5} // Initially selected value
              //   onSelect={value => console.log('Selected value:', value)}
              selected={selected}
              setSelected={setSelected}
            />
          </View>

          <View style={styles.btn}>
            <Button title="Continue" onPress={() => nextQuizPlease()} />
          </View>
          {/* ▲ Show Questions when fetch completed ▲ */}
        </>

      )}
    </View>
  );
};

export default Quizes;
