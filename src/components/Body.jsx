import {Animated, Pressable, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/styles';

import {setModulesWithApi, setModules} from '../store/courseSlice';

import {useSelector, useDispatch} from 'react-redux';

const Body = ({
  pageNumber: slideNum,
  setPageNumber: setslideNum,
  setShowQuiz,
  Data,
}) => {
  const dispatch = useDispatch();

  const username = useSelector(state => state.user.username);
  const course = useSelector(state => state.course.course);
  const currentModule = useSelector(state => state.course.module);
  const data = Data[course];
  const [loading, setLoading] = useState(true);

  async function mymodule() {
    try {
      if (
        currentModule != undefined &&
        currentModule.length > 5 &&
        currentModule[0].course === course
      )
        setLoading(false);
      else {
        await dispatch(setModulesWithApi(course));
        setLoading(false);
      }
    } catch (e) {
      console.log('api problem ', e);
    }
  }
  useEffect(() => {
    mymodule();
  }, [course]);

  // useEffect(() => {
  //   const fakeApiCall = async () => {
  //     setLoading(true);

  //     try {
  //       const storedData = await AsyncStorage.getItem('modules');
  //       if (storedData) {
  //         setModules(JSON.parse(storedData));
  //         setLoading(false);
  //       }
  //       const modules = await getModules(CCNA);
  //       setModules(modules);
  //       setLoading(false);
  //       await AsyncStorage.setItem('modules', JSON.stringify(modules));
  //     } catch (error) {
  //       console.error('Error fetching modules:', error);
  //       setLoading(false);
  //     }
  //   };
  //   fakeApiCall();
  // }, [CCNA]);

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
            currentModule={currentModule}
          />

          <View style={styles.nav_btns}>
            {currentModule.map(Module => {
              let moduleOrder = Module.order;
              if (moduleOrder == slideNum)
                return (
                  <Pressable
                    style={{padding: 10}}
                    onPress={() => setslideNum(moduleOrder)}
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
                  onPress={() => setslideNum(moduleOrder)}
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

const Slides = ({slideNum, currentModule, data, setShowQuiz}) => {
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
          {slideNum +
            ' : ' +
            currentModule[slideNum - 1 >= 0 ? slideNum - 1 : 0]?.title}
        </Text>
        <Pressable>
          <Text style={styles.slide_item_details}>VOIR DETAILS</Text>
        </Pressable>

        {
          /*currentModule[slideNum].*/ progression === 100 && (
            <View>
              <Text style={styles.slide_item_progression}>
                You Completed this Section!
              </Text>
            </View>
          )
        }

        {
          /*currentModule[slideNum].*/ progression < 100 && (
            <View style={styles.progression_bar_bg} key="progression_bar">
              <View
                style={{
                  ...styles.progression_bar,
                  width: /*currentModule[slideNum].*/ progression + '%',
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
            {
              /*currentModule[slideNum].*/ progression < 100
                ? 'CONTINUE'
                : 'REVIEW'
            }
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default Body;
