import { Dimensions, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Screens/main/Home'
import Login from './src/Screens/auth/Login'
import Register from './src/Screens/auth/Register'
import Profile from './src/Screens/profile/Profile'


const App = () => {

  const [Screen, setScreen] = useState(1)
  const [UserName, setUserName] = useState('')


  switch (Screen) {
    case 1:
      return <Login setScreen={setScreen} setUserName={setUserName} />;
    case 2:
      return <Register setScreen={setScreen} setUserName={setUserName} />;
    case 3:
      return <Home setScreen={setScreen} UserName={UserName} />;
    case 4:
      return <Profile setScreen={setScreen} UserName={UserName} />;
    default:
      return null;
  }
}

export default App
