import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/quizesStyle';


const RadioBox = ({options, selectedValue, onSelect,selected, setSelected}) => {

  const handlePress = value => {
    setSelected(value);
    onSelect && onSelect(value);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handlePress(item.value)}
      style={styles.item}>
      <View style={styles.radioContainer}>
        {selected === item.value && <View style={styles.selectedDot} />}
      </View>
      <Text style={styles.radio_label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{padding : 10}}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.value.toString()}
      />
    </View>
  );
};



export default RadioBox;
