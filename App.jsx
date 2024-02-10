import { Dimensions, Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/Screens/main/Home'
import Login from './src/Screens/auth/Login'
import Register from './src/Screens/auth/Register'
import Profile from './src/Screens/profile/Profile'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const [UserName, setUserName] = useState('')

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
          initialParams={{ setUserName: setUserName }}

          options={{ title: 'Login' }}
          />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register}
                  initialParams={{ setUserName: setUserName }}
                  />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}

export default App
