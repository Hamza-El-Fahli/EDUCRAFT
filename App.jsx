import { Dimensions, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Screens/main/Home'
import Login from './src/Screens/auth/Login'
import Register from './src/Screens/auth/Register'
import Profile from './src/Screens/profile/Profile'


const App = () => {

  const [Screen, setScreen] = useState(1)
  switch (Screen) {
    case 1:
      return <Login />;
    case 2:
      return <Register />;
    case 3:
      return <Home />;
    case 4:
      return <Profile />;
    default:
      return null;
  }
}

export default App
