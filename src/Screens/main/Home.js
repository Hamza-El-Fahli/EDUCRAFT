import {
  Dimensions,
  Pressable,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import styles from '../../styles/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../../components/Body';

import {useSelector, useDispatch} from 'react-redux';

import {setModules} from '../../store/courseSlice';
import {Next_Modules, _API_URL} from '../../GlobalConfig';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const SelectedCourse = useSelector(state => state.course.course);
  const userModules = useSelector(state => state.course.module);

  // Get Modules from server ▼
  useEffect(() => {
    (function () {
      if(SelectedCourse == 1 ) return
      axios
        .get(`${Next_Modules}?course_id=${SelectedCourse}`)
        .then(result => {
          const loadedModules = result.data;
          if (userModules.length < 1 || userModules[0].course_id !== SelectedCourse)
            dispatch(setModules(loadedModules));
          setLoading(false);
          // console.log(loadedModules)
        })
        .catch(e => Alert.alert('Modules not found', `Check your internet connection`));
    })();
  }, [SelectedCourse]);

  // Get Modules from server ▲

  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {/* ▼ Show Loading indicator until fetching Data ▼ */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Body navigation={navigation} />
        </>
      )}
      {/* ▲ Show Loading indicator until fetching Data ▲ */}

      <Footer navigation={navigation} styles={styles} currentPage="Home" />
    </View>
  );
};

export default Home;
