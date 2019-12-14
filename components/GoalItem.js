import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {

  return (
    <TouchableOpacity activeOpacity= {0.8} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem} on >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginVertical: 4,
    backgroundColor: 'gold',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;
