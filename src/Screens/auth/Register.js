import styles from '../../styles/styles'
import React from 'react'
import { Pressable, StyleSheet, View, Text,Box, TextInput, Button, Image } from 'react-native'
import logo from "../../images/1b.png"
const Register = ({setScreen}) => {

  return (
    <View>
      <View  style={styles.auth_container}>
              <Image 
              source={logo}
              style={styles.logo}/>
              <Text style={styles.login}>Register</Text>
              <Text style={styles.loginLabel}>
                  UserName :
                </Text>
                <TextInput
                  style={styles.inputEmail}
                  placeholder='username'
                />
                <Text style={styles.loginLabel}>
                  Email :
                </Text>
                <TextInput
                  style={styles.inputEmail}
                  placeholder='email@email.com'
                />
                <Text style={styles.loginLabel}>
                  Password :
                </Text>
                <TextInput
                  style={styles.inputPassword}
                  placeholder='Password'
                  secureTextEntry={true}
                />
      </View>
      <Pressable 
      onPress={()=>{setScreen(3)}}
      style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>CREATE AN ACCOUNT</Text>
      </Pressable>

          <Pressable
                onPress={()=>{setScreen(1)}}
                >
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
    </View>
  )
}
export default Register
