import {
  Image,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/ChaptesStyle';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { setChapters, setQuizzesByModule, setQuizzesForPage } from '../../store/courseSlice';
import { Next_Chapters } from '../../GlobalConfig';
import { setChapterId, setSelectedQuizGroup } from '../../store/quizzesSlice';

const upArrowIcon = require('./../../images/svg/arrow.png');
const lockedIcon = require('./../../images/svg/locked.png')
const bookIcon = require('./../../images/svg/book.png');
const validIcoin = require('./../../images/svg/valid.png');
const invalidIcoin = require('./../../images/svg/invalid.png');

const Chapters = ({ navigation }) => {
  const dispatch = useDispatch()
  const selectedModule_id = useSelector(state => state.course.selectedModule_id);
  const [loader, setloader] = useState(true);
  const chapters = useSelector(state => state.course.chapters)
  const user = useSelector(state => state.user.user)
  const modules = useSelector(state => state.course.module)
  const currentModule = modules.find((module) => module._id == selectedModule_id)
  useEffect(() => {
    axios
      .get(`${Next_Chapters}?module_id=${selectedModule_id}&user_id=${user._id}`)
      .then((res) => {
        dispatch(setChapters(res.data))
        setloader(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <View style={styles.container}>
      {loader ? (
        <ActivityIndicator
          size="x-larg"
          style={{ alignSelf: 'center', marginTop: '50%' }}
          color="#0000ff"
        />
      ) : (
        <>
          {/*/////////////// Header ////////////////// */}
          {/* <Header navigation={navigation} /> */}
          <View style={styles.header}>
            <Pressable
              style={{ position: 'absolute', top: 0, lef: 0, zIndex: 10, padding: 10, backgroundColor: 'rgba(100,100,100,.5)', borderBottomEndRadius: 100 }}
              onPress={() => navigation.goBack()}>
              <Text style={{ ...styles.dropDown_item, color: 'white' }}>{'<'}</Text>
            </Pressable>
          </View>
          {/*/////////////// Header ////////////////// */}

          {/*/////////////// Module Title ////////////////// */}
          <View style={styles.module}>
            <Text style={styles.module_title}>Module {currentModule?.order_num}: {currentModule?.title}</Text>
          </View>
          {/*/////////////// Module Title END ////////////////// */}

          <ScrollView style={styles.scroll}>
            {chapters.map((oneChapter, index) => {
              const isLastElement = chapters.length - 1 === index;
              return (
                <View
                  style={{
                    ...styles.chapter,

                    borderBottomWidth: isLastElement ? 2 : 0,
                    borderBottomLeftRadius: isLastElement ? 0 : 20,
                    borderBottomRightRadius: isLastElement ? 0 : 20,
                  }}
                  key={index}>
                  <View style={styles.chapter_title}>
                    {/*/////////////// Chapter Title////////////////// */}

                    <View style={styles.chapter_title_left}>
                      <Text style={styles.chapter_title_left1}>
                        Chapter {index + 1}
                      </Text>
                      <Text style={styles.chapter_title_left2}>
                        {oneChapter.description}
                      </Text>
                    </View>

                    <View style={styles.chapter_title_right}>
                      <Pressable
                        onPress={() => {
                          dispatch(setChapterId(oneChapter._id));
                          navigation.navigate("Lessons");
                        }}
                      >

                        <Image source={bookIcon} />
                      </Pressable>
                    </View>
                  </View>
                  {/*///////////////  Chapter Title End ////////////////// */}
                  {/*///////////////  Chapter Quiz ////////////////// */}

                  {/* {Quizzes[0]?.chapter_id == oneChapter._id && <Text>hahaha</Text>} */}
                  {oneChapter.quizGroupes > 0 && <OneQuiz chapter={oneChapter} />}
                  {/*///////////////  Chapter Quiz END ////////////////// */}
                </View>
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Chapters;





function OneQuiz({ chapter }) {
  const totalQuizGroups = chapter.quizGroupes; // Assuming quizGroups is the total number of groups
  const finishedQuizGroups = chapter.isDone; // Assuming isDone is the number of finished groups
  const chapterId = chapter._id;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return Array.from({ length: totalQuizGroups }, (_, index) => {

    return (
      <View key={index} style={styles.quiz}>
        <Pressable
          onPress={() => {
            dispatch(setSelectedQuizGroup(index)); // Assuming quiz groups are 1-indexed
            dispatch(setChapterId(chapterId));
            if (index == finishedQuizGroups) {
              navigation.navigate("Quizzes");
            }
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={(index < finishedQuizGroups) ? validIcoin : (index == finishedQuizGroups) ? invalidIcoin : lockedIcon}
              style={{ margin: 10 }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#E9E8F1' /*Colors.Dark.white*/,
              }}>
              Quiz : {index + 1}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  });
}
