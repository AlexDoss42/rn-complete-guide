import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

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
      <View>
        <GoalInput 
          goalInputHandler={goalInputHandler} 
          addGoalHandler={addGoalHandler}
          enteredGoal={enteredGoal}
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
  }
});
