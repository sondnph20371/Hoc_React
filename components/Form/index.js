import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
const Form = (props) => {

    const [task, setTask] = useState([]);
    const handleAddTask = () => {
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    };
    return (

        <View style={styles.addTask}>
            <TextInput
                value={task}
                placeholder='Your task...'
                style={styles.txt}
                onChangeText={text => setTask(text)}

            ></TextInput>
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
        // </KeyboardAvoidingView>
    )
}

export default Form