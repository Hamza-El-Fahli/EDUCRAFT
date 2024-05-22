import {Pressable, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from './../images/svg/Logo';
import Flame from './../images/svg/Flame';
import styles from '../styles/styles';
import Colors from '../styles/colors';
const configIcon = require('./../images/svg/configIcon.png');

import {setCourse} from '../store/courseSlice';
import {useDispatch, useSelector} from 'react-redux';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { Next_Courses } from '../GlobalConfig';
import { useNavigation } from '@react-navigation/native';

const Header = ({screen}) => {
  const navigation = useNavigation()
  const [Courses, setCourses] = useState([])
  const dispatch = useDispatch();
  const currrentPage = useRoute()
  const SelectedCourse = useSelector(state => state.course.course);
  const [drop, setdrop] = useState(false);

useEffect(()=>{
    axios.get(`${Next_Courses}`)
    .then((res)=>{
      setCourses(res.data)
      dispatch(setCourse(res.data[0]._id));

    })
    .catch((error)=>{
      console.log('no courses fetched from next ',error)
    })
},[])

  return (
    <View style={styles.header}>
      <Pressable
        style={{display: screen === 'Profile' ? 'none' : 'flex'}}
        onPress={() => {
          setdrop(!drop)
        navigation.navigate('Home');
        }}> 
        <Text style={styles.course}>{Courses.find((course)=>course._id == SelectedCourse)?.course_name}</Text>
      </Pressable>

      <View style={{...styles.dropDown, display: drop ? 'flex' : 'none'}}>
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 50,
            borderLeftColor: 'transparent',
            borderRightWidth: 50,
            borderRightColor: 'transparent',
            borderBottomColor: Colors.Dark.blue,
            borderBottomWidth: 100,
            position: 'absolute',
            top: -25,
            left: 0,
          }}
        />

        {Courses.map((course,index) => {
if(course._id == SelectedCourse ) return
          return (
            <Pressable
              key={index}
              onPress={() => {
                dispatch(setCourse(course._id));
                setdrop(!drop);
              }}>
              <Text style={styles.dropDown_item}>{course.course_name}</Text>
            </Pressable>
          );
        })}
      </View>

      <Logo style={{margin: 10}} />
      {screen !== 'Profile' ? (
        <View style={styles.strike}>
          <Flame style={styles.strike_svg} />
          <Text style={styles.strike_num}>0</Text>
        </View>
      ) : (
        <Pressable
          style={styles.strike}
          onPress={() => navigation.navigate('Login')}>
          <Image style={{height: 30, width: 30}} source={configIcon} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
