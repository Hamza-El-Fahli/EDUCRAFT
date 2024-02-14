import {
  Dimensions,
  Pressable,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import axios from 'axios';

import styles from '../../styles/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../../components/Body';

import {useSelector, useDispatch} from 'react-redux';

import {
  setModules,
  setSelectedModule,
  setChapter,
} from '../../store/courseSlice';
import {_API_URL} from '../../GlobalConfig';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const course = useSelector(state => state.course.course);
  const selectedModule = useSelector(state => state.course.selectedModule);
  const userModules = useSelector(state => state.course.module);

 

  useEffect(() => {
    (function () {
      axios
        .get(`${_API_URL}/modules/${course}`)
        .then(async result => {
          const loadedModules = await result.data;
          // console.log(loadedModules.course)
          if (userModules.length < 1 || userModules[0].course !== course)
            dispatch(setModules(loadedModules));
          setLoading(false);
        })
        .catch(e =>         Alert.alert('Email/Password incorrect', `try 0 and 0`)        );
    })();
  }, [course]);

  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Body
            styles={styles}
            navigation={navigation}
          />
        </>
      )}
      <Footer navigation={navigation} styles={styles} currentPage="Home" />
    </View>
  );
};

export default Home;
