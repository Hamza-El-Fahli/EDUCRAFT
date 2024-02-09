import React , {useState} from 'react'
import { Animated,Pressable, View, Text, TextInput, Image } from 'react-native'
import logo from "../../images/1b.png"
import styles from '../../styles/styles'
import { checkUser } from '../../Data/functions'

const Login = ({setScreen , setUserName}) => {

  const [Email, setemail] = useState('')
  const [Password, setpassword] = useState('')


  const fading = new Animated.Value(0)
  Animated.timing(fading,
    {
      toValue:1,
      useNativeDriver: true,
      duration: 100,
    }).start()
  return (
    <Animated.View style={{opacity : fading}}>
      <View style={styles.auth_container}>
      <Image 
              source={logo}
              style={styles.logo}/>
              <Text style={styles.login}>Login</Text>
                <Text style={styles.loginLabel}>
                  Email :
                </Text>
                <TextInput
                  style={styles.inputEmail}
                  placeholder='email@email.com'
                  value={Email}
                  onChangeText={(text) => { setemail(text) }}

                />
                <Text style={styles.loginLabel}>
                  Password :
                </Text>
                <TextInput
                  style={styles.inputPassword}
                  placeholder='Password'
                  secureTextEntry={true}
                  value={Password}
                  onChangeText={(text) => { setpassword(text) }}
                                  />
              <Text style={styles.loginForgotPassword}>Forgot your password ? </Text>
      </View>
      <Pressable 
          onPress={()=>checkUser(Email,Password,setUserName,setScreen)}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>LOGIN TO EDUCRAFT</Text>
      </Pressable>

          <Pressable
                onPress={()=>{setScreen(2)}}
                >
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
    </Animated.View>
  )
}









export default Login
