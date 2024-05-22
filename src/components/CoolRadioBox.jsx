import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from '../styles/quizesStyle.js';






export const CoolRadioBox = ({Options , selectedOption, setSelectedOption}) => {
  
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => setSelectedOption(value)}
        value={selectedOption}
      >
        {Options.map((option, index)=>{
          return  <View key={index} style={{ flexDirection: 'row', alignItems: 'center' , width:'80%' }}>
          <RadioButton.Android value={option} color="#AAAAAA" />
          <Text style={styles.QuizText}>{option}</Text>
        </View>
        })}
       
      </RadioButton.Group>
    </View>
  );
};

