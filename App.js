import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';

export default function App() {
  const [ enteredGoal, setEnteredGoal ] = useState('')
  const [ courseGoals, setCourseGoals ] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal])
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
      <View>
        {courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
      </View>
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
