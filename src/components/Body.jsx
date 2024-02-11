import {Animated, Pressable, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/styles';
import {getModules} from '../Data/functions';

import {useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Body = ({
  pageNumber: slideNum,
  setPageNumber: setslideNum,
  setShowQuiz,
  CCNA,
  Data,
  Modules,
  setModules,
}) => {
  const username = useSelector(state => state.user.username);
  const data = Data[CCNA];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fakeApiCall = async () => {
      setLoading(true);

      try {
        const storedData = await AsyncStorage.getItem('modules');
        if (storedData) {
          setModules(JSON.parse(storedData));
          setLoading(false);
        }
        const modules = await getModules(CCNA);
        setModules(modules);
        setLoading(false);
        await AsyncStorage.setItem('modules', JSON.stringify(modules));
      } catch (error) {
        console.error('Error fetching modules:', error);
        setLoading(false);
      }
    };
    fakeApiCall();
  }, [CCNA]);

  return (
    <View style={styles.body}>
      <View style={styles.welcom}>
        <Text style={styles.welcom1}>Hello, {username}</Text>
        <Text style={styles.welcom2}>Welcome back to your course</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Slides
            slideNum={slideNum}
            setShowQuiz={setShowQuiz}
            data={data}
            Modules={Modules}
          />

          <View style={styles.nav_btns}>
            {Modules.map(Module => {
              if (Module.id == slideNum)
                return (
                  <Pressable
                    style={{padding: 10}}
                    onPress={() => setslideNum(Module.id)}
                    key={Module.id}>
                    <Text
                      style={{...styles.nav_btn, ...styles.nav_btn_selected}}>
                      .
                    </Text>
                  </Pressable>
                );
              return (
                <Pressable
                  style={{padding: 10}}
                  onPress={() => setslideNum(Module.id)}
                  key={Module.id}>
                  <Text style={styles.nav_btn}>.</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};

const Slides = ({slideNum, Modules, data, setShowQuiz}) => {
  const fading = new Animated.Value(0);
  Animated.timing(fading, {
    toValue: 1,
    useNativeDriver: true,
    duration: 200,
  }).start();

  ////////////////////////////////
  const progression = 100;
  ////////////////////////////
  return (
    <Animated.View style={{...styles.slide, opacity: fading}}>
      <View style={{...styles.slide_item}}>
        <Text style={styles.slide_item_title}>
          {slideNum + ' : ' + Modules[slideNum - 1 || 0].title}
        </Text>
        <Pressable>
          <Text style={styles.slide_item_details}>VOIR DETAILS</Text>
        </Pressable>

        {
          /*Modules[slideNum].*/ progression === 100 && (
            <View>
              <Text style={styles.slide_item_progression}>
                You Completed this Section!
              </Text>
            </View>
          )
        }

        {
          /*Modules[slideNum].*/ progression < 100 && (
            <View style={styles.progression_bar_bg} key="progression_bar">
              <View
                style={{
                  ...styles.progression_bar,
                  width: /*Modules[slideNum].*/ progression + '%',
                }}
              />
            </View>
          )
        }

        <Pressable
          onPress={() => {
            setShowQuiz(true);
          }}
          style={styles.slide_item_btn_grp}>
          <Text style={styles.slide_item_btn}>
            {/*Modules[slideNum].*/ progression < 100 ? 'CONTINUE' : 'REVIEW'}
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default Body;
