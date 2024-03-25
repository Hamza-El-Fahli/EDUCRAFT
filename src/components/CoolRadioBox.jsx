import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from '../styles/quizesStyle.js';






export const CoolRadioBox = ({Options , selectedOption, setSelectedOption}) => {
  const [MyOptions, setMyOptions] = useState([])
  
  useEffect(()=>{
    setMyOptions(generateOptions(Options.choices,Options.correctAnswer,4))
  },[Options])
  
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' , width:'80%' }}>
          <RadioButton.Android value={MyOptions[0]} color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[0]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' , width:'80%' }}>
          <RadioButton.Android value={MyOptions[1]} color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[1]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' , width:'80%' }}>
          <RadioButton.Android value={MyOptions[2]} color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[2]}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' , width:'80%' }}>
          <RadioButton.Android value={MyOptions[3]} color="#AAAAAA" />
          <Text style={styles.QuizText}>{MyOptions[3]}</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};


const generateOptions = (choices, correctAnswer , countOfOptions)=>{
  const resultSet = new Set() // the result of shuffeling
// console.log(choices)
  while(resultSet.size < countOfOptions){ // loop the number of options
    const randomIndex = Math.floor(Math.random()*choices.length) // generate random index
    if(resultSet.has(choices[randomIndex])) continue // skip if index already added
    resultSet.add(choices[randomIndex]) // add random item from array to results
  }
//   for (let i = resultArr.length - 1; i > 0; i--) { // shuffle randomly the selected options
//     const j = Math.floor(Math.random() * (i + 1));
//     [resultArr[i], resultArr[j]] = [resultArr[j], resultArr[i]];
// }  

if(resultSet.has(correctAnswer))  return [...resultSet] // check if correct answer exists in the result 
else{ // if the correct answer doesn't exist add it randomly
  const resultArr = [...resultSet]
  resultArr[Math.floor(Math.random()*countOfOptions)] = correctAnswer
  return resultArr
}
}
