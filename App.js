import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  return (

    // this is all done w/ inline styling so far
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput 
          placeholder="Course Goals" 
          style={{ borderColor: 'gold', borderWidth: 2, padding: 10, width: '80%' }}/>
        <Button title ="ADD" />
      </View>
      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
});
