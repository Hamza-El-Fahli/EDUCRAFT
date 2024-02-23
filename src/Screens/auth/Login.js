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
import {setUserName} from '../../store/userSlice';
import axios from 'axios';

import {_API_URL} from '../../GlobalConfig';

const Login = ({navigation}) => {
  // setup states
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const dispacth = useDispatch();
  const [btnLoader, setbtnLoader] = useState(false);

  // When user clicked the login button
  const checkUserAPI = async (email, password) => {
    // if the request took more than 2s cancel it
    const cancelTokenSource = axios.CancelToken.source();
    setbtnLoader(true);
    //  make the request
    axios
      .get(`${_API_URL}/isuser/${email}/${password}`, {
        cancelToken: cancelTokenSource.token,
      })
      .then(response => {
        // if user found
        let userData = response.data;
        if (userData.name) {
          console.log(userData.name);
          dispacth(setUserName(userData.name));
          setbtnLoader(false);
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        // if user not found
        setbtnLoader(false);
        Alert.alert('Email/Password incorrect', `try 0 and 0`);
      });
    setTimeout(() => {
      //  if no response cancel after 2s
      cancelTokenSource.cancel('Request cancelled after 2 seconds');
    }, 2000);
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
