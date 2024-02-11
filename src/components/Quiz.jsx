import {
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/styles';
import Colors from '../styles/colors';
import {getChapters, getQuizes} from '../Data/functions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {setChaptersWithApi} from '../store/courseSlice';
import {useSelector} from 'react-redux';

const upArrowIcon = require('./../images/svg/arrow.png');
const bookIcon = require('./../images/svg/book.png');
const validIcoin = require('./../images/svg/valid.png');
const invalidIcoin = require('./../images/svg/invalid.png');

const Quiz = ({
  setShowQuiz,
  pageNumber,
  Data,
  CCNA,
  ModuleId,
  Chapters,
  setChapters,
}) => {
  const [loading, setLoading] = useState(true);
  const [Quiz, setQuiz] = useState([]);

  const course = useSelector(state => state.course.course);
  const modules = useSelector(state => state.course.module);

  const data = modules;

  async function localFunc() {
    try {
      console.log(modules);
      //   await setChaptersWithApi(modules[0].id);
    } catch (e) {
      console.log('api problem ', e);
    }
  }

  useEffect(() => {
    localFunc();
  }, [course]);

  // useEffect(() => {
  //     const fakeApiCall = async () => {
  //         setLoading(true);
  //         try {
  //             // const storedData = await AsyncStorage.getItem('chapters');
  //             // if (storedData) {
  //             //     setChapters(JSON.parse(storedData));
  //             // }
  //             // const chapters = await getChapters(ModuleId);
  //             // setChapters(chapters);
  //             // console.log(chapters)
  //             // await AsyncStorage.setItem('chapters', JSON.stringify(chapters));

  //             //  I have ptoblem with get chapters
  //             // but quizes are fine for now
  //             const storedQuiz = await AsyncStorage.getItem('quizes');

  //             if (storedQuiz) {
  //                 setQuiz(JSON.parse(storedQuiz));
  //                 setLoading(false);
  //             }
  //             const quizes = await getQuizes(1);
  //             setQuiz(quizes);

  //             await AsyncStorage.setItem('quizes', JSON.stringify(quizes));

  //             setLoading(false);

  //         } catch (error) {
  //             console.error('Error fetching modules:', error);
  //             setLoading(false);
  //         }
  //     };
  //     fakeApiCall();
  // }, [CCNA]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section_item}>
          <Text style={styles.section_item_title}>{data[0].title}</Text>
          <Pressable
            onPress={() => {
              setShowQuiz(false);
            }}
            style={styles.section_item_btn}>
            <Image source={upArrowIcon} />
          </Pressable>
        </View>
      </View>

      {loading ? ( // Render loading indicator if loading is true
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.unite}>
            <Text style={styles.unite_title}>Unite 1 :</Text>
            <Text style={styles.unite_details}>
              Understand what is OSI module , and why we use it
            </Text>
            <Pressable style={styles.unite_icon}>
              <Image source={bookIcon} />
            </Pressable>
          </View>

          <SafeAreaView
            style={{
              height: '50%',
            }}>
            <ScrollView>
              {data[pageNumber].quizUnits.map(unit => {
                return (
                  <QuizUnit
                    key={unit.id}
                    data={unit}
                    length={data[pageNumber].quizUnits.length}
                  />
                );
              })}
            </ScrollView>
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

const QuizUnit = ({data, length}) => {
  return (
    <View key={data.id} style={{paddingLeft: '20%', margin: '1%'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{marginRight: '5%'}}
          source={data.completed === data.task ? validIcoin : invalidIcoin}
        />
        <Text
          style={{fontSize: 32, color: Colors.Dark.gray, fontWeight: 'bold'}}>
          {data.id}.....{data.title}: {data.completed}/{data.task}
        </Text>
      </View>
      <View
        style={{
          borderColor:
            data.id < length - 1
              ? data.completed === data.task
                ? Colors.Dark.gray
                : Colors.Dark.lightGray
              : 'transparent',
          borderWidth: 2,
          width: 0,
          height: 60,
          marginLeft: '8%',
          marginTop: '3%',
        }}
      />
    </View>
  );
};

export default Quiz;
