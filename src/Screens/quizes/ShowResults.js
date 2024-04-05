import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/quizesStyle';
import { useNavigation } from '@react-navigation/native';
const ShowResults = () => {
  const score = useSelector(state => state.course.score);
  const navigation = useNavigation()
  if(score === null){
      navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      {score.total == score.score ? 
      <Text style={{color:'white',fontSize:30}}>Good</Text>
    :  <Text style={{color:'white',fontSize:30}}>You Answered {score.score}/{score.total} correct answers </Text>
      
    }
    </View>
  );
};

export default ShowResults;
