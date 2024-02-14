import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';

const RadioBox = ({options, selectedValue, onSelect}) => {
  const [selected, setSelected] = useState(selectedValue || null);

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
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.value.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
});

export default RadioBox;
