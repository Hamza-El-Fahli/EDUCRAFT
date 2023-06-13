import { Dimensions, StyleSheet } from "react-native";
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
      alignItems : "center",
      padding : 20,
      height : '10%',
    },
    strike : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      alignItems : 'center'
    },
    strike_svg : {
      marginRight : 5,
    },
    strike_num : {
      marginLeft : 5,
      fontSize : Dimensions.get("window").width * 0.04,
      color : Colors.Dark.gray
    },
    course : {
      backgroundColor : Colors.Dark.blue,
      borderRadius : 10, 
      height : Dimensions.get("window").height * 0.05,
      width : Dimensions.get("window").width * 0.2,
      color: Colors.Dark.gray,
      fontSize : Dimensions.get("window").width * 0.04,
      textAlign : 'center',
      textAlignVertical : 'center',

      fontWeight : 'bold' ,
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
      marginLeft : '15%', 
    },
    welcom1 : {
      color : Colors.Dark.white,
      fontSize: Dimensions.get("window").width * 0.1,
      fontWeight: 'bold',
    },
    welcom2 : {
      color : Colors.Dark.white,
      fontSize: Dimensions.get("window").width * 0.055,
      fontWeight: 'bold',
    },

    slide: {
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : '60%',
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
      fontSize: Dimensions.get("window").width * 0.06,
      fontWeight: 'bold',
      marginBottom : 30,

    }
    ,slide_item_details:{
      textAlign : 'center',

      color : Colors.Dark.lightGray,
      fontSize: Dimensions.get("window").width * 0.04,
      fontWeight: 'bold',
      margin : 20,
    }
    ,slide_item_progression : {
      textAlign : 'center',
      justifyContent : 'center',
      color : Colors.Dark.lightGray,
      fontSize: Dimensions.get("window").width * 0.06,
      fontWeight: 'bold',
    },
    slide_item_btn : {
      padding : 15,
      textAlign : 'center',
      backgroundColor : Colors.Dark.gray,
      color : Colors.Dark.bg ,
      fontWeight : 'bold',
      fontSize : Dimensions.get("window").width * 0.04,
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
      backgroundColor : Colors.Dark.blue,

    },
    footer_title : {
      color : Colors.Dark.white,
      backgroundColor : Colors.Dark.bg,
      height : "70%",
      textAlignVertical : 'center',
      width : 130,
      textAlign : 'center',
      fontSize : Dimensions.get("window").width * 0.05,
      fontWeight : 'bold',
      borderRadius : 10,
    }
  })


  export default styles




  