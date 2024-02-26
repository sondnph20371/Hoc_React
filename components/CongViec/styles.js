import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#32c0cc',
        marginBottom: 10,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    square: {
        width: 50,
        height: 50,
       
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    even: {
        backgroundColor: 'green',
    },
    odd: {
        backgroundColor: '#f2e255',
    },
    number: {
        color: 'white',
        fontWeight: 'bold'
    },
    content: {
        width: '80%',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
})

export default styles;