import styles from '../../styles/styles';
import React, {useState} from 'react';
import {Pressable, Animated, View, Text, TextInput, Image} from 'react-native';
import logo from '../../images/1b.png';
const Register = ({navigation}) => {
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');

  // const addUser = async ()=>{
  //   try {
  //     const response = await fetch(`http://192.168.1.9:3000/adduser/${Email}/${Password}/${UserName}`);

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json();

  //     console.log('new User added  ', data);
  //     if(data){
  //       navigation.navigate('Home')
  //       }

  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  //   }

  const fading = new Animated.Value(0);
  Animated.timing(fading, {
    toValue: 1,
    useNativeDriver: true,
    duration: 100,
  }).start();
  return (
    <Animated.View style={{opacity: fading}}>
      <View style={styles.auth_container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.login}>Register</Text>
        <Text style={styles.loginLabel}>UserName :</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="username"
          value={UserName}
          onChangeText={text => setLocalUserName(text)}
        />
        <Text style={styles.loginLabel}>Email :</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="email@email.com"
          value={Email}
          onChangeText={text => setemail(text)}
        />
        <Text style={styles.loginLabel}>Password :</Text>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={true}
          value={Password}
          onChangeText={text => setpassword(text)}
        />
      </View>
      <Pressable
        onPress={() => {
          addUser();
        }}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>CREATE AN ACCOUNT</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.loginGoToRegister}>
          Already have an account ? Login
        </Text>
      </Pressable>

      {/* 
      <Pressable onPress={()=>{
          
        }}>
            <Text >
                Navigate to Main
            </Text>
      </Pressable> */}
    </Animated.View>
  );
};
export default Register;
