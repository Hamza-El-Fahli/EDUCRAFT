import {
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import RadioBox from '../../components/RadioBox';
import axios from 'axios';
import {_API_URL} from '../../GlobalConfig';

const Quizes = () => {
  const [loader, setloader] = useState(false);
  const [MyQuizes, setMyQuizes] = useState([]);

  const chapters = useSelector(state => state.course.chapter);
  const selectedChapter = useSelector(state => state.course.selectedChapter);
  const options = [
    {value: 0, label: MyQuizes ? MyQuizes[0]?.answers[0] : null},
    {value: 1, label: MyQuizes ? MyQuizes[0]?.answers[1] : null},
    {value: 2, label: MyQuizes ? MyQuizes[0]?.answers[2] : null},
    {value: 3, label: MyQuizes ? MyQuizes[0]?.answers[3] : null},
  ].sort(() => Math.random() - 0.5);
  useEffect(() => {
    (async function () {
      axios
        .get(`${_API_URL}/tests/${selectedChapter}`)
        .then(async result => {
          const quizes = await result.data;
          const firstQuiz = quizes.filter(item => item.quiz == 1);
          console.log(firstQuiz[0]);
          setMyQuizes(firstQuiz);
        })
        .catch(e => console.log(e));
    })();
  }, []);
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
          <View style={styles.header}>
            <Text>X -------------</Text>
          </View>

          <View style={styles.Qestion}>
            <Text>Question</Text>
            <Text>{MyQuizes[0]?.question}</Text>
          </View>

          <View style={styles.answers}>
            <RadioBox
              options={options}
              //   selectedValue={2} // Initially selected value
              onSelect={value => console.log('Selected value:', value)}
            />
          </View>

          <View style={styles.btn}>
            <Button title="Continue" />
          </View>
        </>
      )}
    </View>
  );
};

export default Quizes;

const styles = StyleSheet.create({});
