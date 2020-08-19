import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'
    },

    leftIcon: {
        position: 'absolute',
        left: 20,
    },

    leftIconImage: {
        height: 30,
        width: 30  
    },

    logo: {
        width: 100,
        height: 30
    },
    
    notification: {
        position: 'absolute',
        right: 20
    },

    notificationImage: {
        width: 25,
        height: 30
    },

    notificationText: {
        fontWeight: 'bold',
        color: '#EE6B26'

    },

    circle: {
        backgroundColor: '#FFF',
        width: 20,
        height: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },

});

export default styles;