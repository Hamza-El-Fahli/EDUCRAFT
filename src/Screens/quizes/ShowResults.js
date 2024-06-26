import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setChapters, setModules} from '../../store/courseSlice';
import styles from '../../styles/quizesStyle';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Next_Quizzes_Check} from '../../GlobalConfig';
import Colors from '../../styles/colors';
const ShowResults = () => {
  const answers = useSelector(state => state.quiz.answers);
  const dispatch = useDispatch();
  const chapter_id = useSelector(state => state.quiz.chapter_id);
  const quizGroup = useSelector(state => state.quiz.selectedGroup);
  const module_id = useSelector(state => state.course.selectedModule_id);
  const user_id = useSelector(state => state.user.user._id);
  const chapters = useSelector(state => state.course.chapters);
  const modules = useSelector(state => state.course.module);

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
          let isChapterDone;
          const newChaptersState = chapters.map(chapter => {
            if (chapter._id == chapter_id) {
              isChapterDone = chapter.isDone + 1 == chapter.quizGroupes;
              return {...chapter, isDone: chapter.isDone + 1};
            }
            return chapter;
          });
          if (isChapterDone) {
            const newModulesState = modules.map(_module => {
              if (_module._id == module_id)
                return {
                  ..._module,
                  done: _module.done + 1,
                  progress: ((_module.done + 1) * 100) / _module.chapter_count,
                };
              return _module;
            });
            dispatch(setModules(newModulesState));
          }
          dispatch(setChapters(newChaptersState));
        }
        setloading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          {testedAnswers.map((answer, index) => {
            return (
              <Text
                key={index}
                style={{color: answer.isCorrect ? 'green' : 'red'}}>
                Q{index + 1}: {answer.quiz_question}
              </Text>
            );
          })}
        </View>
      )}
      {!loading && (
        <Pressable
          onPress={() => navigation.navigate('Chapters')}
          style={{
            position: 'absolute',
            bottom: 0,
            height: 50,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: Colors.Dark.lightBlue,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <Text
            style={{
              color: Colors.Dark.white,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Go Back
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default ShowResults;
