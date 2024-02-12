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

import {useSelector, useDispatch} from 'react-redux';

import {
  setModulesWithApi,
  setSelectedModule,
  setChapter,
} from '../../store/courseSlice';

const Home = ({navigation}) => {

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
    await dispatch(setChapter(userModules[selectedModule]?.id));
    // console.log(userModules[selectedModule])
    setLoading(false);
  }

  useEffect(() => {
    GetThoseModules();
  }, [course]);

  useEffect(() => {
    GetThoseChapters();
  }, [userModules]);

  
  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <> */}
     
        <Body
          styles={styles}
          setSelectedModule={setSelectedModule}
          navigation={navigation}
        />
      
      {/* </>
      )} */}
      <Footer navigation={navigation} styles={styles} currentPage="Home" />
    </View>
  );
};

export default Home;
