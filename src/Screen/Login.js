
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View, Text,Box, TextInput, Button } from 'react-native'

const Home = () => {
  const navigation = useNavigation()

  return (
    <View>
      <View >
              <Text style={styles.title}>EDUCRAFT</Text>
              <Text style={styles.login}>Login</Text>
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
              <Text style={styles.loginForgotPassword}>Forgot your password ? </Text>
      </View>
      <Pressable 
        onPress={()=> navigation.navigate("Main")}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>CREATE AN ACCOUNT</Text>
      </Pressable>

          <Pressable
           onPress={()=>{
            navigation.navigate("Register")
          }}>
              <Text style={styles.loginGoToRegister}>
                  Don't have an account ? Register
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
export default Home

const styles = StyleSheet.create({
  title : {
    textAlign: 'center',
    fontSize : 32,
    fontWeight : 'bold',
    marginTop :10,
  },
  login : {
    textAlign: 'center',
    fontSize : 32,
    fontWeight : 'bold',
    marginTop : 10,
    marginBottom : 60
  },
  inputEmail : {
    marginLeft : 30,
    width : '80%',
    marginTop : 15,
    // paddingTop : 5,
    height : 25,
    borderBottomWidth : 1,
    borderBottomColor : '#1F233A'
  },
  inputPassword : {
    marginLeft : 30,
    width : '80%',
    marginTop : 10,
    // paddingTop : 5,
    height : 25,
    borderBottomWidth : 1,
    borderBottomColor : '#1F233A'
  },
  loginLabel : {
    marginLeft : 30,
    fontSize : 24,
    marginTop : 10,
    fontWeight : 'bold'
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#1F233A',
    height: 60,
    width : 300,
    marginLeft : 'auto',
    marginRight : 'auto',
    marginTop : 80,
  },
  loginButtonText: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#E9E8F1',
  },
  loginGoToRegister : {
    marginTop:32,
    marginLeft : 'auto',
    marginRight : 'auto',

  },
  loginForgotPassword : {
        marginTop: 32,
        textAlign : 'right',
        fontSize : 13,
      marginRight : 10,
      fontWeight : 'bold'
  }
})