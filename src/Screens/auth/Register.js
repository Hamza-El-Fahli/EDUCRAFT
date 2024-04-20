import styles from '../../styles/styles';
import React, {useState} from 'react';
import {Pressable, View, Text, TextInput, Image} from 'react-native';
import logo from '../../images/1b.png';
const Register = ({navigation}) => {
  const [Email, setemail] = useState('');
  const [Password, setpassword] = useState('');

  return (
    <View>
      <View style={styles.auth_container}>
        {/* ▼ Register logo and title ▼ */}
        <Image source={logo} style={styles.logo} />
        <Text style={styles.login}>Register</Text>
        {/* ▲ Register logo and title ▲ */}

        {/* ▼ Data entry ▼ */}

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
        {/* ▲ Data entry ▲ */}
      </View>
      {/* ▼ Submit button ▼ */}
      <Pressable
        onPress={() => {
          // addUser();
        }}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>CREATE AN ACCOUNT</Text>
      </Pressable>
      {/* ▲ Submit button ▲ */}
      {/* ▼ Back to login button ▼ */}
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.loginGoToRegister}>
          Already have an account ? Login
        </Text>
      </Pressable>
      {/* ▲ Back to login button ▲ */}

      {/* 
      <Pressable onPress={()=>{
          
        }}>
            <Text >
                Navigate to Main
            </Text>
      </Pressable> */}
    </View>
  );
};
export default Register;
