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

import {setModules} from '../../store/courseSlice';
import {_API_URL} from '../../GlobalConfig';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const course = useSelector(state => state.course.course);
  const userModules = useSelector(state => state.course.module);

  // Get Modules from server ▼
  useEffect(() => {
    (function () {
      axios
        .get(`${_API_URL}/modules/${course}`)
        .then(async result => {
          const loadedModules = await result.data;
          if (userModules.length < 1 || userModules[0].course !== course)
            dispatch(setModules(loadedModules));
          setLoading(false);
          console.log(loadedModules)
        })
        .catch(e => Alert.alert('Email/Password incorrect', `try 0 and 0`));
    })();
  }, [course]);

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
