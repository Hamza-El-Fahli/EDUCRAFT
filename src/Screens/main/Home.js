import {Dimensions, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/styles';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Quiz from '../../components/Quiz';
import Data from '../..//Data/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

// Function to remove an item from AsyncStorage
const removeItemFromStorage = async key => {
  try {
    // Remove item from AsyncStorage based on the provided key
    await AsyncStorage.removeItem(key);
    console.log(`Item with key '${key}' removed from AsyncStorage.`);
  } catch (error) {
    console.error(
      `Error removing item with key '${key}' from AsyncStorage:`,
      error,
    );
  }
};

// Example usage: Remove an item with key 'modules' from AsyncStorage

const Home = ({navigation}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [Chapters, setChapters] = useState([]);

  const modules = useSelector(state => state.course.module);
  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {!showQuiz ? (
        <Body styles={styles} setShowQuiz={setShowQuiz} Data={Data} />
      ) : (
        <Quiz
          ModuleId={modules.order}
          setShowQuiz={setShowQuiz}
          Data={Data}
          Chapters={Chapters}
          setChapters={setChapters}
        />
      )}
      <Footer navigation={navigation} styles={styles} currentPage="Home" />
    </View>
  );
};

export default Home;
