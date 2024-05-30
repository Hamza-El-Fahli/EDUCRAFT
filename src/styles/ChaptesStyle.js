import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Dark.bg,
    height: '100%',
    width: '100%',
  },
  module: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Dark.blue,
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  module_title: {
    fontSize: 25,
    color: Colors.Dark.white,
    fontWeight: 'bold',
    textAlign:'center'
  },
  scroll: {
    backgroundColor: Colors.Dark.bg,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  chapter: {
    backgroundColor: Colors.Dark.blue,
    width: '100%',
    borderRadius: 20,
    borderLeftWidth: 2,
    borderColor: Colors.Dark.lightBlue,
    borderRightWidth: 2,
    
  },
  chapter_title: {
    // height: Dimensions.get('window').height * 0.2,
    flexDirection: 'row',
    padding: 20,
  },
  chapter_title_right: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chapter_title_left: {
    flexGrow: 1,
  },
  chapter_title_left1: {
    height: 50,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.Dark.white,
  },
  chapter_title_left2: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: Dimensions.get('window').height * 0.3,
    color: Colors.Dark.white,
  },
  quiz: {
    backgroundColor: Colors.Dark.bg,
    width: '100%',
    height: 100,
    alignItems: 'center',
    padding: 10,
  },
});

export default styles;

/* Rectangle 21  */
