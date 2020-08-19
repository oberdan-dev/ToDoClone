import { StyleSheet } from 'react-native'; // Só mobile 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },

    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'
    },

    filterTextInactived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#20295F',
        opacity: 0.5
    },
});

export default styles;