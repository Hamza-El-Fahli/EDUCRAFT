import { Dimensions, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Screens/main/Home'
import Login from './src/Screens/auth/Login'
import Register from './src/Screens/auth/Register'
import Profile from './src/Screens/profile/Profile'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const [Screen, setScreen] = useState(3)
  const [UserName, setUserName] = useState('')

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Login' }}
          />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // switch (Screen) {
  //   case 1:
  //     return <Login setScreen={setScreen} setUserName={setUserName} />;
  //   case 2:
  //     return <Register setScreen={setScreen} setUserName={setUserName} />;
  //   case 3:
  //     return <Home setScreen={setScreen} UserName={UserName} />;
  //   case 4:
  //     return <Profile setScreen={setScreen} UserName={UserName} />;
  //   default:
  //     return null;
  // }
}

export default App
