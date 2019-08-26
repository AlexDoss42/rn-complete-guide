import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Add goal here' 
          style={styles.input}
          onChangeText = {props.goalInputHandler}
          value = {props.enteredGoal}
        />
        <Button 
          title='ADD'
          onPress={props.addGoalHandler}
        />
      </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
