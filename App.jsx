import React from 'react';
import Home from './src/Screens/main/Home';
import Login from './src/Screens/auth/Login';
// import Register from './src/Screens/auth/Register';
import Profile from './src/Screens/profile/Profile';
import ChaptersPage from './src/Screens/quizes/ChaptersPage';
import Quizes from './src/Screens/quizes/Quizes';
import ShowResults from './src/Screens/quizes/ShowResults';
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
          {/* ▼▼ Login Screen ▼▼ */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          {/* ▲▲ Login Screen ▲▲  */}

          {/* ▼▼ Quizes Screen ▼▼ */}
          <Stack.Screen name="Quizes" component={Quizes} />
          {/* ▲▲ Quizes Screen ▲▲  */}
          {/* ▼▼ Chapters Screen ▼▼ */}

          <Stack.Screen
            name="ChaptersPage"
            component={ChaptersPage}
            options={{headerShown: false}}
          />
          {/* ▲▲ Chapters Screen ▲▲  */}
          {/* ▼▼ Home Screen ▼▼ */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          {/* ▲▲ Home Screen ▲▲  */}
          {/* ▼▼ Profile Screen ▼▼ */}
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          {/* ▲▲ Profile Screen ▲▲  */}
          {/* ▼▼ Quiz results Screen ▼▼ */}
          <Stack.Screen
            name="ShowResults"
            component={ShowResults}
            options={{headerShown: true}}
          />
          {/* ▲▲ Quiz results Screen ▲▲  */}
          {/* ▼▼ Register Screen ▼▼ */}
          <Stack.Screen
        name="Register"
        component={Register}
      />
          {/* ▲▲ Register Screen ▲▲ */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
