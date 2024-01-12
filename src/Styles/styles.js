import { StyleSheet } from "react-native";







const styles = StyleSheet.create({
    logo : {
      marginTop :10,
      marginLeft : 'auto',
      marginRight : 'auto',
      height:84,
      width:247,
      resizeMode: 'contain', // Set the desired resizeMode
  
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


  export default styles




  