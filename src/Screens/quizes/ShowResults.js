import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowResults = () => {
    const GivenAnswers = useSelector(state=>state.course.GivenAnswers)
  return (
    <View>
      {GivenAnswers.map((answer,index)=>{
        return (
            <Text key={index}>Question {index+1} : {answer.question} is {answer.userAnswer == answer.correctAnswer ? 'Correct' : 'Incorrect'} </Text>
        )
      })}
    </View>
  )
}

export default ShowResults

const styles = StyleSheet.create({})