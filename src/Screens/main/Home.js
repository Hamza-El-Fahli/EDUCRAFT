import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/styles'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Body from '../../components/Body'
import Quiz from '../../components/Quiz'
import Data from '../..//Data/Data'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to remove an item from AsyncStorage
const removeItemFromStorage = async (key) => {
  try {
    // Remove item from AsyncStorage based on the provided key
    await AsyncStorage.removeItem(key);
    console.log(`Item with key '${key}' removed from AsyncStorage.`);
  } catch (error) {
    console.error(`Error removing item with key '${key}' from AsyncStorage:`, error);
  }
};

// Example usage: Remove an item with key 'modules' from AsyncStorage


const Home = ({navigation,UserName}) => {
 
 
  const [showQuiz, setShowQuiz] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [Modules, setModules] = useState([])
  const [Chapters, setChapters] = useState([])

  const [CCNA, setCCNA] = useState(1)
  return (
    <View style={styles.container}>
      <Header styles={styles} setCCNA={setCCNA} CCNA={CCNA} />
      {
        !showQuiz ? 
        <Body styles={styles} UserName={UserName}
      pageNumber={pageNumber} setPageNumber={setPageNumber}
      setShowQuiz={setShowQuiz}  CCNA={CCNA} Data={Data}
      Modules={Modules} setModules={setModules}
      /> :
      <Quiz 
      ModuleId={Modules.id} pageNumber={pageNumber} 
      setShowQuiz={setShowQuiz} CCNA={CCNA} Data={Data}
      Chapters={Chapters} setChapters={setChapters}
      />
      }
      <Footer navigation={navigation} styles={styles} currentPage='Home'  />
    </View>
  )
}

export default Home
