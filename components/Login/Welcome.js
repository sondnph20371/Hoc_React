import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
const Task = (props) => {
    const { number } = props;
    const numberText = number < 10 ? `0${number}` : number;
    const itemBg = number % 2 === 0 ? styles.even : styles.odd;
    return (
        <TouchableOpacity
            onPress={props.onDeleteTask}
        >
    
            <View style={styles.item}>
                <View style={[styles.square, itemBg]}>
                    <Text style={styles.number}>{numberText}</Text>
                </View>
                <Text style={styles.content}>{props.title} </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Task