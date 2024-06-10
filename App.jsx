import React from 'react';
import Home from './src/Screens/main/Home';
// import Register from './src/Screens/auth/Register';
// import Login from './src/Screens/auth/Login';
import Login from './src/Screens/auth/Login';
import Profile from './src/Screens/profile/Profile';
import Chapters from './src/Screens/chapters/Chapter';
import Quizes from './src/Screens/quizes/Quizes';
import ShowResults from './src/Screens/quizes/ShowResults';
import Lesson from './src/Screens/lesson/Lesson';
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
          {/* ▼ Login Screen ▼ */}

          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          {/* ▲ Login Screen ▲  */}

          {/* ▼ Home Screen ▼ */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          {/* ▲ Home Screen ▲  */}
          {/* ▼ Chapters Screen ▼ */}

          <Stack.Screen
            name="Chapters"
            component={Chapters}
            options={{headerShown: false}}
          />
          {/* ▲ Chapters Screen ▲  */}
          {/* ▼ Profile Screen ▼ */}
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          {/* ▲ Profile Screen ▲  */}
          {/* ▼ Quiz results Screen ▼ */}
          <Stack.Screen
            name="ShowResults"
            component={ShowResults}
            options={{headerShown: false}}
          />
          {/* ▲ Quiz results Screen ▲  */}
          {/* ▼ Quizes Screen ▼ */}
          <Stack.Screen
            name="Quizzes"
            component={Quizes}
            options={{headerShown: false}}
          />
          {/* ▲ Quizes Screen ▲  */}
          {/* ▼ Register Screen ▼ */}
          {/* <Stack.Screen
        name="Register"
        component={Register}
      /> */}
          {/* ▲ Register Screen ▲ */}

          {/* ▼ Lesosns Screen ▼ */}

          <Stack.Screen
            name="Lessons"
            component={Lesson}
            options={{headerShown: false}}
          />

          {/* ▲ Lesosns Screen ▲  */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
