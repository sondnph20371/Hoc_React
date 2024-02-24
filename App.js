import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Task from './components/Task'
import styles from './components/App.style'
import Form from './components/Form'

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa',
      [
        {
          text: 'OK',
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);

          }
        },

        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        }

      ],
      {
        cancelable: true,
        onDismiss: () => { }
      },
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textHeader}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />

    </View>
  )
};
