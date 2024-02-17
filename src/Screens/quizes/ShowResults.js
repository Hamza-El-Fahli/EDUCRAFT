import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/quizesStyle';
const ShowResults = () => {
  const GivenAnswers = useSelector(state => state.course.GivenAnswers);
  return (
    <View style={styles.container}>
      {GivenAnswers.map((answer, index) => {
        return (
          <Text style={styles.showResult} key={index}>
            Question {index + 1} : {answer.question} is{' '}
            <Text
              style={{
                ...styles.showResult,
                backgroundColor: 'rgba(217, 217, 217, 0.5)',
                color:
                  answer.userAnswer == answer.correctAnswer
                    ? '#00ff00'
                    : '#ff0000',
              }}>
              {answer.userAnswer == answer.correctAnswer
                ? 'Correct'
                : 'Incorrect'}{' '}
            </Text>
          </Text>
        );
      })}
    </View>
  );
};

export default ShowResults;
