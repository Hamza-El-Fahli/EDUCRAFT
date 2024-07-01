import React, {useEffect, useState} from 'react';
import {
  Pressable,
  View,
  Text,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import logo from '../../images/1b.png';
import styles from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName , setUser} from '../../store/userSlice';
import axios from 'axios';

import {Next_Users, _API_URL} from '../../GlobalConfig';
import { resetCourse } from '../../store/courseSlice';
import { resetQuizzes } from '../../store/quizzesSlice';

const Login = ({navigation}) => {
  // setup states
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const dispacth = useDispatch();
  const [btnLoader, setbtnLoader] = useState(false);
  dispacth(resetCourse())
  dispacth(resetQuizzes())
  // When user clicked the login button
  const checkUserAPI = async (email, password) => {
    // if the request took more than 10 s cancel it
    const cancelTokenSource = axios.CancelToken.source();
    setbtnLoader(true);
    //  make the request
    axios
    .post(`${Next_Users}`, { email, password },
     {
      cancelToken: cancelTokenSource.token
    }
    )
    .then(response => {
      // if user found
      let userData = response.data;
      if (userData.name) {
        if(userData.profile != "user") throw Error('Not user')
        console.log(userData);
        dispacth(setUserName(userData.name));
        dispacth(setUser(userData));
        setbtnLoader(false);
        navigation.navigate('Home');
      }
    })
    .catch(error => {
      // if user not found
      setbtnLoader(false);
      if (error.response && error.response.status === 404) 
      Alert.alert('Email/Password incorrect', `${error.response.data.error}`);
      else
      Alert.alert('Check internet connexion', `you can't connect to the server`);
    });
  
  // setTimeout inside the axios.post to cancel after 2s if no response
  setTimeout(() => {
    cancelTokenSource.cancel('Request cancelled after 10 seconds');
  }, 10000);
  
  };
  return (
    <View>
      <View style={styles.auth_container}>
        {/* ▼ show title and logo image ▼ */}
        <Image source={logo} style={styles.logo} />
        <Text style={styles.login}>Login</Text>
        {/* ▲ show title and  logo image ▲ */}
        {/* ▼ show email input ▼ */}
        <Text style={styles.loginLabel}>Email :</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="email@email.com"
          value={Email}
          onChangeText={text => {
            setemail(text);
          }}
        />
        {/* ▲ show email input ▲ */}
        {/* ▼ show password input ▼ */}
        <Text style={styles.loginLabel}>Password :</Text>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={text => {
            setpassword(text);
          }}
        />
        {/* ▲ show password input ▲ */}
        {/* ▼ Forgot password ▼ */}
        <Text style={styles.loginForgotPassword}>Forgot your password ? </Text>
        {/* ▲ Forgot password ▲ */}
      </View>
      {/* ▼ the Login button ▼ */}
      <Pressable
        onPress={() => checkUserAPI(Email, Password, navigation)}
        style={styles.loginButton}>
        {btnLoader ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.loginButtonText}>LOGIN TO EDUCRAFT</Text>
          </>
        )}
      </Pressable>
      {/* ▲ the Login button ▲ */}

      {/* ▼ the Register link ▼ */}
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={styles.loginGoToRegister}>
          Don't have an account ? Register
        </Text>
      </Pressable>
      {/* ▲ the Register link ▲ */}
    </View>
  );
};

export default Login;
