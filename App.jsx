import React from 'react';
import Home from './src/Screens/main/Home';
import Login from './src/Screens/auth/Login';
// import Register from './src/Screens/auth/Register';
import Profile from './src/Screens/profile/Profile';
import ChaptersPage from './src/Screens/quizes/ChaptersPage';
import Quizes from './src/Screens/quizes/Quizes';
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
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Register"
            component={Register}
          /> */}
          <Stack.Screen
            name="ChaptersPage"
            component={ChaptersPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Quizes" component={Quizes} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
