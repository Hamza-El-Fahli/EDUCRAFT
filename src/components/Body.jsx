import {Animated, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/styles';
import { useDispatch, useSelector} from 'react-redux';
import { setSelectedModule } from '../store/courseSlice';
import { UseDispatch } from 'react-redux';
const Body = ({setShowQuiz}) => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username);
  const userModules= useSelector(state=> state.course.module)
  const selectedModule = useSelector(state => state.course.selectedModule)
  
  return (
    <View style={styles.body}>
      <View style={styles.welcom}>
        <Text style={styles.welcom1}>Hello, {username}</Text>
        <Text style={styles.welcom2}>Welcome back to your course</Text>
      </View>

      <Slides setShowQuiz={setShowQuiz} />

      <View style={styles.nav_btns}>
        {userModules.map(oneChapter => {
          let moduleOrder = oneChapter.order;
          if (moduleOrder == selectedModule+1)
            return (
              <Pressable style={{padding: 10}} key={oneChapter.id}>
                <Text style={{...styles.nav_btn, ...styles.nav_btn_selected}}>
                  .
                </Text>
              </Pressable>
            );
          return (
            <Pressable style={{padding: 10}} onPress={() => {dispatch(setSelectedModule(oneChapter.order-1))}} key={oneChapter.id}>
              <Text style={styles.nav_btn}>.</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const Slides = ({setShowQuiz}) => {

  const userModules= useSelector(state=> state.course.module)
  const selectedModule = useSelector(state => state.course.selectedModule)

  ////////////////////////////////
  const progression = 100;
  ////////////////////////////
  return (
    <View style={{...styles.slide}}>
      <View style={{...styles.slide_item}}>
        <Text style={styles.slide_item_title}>{selectedModule+1 + ' : '+userModules[selectedModule]?.title}</Text>
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
          onPress={() => {
            setShowQuiz(true);
          }}
          style={styles.slide_item_btn_grp}>
          <Text style={styles.slide_item_btn}>
            {
              /*currentModule[selectedModule].*/ progression < 100
                ? 'CONTINUE'
                : 'REVIEW'
            }
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const data = {
  id: 0,
  title: 'Section 1 : Network Fundamentals',
  progression: 100,
  quizUnits: [
    {id: 0, title: 'Quiz 1', task: 5, completed: 5},
    {id: 1, title: 'Quiz 2', task: 5, completed: 2},
    {id: 2, title: 'Quiz 3', task: 5, completed: 0},
    {id: 3, title: 'Quiz 4', task: 5, completed: 0},
    {id: 4, title: 'Quiz 5', task: 5, completed: 0},
  ],
};

export default Body;
