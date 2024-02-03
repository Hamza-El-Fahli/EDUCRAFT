import { Animated, Text, View } from 'react-native'
import React from 'react'
import Graph from './Graph'

const Statistics = ({styles}) => {
  const data = [
    {logo : '🔥', num : '3' , banner : 'Day streak'},
    {logo : '⚡', num : '5330' , banner : 'Total XP'},
    {logo : '❄', num : 'Snowball' , banner : 'League'},
    {logo : '🥇', num : '3' , banner : 'Top 3 finishers'},
  ];

  const fading = new Animated.Value(0)
  Animated.timing(fading,
    {
      toValue:1,
      useNativeDriver: true,
      duration: 200,
    }).start()

  return (
    <Animated.View style={{opacity: fading}}>
      <Text style={styles.statistics}>Statistics</Text>
      <Graph styles={styles} data={data} />
    </Animated.View>
  )
}

export default Statistics

