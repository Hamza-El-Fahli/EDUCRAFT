import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/styles'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Body from '../../components/Body'
import Quiz from '../../components/Quiz'
import Data from '../..//Data/Data'


const Home = ({setScreen,UserName}) => {

 
  const [showQuiz, setShowQuiz] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [CCNA, setCCNA] = useState(1)
  return (
    <View style={styles.container}>
      <Header styles={styles} setCCNA={setCCNA} CCNA={CCNA} />
      {
        !showQuiz ? 
        <Body styles={styles} UserName={UserName}
      pageNumber={pageNumber} setPageNumber={setPageNumber}
      setShowQuiz={setShowQuiz}  CCNA={CCNA} Data={Data}
      /> :
      <Quiz pageNumber={pageNumber} setShowQuiz={setShowQuiz} CCNA={CCNA} Data={Data} />
      }
      <Footer setScreen={setScreen} styles={styles} currentPage='Home'  />
    </View>
  )
}

export default Home
