import { StyleSheet } from "react-native";
import Colors from './colors'







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
    },
    container : {
      position : 'relative',
      backgroundColor : Colors.Dark.bg,
      height : '100%',
      alignItems : 'stretch',
      
    },
  
  
    /*                       */
    /*                       */
    /*         Header        */
    /*                       */
    /*                       */
  
  
    header : {
      flexDirection : "row",
      justifyContent : 'space-between',
      padding : 20,
      alignItems : 'center',
      height : '10%',
    },
    strike : {
      flexDirection : 'row',
      justifyContent : 'space-between',
    },
    strike_svg : {
      margin : 5,
    },
    strike_num : {
      margin : 5,
    },
    course : {
      backgroundColor : Colors.Dark.blue,
      borderRadius : 10, 
      height : 37*1.33,
      width : 56*1.65,
      color: Colors.Dark.gray,
      fontSize : 15*1.33 ,
      fontWeight : 'bold' ,
      padding : 10,
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          shadowOffset: { width: 1, height: 4 },
          shadowOpacity: 0.6,
          shadowRadius: 6,
        },
        android: {
          elevation: 6,
        },
      }),
    }
  
  
    /*                        */
    /*                        */
    /*          Body          */
    /*                        */
    /*                        */
    ,body : {
      height : "80%" ,
      justifyContent : "center",
      position : 'relative',
    },
    welcom : {
      position : 'absolute',
      top : 30,
      margin : '0 ' , 
    },
    welcom1 : {
      color : Colors.Dark.white,
      fontSize: 40*1.33,
      fontWeight: 'bold',
    },
    welcom2 : {
      color : Colors.Dark.white,
      fontSize: 24*1.33,
      fontWeight: 'bold',
    },

    slide: {
      justifyContent : 'center',
      alignItems : 'center',

    },
    slide_item:{
      width : '80%',
      padding : 20,
      backgroundColor : Colors.Dark.blue,
      borderRadius : 20,
    },
    slide_item_title : {
      textAlign : 'center',
      color : Colors.Dark.gray,
      fontSize: 24*1.33,
      fontWeight: 'bold',
      marginBottom : 30,

    }
    ,slide_item_details:{
      textAlign : 'center',

      color : Colors.Dark.lightGray,
      fontSize: 15*1.33,
      fontWeight: 'bold',
      margin : 20,
    }
    ,slide_item_progression : {
      textAlign : 'center',
      justifyContent : 'center',
      color : Colors.Dark.lightGray,
      fontSize: 24*1.33,
      fontWeight: 'bold',
    },
    slide_item_btn : {
      padding : 15,
      textAlign : 'center',
      backgroundColor : Colors.Dark.gray,
      fontWeight : 'bold',
      fontSize : 15*1.44,
      margin : 20,
      borderRadius : 10,
    }
    /*                        */
    /*                        */
    /*         Footer         */
    /*                        */
    /*                        */
    ,footer  : {
      height : '10%',
      width : '100%',
      justifyContent : 'center',
      alignItems : 'center',
    }
  })


  export default styles




  