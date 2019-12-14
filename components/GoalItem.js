import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {

  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 4,
    padding: 20,
    backgroundColor: 'gold',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem;
