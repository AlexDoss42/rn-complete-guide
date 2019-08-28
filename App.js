import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {
  
  const [ courseGoals, setCourseGoals ] = useState([])
  const [ isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), value: goalTitle}])
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>
      <Button 
        title='Add New Goal'
        onPress={() => setIsAddMode(true)}
      />
      <View>
        <GoalInput  
          addGoalHandler={addGoalHandler}
          visiable={isAddMode}
        />
      </View>
      <FlatList 
        KeyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem = {itemData => (
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
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
