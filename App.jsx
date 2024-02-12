import React from 'react';
import Home from './src/Screens/main/Home';
import Login from './src/Screens/auth/Login';
// import Register from './src/Screens/auth/Register';
import Profile from './src/Screens/profile/Profile';
import Quiz from './src/Screens/quizes/Quiz';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
          {/* <Stack.Screen
            name="Register"
            component={Register}
          /> */}
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
