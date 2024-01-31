import {  Text, View } from 'react-native'
import React from 'react'
import Graph from './Graph'

const Statistics = ({styles}) => {
  const data = [
    {logo : '🔥', num : '0' , banner : 'Day streak'},
    {logo : '🔥', num : '0' , banner : 'Total XP'},
    {logo : '🔥', num : '1' , banner : 'League'},
    {logo : '🔥', num : '0' , banner : 'Top 3 finishers'},
  ];


  
  return (
    <View>
      <Text style={styles.statistics}>Statistics</Text>
      <Graph styles={styles} data={data} />
    </View>
  )
}

export default Statistics

