import {
  Dimensions,
  Pressable,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../styles/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Quiz from '../../components/Quiz';
import Data from '../..//Data/Data';

import {useSelector, useDispatch} from 'react-redux';

import {
  setModulesWithApi,
  setSelectedModule,
  setChapter,
} from '../../store/courseSlice';

const Home = ({navigation}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [Chapters, setChapters] = useState([]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const course = useSelector(state => state.course.course);
  const selectedModule = useSelector(state => state.course.selectedModule);
  const userModules= useSelector(state=> state.course.module)

  async function GetThoseModules() {
    await dispatch(setModulesWithApi(course));
    setLoading(false);
  }
  async function GetThoseChapters() {
    await dispatch(setChapter(userModules[selectedModule].id));
    console.log(userModules[selectedModule])
    setLoading(false);
  }

  useEffect(() => {
    GetThoseModules();
  }, [course]);

  useEffect(() => {
    GetThoseChapters();
  }, [userModules]);

  // const course = useSelector(state => state.course.course);

  // const currentModule = useSelector(state => state.course.module);
  // const selectedModule = useSelector(state => state.course.selectedModule);

  // async function localFunc() {
  //   try {
  //     await setChapter(modules[0].id);
  //     console.log(chapters);
  //   } catch (e) {
  //     console.log('api problem ', e);
  //   }
  // }

  // useEffect(() => {
  //   localFunc();
  // }, [course]);

  // async function mymodule() {
  //   try {
  //     if (
  //       currentModule != undefined &&
  //       currentModule.length > 5 &&
  //       currentModule[0].course === course
  //     )
  //       setLoading(false);
  //     else {
  //       await dispatch(setModulesWithApi(course));
  //       setLoading(false);
  //     }
  //   } catch (e) {
  //     console.log('api problem ', e);
  //   }
  // }
  // useEffect(() => {
  //   mymodule();
  // }, [course]);

  // const modules = useSelector(state => state.course.module);
  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <> */}
      {!showQuiz ? (
        <Body
          styles={styles}
          setShowQuiz={setShowQuiz}
          setSelectedModule={setSelectedModule}
        />
      ) : (
        <Quiz
          setShowQuiz={setShowQuiz}
          Chapters={Chapters}
          setChapters={setChapters}
        />
      )}
      {/* </>
      )} */}
      <Footer navigation={navigation} styles={styles} currentPage="Home" />
    </View>
  );
};

export default Home;
