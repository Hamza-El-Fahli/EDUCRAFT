import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/styles'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Body from '../../components/Body'
import Quiz from '../../components/Quiz'


const Home = ({setScreen}) => {

 
  const [showQuiz, setShowQuiz] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  return (
    <View style={styles.container}>
      <Header styles={styles} />
      {
        showQuiz ? 
        <Body styles={styles} 
      pageNumber={pageNumber} setPageNumber={setPageNumber}
      /> :
      <Quiz />
      }
      <Footer setScreen={setScreen} styles={styles} currentPage='Home'  />
    </View>
  )
}

export default Home
