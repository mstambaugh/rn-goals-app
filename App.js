import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentGoals =>[...currentGoals, { key: Math.random().toString()}]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals" 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item}</Text>
          </View>
        )}
      />
    </View>   
  );
}
// now using stylesheet object styling
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    width: '80%' 
  },
  listItem: {
    marginVertical: 4,
    padding: 20,
    backgroundColor: 'gold', 
    borderColor: 'black', 
    borderWidth: 1
  }
});
