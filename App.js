import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 60}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput 
          placeholder='Add goal here' 
          style={{borderColor: 'black', borderWidth: 1, width: 200}}
        />
        <Button title='ADD'/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
