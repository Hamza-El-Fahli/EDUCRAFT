import {StyleSheet, Dimensions} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Dark.bg,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  quiz_header: {
    color: Colors.Dark.white,
    fontSize: 30,
    textAlign: 'center',
  },
  question_label: {
    color: Colors.Dark.white,
    fontSize: 30,
  },
  question_content: {
    color: Colors.Dark.white,
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  radio_label: {
    color: '#fff',
    marginLeft: 10,
  },
  showResult: {
    color: Colors.Dark.white,
    padding: 20,
    backgroundColor: Colors.Dark.blue,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default styles;

/* Rectangle 21  */
