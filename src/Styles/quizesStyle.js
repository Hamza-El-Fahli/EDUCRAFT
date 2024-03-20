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
    borderWidth : 1,
    display : 'flex',
    alignItems : 'center',
    marginBottom: 30,

  },
  QuizHeader_progressBG:{
    height : 20,
    width : '70%',
    margin : 'auto',
    backgroundColor: Colors.Dark.gray,
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
    borderWidth : 2,
    height : '30%',
    zIndex : 1
  },
  FooterBTN :{
    padding : 10,
    textAlign : 'center',
    backgroundColor : Colors.Dark.lightGray,
    color : Colors.Dark.blue ,
    fontWeight : 'bold',
    fontSize : 30,
    borderRadius : 10,
    position : 'absolute',
    bottom : '20%',
    left: '10%',
    right : '10%'
  }
});

export default styles;

/* Rectangle 21  */
