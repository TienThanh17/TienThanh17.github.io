import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style';

const Input = (props) => {

  const handleAddTask = () => {
    if(task.length === 0)
    {
      alert("Please typing your task !")
      return false;
    }
    props.onAddTask(task);
    setTask('');
    Keyboard.dismiss();
  }

  const [task, setTask] = useState('');

  return ( 
    <View style={styles.addTask}>
      <TextInput 
      value={task}
      placeholder='Texting your task here' 
      onChangeText={(text) => setTask(text)}
      style={styles.input} /> 
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Input;