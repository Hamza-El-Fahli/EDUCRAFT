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
    backgroundColor : Colors.Dark.gray,
    color : Colors.Dark.blue ,
    fontWeight : 'bold',
    fontSize : 30,
  },
  FooterBTN_Text_disabled :{
    backgroundColor : Colors.Dark.lightGray,
  },
  FooterBTN_Text_enabled :{

    backgroundColor : Colors.Dark.gray,
  },
  FooterBTN_Text_clicked :{

    backgroundColor : Colors.Dark.white,
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
  },










  ////////////////////////// lessons
  Lessons_Header:{
      // position: 'absolute',
      width: '100%',
      borderWidth: 2,
      height: 50,
      padding: 5,
      flexDirection: 'row',
      gap: 10,
      backgroundColor: Colors.Dark.bg,
      // zIndex: 5

    
  },
  Lessons_Header_goBack : {
    borderWidth: 1,
    width: '20%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Dark.blue
  },
  Lessons_Header_goBack_text : {
    color: Colors.Dark.lightGray
  },
  Lessons_Header_Title :{
    borderWidth: 1,
    width: '70%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Lessons_images :{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  Lessons_pic_container :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderWidth: 1
  },
  Lessons_pagination :{
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 3,
    paddingLeft: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 6,
    borderBottomLeftRadius: 8,
  },
});

export default styles;

/* Rectangle 21  */
