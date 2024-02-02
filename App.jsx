import { Dimensions, Pressable,  Text , View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Screens/main/Home'
import Login from './src/Screens/auth/Login'
import Register from './src/Screens/auth/Register'


const App = () => {

  const [Screen, setScreen] = useState(1)
  return (
    <View >

      <Home />
    </View>
  )
}

export default App
