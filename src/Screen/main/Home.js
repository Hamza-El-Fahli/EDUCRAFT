import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Styles/styles'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import Body from '../../component/Body'

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
      <Footer styles={styles} currentPage='home'  />
    </View>
  )
}

export default Home
