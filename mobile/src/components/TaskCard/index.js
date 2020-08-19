import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

// ICONES
import defaultIcon from '../../assets/default.png';

export default function TaskCard({done}) {
    return (
        <TouchableOpacity style={[styles.card, done && styles.cardDone]}>
            <View style={styles.cardLeft}>
                <Image source={defaultIcon} style={styles.typeActive} />
                <Text style={styles.cardTitle}>Fazer Relatório</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>17/12/2020</Text>
                <Text style={styles.cardTime}>16:00</Text>
            </View>
        </TouchableOpacity>
    )
}