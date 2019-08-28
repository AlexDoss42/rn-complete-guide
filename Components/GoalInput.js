import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [ enteredGoal, setEnteredGoal ] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visable} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Add goal here' 
          style={styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        <Button 
          title='ADD'
          onPress={props.addGoalHandler.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
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
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }
});
