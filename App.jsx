import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import styles from './src/styles/styles'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Body from './src/components/Body'

const Home = () => {

 
  const [completed, setCompleted] = useState(true)
  const [pageNumber, setPageNumber] = useState(3)
  const [progression, setprogression] = useState(50)  
  return (
    <View style={styles.container}>
      <Header styles={styles} />
      <Body styles={styles} 
      pageNumber={pageNumber} setPageNumber={setPageNumber}
      progression={progression}
      />
      <Footer styles={styles} currentPage='Home'  />
    </View>
  )
}

export default Home
