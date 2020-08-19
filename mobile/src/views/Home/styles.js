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

    content: {
        width: '100%',
        marginTop: 30
    },
    
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295F',
        alignItems: 'center'
    },

    titleText: {
        borderColor: '#20295F',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    }

});

export default styles;