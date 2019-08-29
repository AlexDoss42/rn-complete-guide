import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [ enteredGoal, setEnteredGoal ] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Add goal here' 
          style={styles.input}
          onChangeText = {goalInputHandler}
          value = {enteredGoal}
        />
        <Button
          title="Cancel"
          color="red"
          onPress={props.onCancel}
        />
        <Button 
          title='ADD'
          onPress={addGoalHandler}
        />
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  }
});
