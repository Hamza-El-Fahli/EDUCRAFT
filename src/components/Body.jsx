import {Pressable, Text, View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import React, {useState} from 'react';
import styles from '../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedModule, setChapters} from '../store/courseSlice';
import {_API_URL} from '../GlobalConfig';

const Body = ({navigation}) => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const userModules = useSelector(state => state.course.module);
  const selectedModule = useSelector(state => state.course.selectedModule);
  const [btnLoader, setbtnLoader] = useState(false);

  function getChapters() {
    const cancelTokenSource = axios.CancelToken.source();
    setbtnLoader(true);
    axios
      .get(`${_API_URL}/chapters/${userModules[selectedModule].id}`, {
        cancelToken: cancelTokenSource.token,
      }) // because stored with -1
      .then(async result => {
        const loadedChapters = await result.data;
        dispatch(setChapters(loadedChapters));
        setbtnLoader(false);
        navigation.navigate('ChaptersPage');
      })
      .catch(e => {
        console.log(
          `error in chapters ,${_API_URL}/chapters/${userModules[selectedModule].id}    ${e}`,
        );
        setbtnLoader(false);
      });
    setTimeout(() => {
      cancelTokenSource.cancel('Request cancelled after 2 seconds');
    }, 2000);
  }

  return (
    <View style={styles.body}>
      <View style={styles.welcom}>
        <Text style={styles.welcom1}>Hello, {username}</Text>
        <Text style={styles.welcom2}>Welcome back to your course</Text>
      </View>

      <Slides getChapters={getChapters} btnLoader={btnLoader} />

      <View style={styles.nav_btns}>
        {userModules.map((oneModules,index) => {
          let moduleOrder = oneModules.order;
          if (index == selectedModule)
            return (
              <Pressable style={{padding: 10}} key={oneModules.id}>
                <Text style={{...styles.nav_btn, ...styles.nav_btn_selected}}>
                  .
                </Text>
              </Pressable>
            );
          return (
            <Pressable
              style={{padding: 10}}
              onPress={() => {
                dispatch(setSelectedModule(index));
              }}
              key={oneModules.id}>
              <Text style={styles.nav_btn}>.</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const Slides = ({getChapters, btnLoader}) => {
  const userModules = useSelector(state => state.course.module);
  const selectedModule = useSelector(state => state.course.selectedModule);
  ////////////////////////////////
  const progression = 100;
  ////////////////////////////
  return (
    <View style={{...styles.slide}}>
      <View style={{...styles.slide_item}}>
        <Text style={styles.slide_item_title}>
          {selectedModule + 1 + ' : ' + userModules[selectedModule]?.module_name}
        </Text>
        <Pressable>
          <Text style={styles.slide_item_details}>VOIR DETAILS</Text>
        </Pressable>

        {
          /*currentModule[selectedModule].*/ progression === 100 && (
            <View>
              <Text style={styles.slide_item_progression}>
                You Completed this Section!
              </Text>
            </View>
          )
        }

        {
          /*currentModule[selectedModule].*/ progression < 100 && (
            <View style={styles.progression_bar_bg} key="progression_bar">
              <View
                style={{
                  ...styles.progression_bar,
                  width: /*currentModule[selectedModule].*/ progression + '%',
                }}
              />
            </View>
          )
        }
        <Pressable
          onPress={() => getChapters()}
          style={styles.slide_item_btn_grp}>
          <Text style={styles.slide_item_btn}>
            {btnLoader ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <>
                {
                  /*currentModule[selectedModule].*/ progression < 100
                    ? 'CONTINUE'
                    : 'REVIEW'
                }
              </>
            )}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Body;
