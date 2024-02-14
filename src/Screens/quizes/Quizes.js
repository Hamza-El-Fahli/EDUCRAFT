import {
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
  const [quizIndex, setquizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [GivenAnswers, setGivenAnswers] = useState([])

  const selectedChapter = useSelector(state => state.course.selectedChapter);
  const options = [
    {value: 0, label: MyQuizes ? MyQuizes[quizIndex]?.answers[0] : null},
    {value: 1, label: MyQuizes ? MyQuizes[quizIndex]?.answers[1] : null},
    {value: 2, label: MyQuizes ? MyQuizes[quizIndex]?.answers[2] : null},
    {value: 3, label: MyQuizes ? MyQuizes[quizIndex]?.answers[3] : null},
  ];
  useEffect(() => {
    (async function () {
      axios
        .get(`${_API_URL}/tests/${selectedChapter}`)
        .then(async result => {
          const quizes = await result.data;
          const firstQuiz = quizes.filter(item => item.quiz == 1);
          setMyQuizes(firstQuiz);
        })
        .catch(e => console.log(e));
    })();
  }, []);

  function nextQuizPlease() {
    if(selected == null){ console.log("Ohoooooo") ; return}
    if (quizIndex < 3 ) {
      setquizIndex(quizIndex + 1);
      setGivenAnswers([...GivenAnswers , {duserAnswer : options[selected].value , correctAnswer : MyQuizes[quizIndex]?.correctAnswer , qustion : MyQuizes[quizIndex]?.question }])
      setSelected(null);
      console.log(options)
    } else {
        GivenAnswers.forEach((answer)=>console.log(answer))
        setloader(true)

    }
  }

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
            <Text>{MyQuizes[quizIndex]?.question}</Text>
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
        </>
      )}
    </View>
  );
};

export default Quizes;

const styles = StyleSheet.create({});
