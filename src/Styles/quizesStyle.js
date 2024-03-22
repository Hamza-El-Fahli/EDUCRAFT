import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Dark.bg,
    height: '100%',
    width: '100%',
    padding: 20,
    paddingTop: 30,
    position : 'relative',
  },
  Body:{}
  ,
  QuizHeader:{
    left:0,
    right:0,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom: 30,

  },
  x:{
    fontSize : 30,
    color : Colors.Dark.gray
  },
  QuizHeader_progressBG:{
    height : 20,
    width : '70%',
    margin : 'auto',
    backgroundColor: Colors.Dark.lightGray,
    borderRadius : 30

  },
  QuizHeader_progressFG:{
    height : '100%',
    backgroundColor: Colors.Dark.gray,
    borderRadius : 30,
    
  },
  QuizText:{
    color:Colors.Dark.gray,
    fontSize: 25,
    marginBottom: 10,
  },
  Footer :{
    position : 'absolute',
    bottom : 0,
    left:0,
    right:0,
    height : '30%',
    zIndex : 1,
    flexDirection : 'row'
  },
  FooterBTN :{
    position : 'absolute',
    bottom : '20%',
    left: '10%',
    right : '10%',
    zIndex:9
  },
  FooterBTN_Text :{
    padding : 10,
    borderRadius : 10,
    textAlign : 'center',
    backgroundColor : Colors.Dark.lightGray,
    color : Colors.Dark.blue ,
    fontWeight : 'bold',
    fontSize : 30,
  },
  CommentLabel :{
    borderColor : Colors.Dark.lightBlue ,
    borderTopWidth : 3,
    // borderLeftWidth : 1,
    // borderRightWidth : 1,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    alignSelf : 'flex-end',
    padding : 20,
    backgroundColor : Colors.Dark.blue,
    height:'100%',
    width:'100%',
    overflow : 'hidden'
  }
});

export default styles;

/* Rectangle 21  */
