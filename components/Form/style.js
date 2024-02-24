import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    addTask: {
        bottom: 20,
        paddingHorizontal:10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    txt: {
        height: 50,
        width: '80%',
        backgroundColor: '#BAF9F4',
        borderWidth:2,
        borderColor: 'green',
        borderRadius:20,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    iconWrapper: {
        backgroundColor: '#BAF9F4',
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: 'green',
        fontSize:35,
        fontWeight:'bold',

    }
})

export default styles