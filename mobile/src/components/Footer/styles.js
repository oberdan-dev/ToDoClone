import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#20295F',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',
        alignItems: 'center',
    },

    button: {
        position: 'relative',
        top: -40
    },

    image: {
        height: 80,
        width: 80  
    },

    text: {
        position:'relative',
        top: -35,
        color: '#FFF'
    }

});

export default styles;