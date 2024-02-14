import React, {useEffect, useState} from 'react';
import {Pressable, View, Text, TextInput, Image} from 'react-native';
import logo from '../../images/1b.png';
import styles from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {setUserName} from '../../store/userSlice';
import axios from 'axios';

import { _WEB_URL} from '../../GlobalConfig';

const Login = ({navigation}) => {
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');
  const dispacth = useDispatch();

  let username = useSelector(state => state.user.username);
  const checkUserAPI = async (email, password) => {
    axios
      .get(`${_WEB_URL}/isuser/${email}/${password}`)
      .then(response => {
        let userData = response.data;
        if (userData.name) {
          dispacth(setUserName(userData.name));
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        console.log('api error ', error);
      });
  };
  return (
    <View>
      <View style={styles.auth_container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.login}>Login</Text>
        <Text style={styles.loginLabel}>Email :</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="email@email.com"
          value={Email}
          onChangeText={text => {
            setemail(text);
          }}
        />
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
        <Text style={styles.loginForgotPassword}>Forgot your password ? </Text>
      </View>
      <Pressable
        onPress={() => checkUserAPI(Email, Password, navigation)}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN TO EDUCRAFT</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={styles.loginGoToRegister}>
          Don't have an account ? Register
        </Text>
      </Pressable>

      <Pressable onPress={() => {}}>
        <Text>Navigate to Main</Text>
      </Pressable>
    </View>
  );
};

export default Login;
