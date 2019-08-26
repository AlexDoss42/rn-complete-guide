import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('')
  const [ courseGoals, setCourseGoals ] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, {key: Math.random().toString(), value: enteredGoal}])
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Add goal here' 
          style={styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        <Button 
          title='ADD'
          onPress={addGoalHandler}
        />
      </View>
      <FlatList data={courseGoals} 
        renderItem = {itemData => (
          <GoalItem title={itemData.item.value}/>
        )}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderColor: 'black', 
    borderWidth: 1, 
    width: 200
  }
});
