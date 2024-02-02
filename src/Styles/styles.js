import { Dimensions, StyleSheet } from "react-native";
import Colors from './colors'







const styles = StyleSheet.create({
  auth_container:{
    paddingLeft : 30,
    paddingRight : 30,
  },
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
      marginBottom : 60,
    },
    inputEmail : {
      width : '80%',
      marginBottom : 10,
      height : 45,
      fontSize : 20,
      borderBottomWidth : 1,
      borderBottomColor : '#1F233A'
    },
    inputPassword : {
      width : '80%',
      marginBottom : 10,
      height : 45,
      fontSize : 20,
      borderBottomWidth : 1,
      borderBottomColor : '#1F233A'
    },
    loginLabel : {
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
      width : 18,
      height : 18,
      objectFit : 'cover',
      borderWidth : 5,
      borderColor : 'white'
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
      alignItems : 'center',
      marginTop : '60%',
      overflow : 'scroll',
      flexDirection : 'row',
    },
    slide_item:{
      width : '80%',
      padding : 20,
      backgroundColor : Colors.Dark.blue,
      borderRadius : 20,
      height : .35 *Dimensions.get("window").height,
      marginLeft : .1 *Dimensions.get("window").width,
      marginRight : .1 *Dimensions.get("window").width,
      justifyContent : 'center',
      alignItems : 'center',
      position : 'relative',
    },
    slide_item_title : {
      textAlign : 'center',
      color : Colors.Dark.gray,
      fontSize: Dimensions.get("window").width * 0.06,
      fontWeight: 'bold',
      position : 'absolute',
      top : 20,
    }
    ,slide_item_details:{
      textAlign : 'center',
      marginBottom : 10,
      color : Colors.Dark.lightGray,
      fontSize: Dimensions.get("window").width * 0.04,
      fontWeight: 'bold',
    }
    ,slide_item_progression : {
      textAlign : 'center',
      justifyContent : 'center',
      color : Colors.Dark.lightGray,
      fontSize: Dimensions.get("window").width * 0.06,
      fontWeight: 'bold',
    },





    slide_item_btn_grp : {
      width : '100%',
      position : 'absolute',
      bottom : 20,
    },
    slide_item_btn : {
      padding : 10,
      textAlign : 'center',
      backgroundColor : Colors.Dark.gray,
      color : Colors.Dark.bg ,
      fontWeight : 'bold',
      fontSize : Dimensions.get("window").width * 0.04,
      borderRadius : 10,
    },
    progression_bar_bg:{
      backgroundColor : Colors.Dark.lightGray,
      height: 20,
      width :  Dimensions.get("window").width * 0.6 ,
      alignSelf : 'center',
      borderRadius : 20,
      display : 'flex',
      position : 'relative',
    },
    progression_bar:{
      backgroundColor : Colors.Dark.gray,
      height: 20,
      width : '0%' ,
      alignSelf : 'center',
      borderRadius : 20,
      position : 'absolute',
      left : 0,
    },
    nav_btns : {
      margin : 15 ,
      flexDirection : 'row',
      justifyContent : 'space-evenly',
    },
    nav_btn : {
      borderWidth : 3 ,
      height : 15 ,
      width : 15 ,
      borderColor : 'gray',
      borderRadius : 20,
      backgroundColor : 'gray',
      
    }
    ,nav_btn_selected:{
      
      borderColor : '#fff',
      borderRadius : 20,
      backgroundColor : '#fff'
    }
    /*                        */
    /*                        */
    /*         Footer         */
    /*                        */
    /*                        */
    ,footer  : {
      height : '10%',
      width : '100%',
      flexDirection : 'row',
      justifyContent : 'space-evenly',
      alignItems : 'center',
      backgroundColor : Colors.Dark.blue,
      position : 'absolute',
      bottom : 0
    },
    footer_icon : {
      backgroundColor : Colors.Dark.bg,
      width : 60,
      height : 60,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
    },
    footer_selected_icon :{
      backgroundColor : Colors.Dark.lightGray,
      width : 60,
      height : 60,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
    },
    /*                        */
    /*                        */
    /*         Chart          */
    /*                        */
    /*                        */

    Chart : {
      height : '20%',
      position : 'relative',
      marginTop : '5%',
    },
    ChartLeft : {
      position : 'absolute',
      height : '100%',
      width : '60%',
      left: 0,
      padding : 20,
      paddingTop: '15%'
    },
  ChartRight : {
    position : 'absolute',
    height : '100%',
    width : '40%',
    right: 0,
    justifyContent : 'center',
    alignItems : 'center',
  },
  ChartRight_logo : {
    backgroundColor : Colors.Dark.gray,
    color : Colors.Dark.bg,
    height : '60%',
    aspectRatio : '1',
    borderRadius : 100,
    textAlign : 'center',
    textAlignVertical : 'center',
    fontSize :  Dimensions.get("window").width * 0.14,
    fontWeight : 'bold'
  },
  ChartRight_logo_edit : {
    position : 'absolute',
    top : '20%',
    right : '20%',
  },




  ChartLeft_title:{
    fontSize :  Dimensions.get("window").width * 0.06,
    color : Colors.Dark.white,
    fontWeight : 'bold',
  },

  ChartLeft_data:{
    marginLeft : '10%',
  },


  ChartLeft_data_year:{
    fontSize :  Dimensions.get("window").width * 0.04,
    color : Colors.Dark.lightGray,
    fontWeight : 'bold',
    marginTop : '3%',
  },


  ChartLeft_data_specialite:{
    fontSize :  Dimensions.get("window").width * 0.04,
    color : Colors.Dark.lightGray,
    fontWeight : 'bold',
    marginTop : '3%',

  },





  hr:{
    position : 'fixed',
    bottom : 0,
    borderBottomWidth : 3,
    borderBottomColor : Colors.Dark.lightGray,
    width : '90%',
    alignSelf : 'center',
    borderRadius : 10,
  },

  statistics:{
    fontSize :  Dimensions.get("window").width * 0.06,
    color : Colors.Dark.white,
    fontWeight : 'bold',
    padding : '5%',
  },


  statistics_graphs:{
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'space-evenly',

  },
  statistics_graphs_graph :{
    width : '40%',
    flexDirection : 'row',
    borderWidth : 2,
    borderColor : Colors.Dark.lightGray,
    padding : '3%',
    paddingLeft : '1%',
    marginBottom : '5%',
    borderRadius : 20

  },
  statistics_graphs_graph_logo:{
    margin : '5%',
  },
  statistics_graphs_graph_banner:{
  },
  statistics_graphs_graph_banner_num:{
    fontSize :  Dimensions.get("window").width * 0.05,
    color : Colors.Dark.lightGray,
    fontWeight : '800',
  },
  statistics_graphs_graph_banner_text:{
    fontSize :  Dimensions.get("window").width * 0.035,
    color : Colors.Dark.lightGray,
    fontWeight : 'bold',
  },







})


  export default styles



  /* Rectangle 21  */





  