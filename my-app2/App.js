import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

import Task from './component/task';
import styles from './App.style';
import Input from './component/form';
import { useState } from 'react';

export default function App() {

  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert('Alert', 'Do you want to delete ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}> 
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
        {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
        }
        </ScrollView>
      </View>
      <Input onAddTask={handleAddTask}/> 
    </View>
  );
}
//onAddTask: tên tự đặt

