import {Pressable, Text, View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styles from '../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedModule, setChapters} from '../store/courseSlice';
import {Next_Chapters, _API_URL} from '../GlobalConfig';

import { useNavigation } from '@react-navigation/native';


const Body = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const userModules = useSelector(state => state.course.module);
  const selectedModule = useSelector(state => state.course.selectedModule);
  const [btnLoader, setbtnLoader] = useState(false);
useEffect(()=>{
  dispatch(setSelectedModule(selectedModule || 0));

},[selectedModule])

  return (
    <View style={styles.body}>
      <View style={styles.welcom}>
        <Text style={styles.welcom1}>Hello, {username}</Text>
        <Text style={styles.welcom2}>Welcome back to your course</Text>
      </View>

      <Slides  btnLoader={btnLoader} />

      <View style={styles.nav_btns}>
        {userModules.map((oneModules,index) => {
          if (index == selectedModule)
            return (
              <Pressable style={{padding: 10}} key={index}>
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
              key={index}>
              <Text style={styles.nav_btn}>.</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const Slides = ({ btnLoader}) => {
  const userModules = useSelector(state => state.course.module);
  const selectedModule = useSelector(state => state.course.selectedModule);
  const navigation = useNavigation()
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
          userModules[selectedModule].progress == 100 && (
            <View>
              <Text style={styles.slide_item_progression}>
                You Completed this Section!
              </Text>
            </View>
          )
        }

        {
          userModules[selectedModule].progress < 100 && (
            <View style={styles.progression_bar_bg} key="progression_bar">
              <View
                style={{
                  ...styles.progression_bar,
                  width: userModules[selectedModule].progress + '%',
                }}
              />
            </View>
          )
        }
        <Pressable
  onPress={()=>navigation.navigate('Chapters')}
          style={styles.slide_item_btn_grp}>
          <Text style={styles.slide_item_btn}>
            {btnLoader ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <>
                {
                  userModules[selectedModule].progress < 100
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
