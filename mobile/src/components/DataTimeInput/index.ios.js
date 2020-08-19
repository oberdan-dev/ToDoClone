import React, { useState } from 'react'
import {
    TouchableOpacity,
    Image,
    DatePickerIOS
} from 'react-native'

import styles from './styles';

import calendarIcon from '../../assets/calendar.png';
import clockIcon from '../../assets/clock.png';

export default function DataTimeInputIOS({ type }) {
    const [dateTime, setDateTime] = useState(new Date);

    return (
        <TouchableOpacity style={styles.input}>
            <DatePickerIOS
                date={dateTime}
                mode={type}
                minimumDate={new Date}
                onDateChange={setDateTime}
            />

            <Image
                style={styles.textInputIcon}
                source={type == 'date' ? calendarIcon : clockIcon} />
        </TouchableOpacity>
    )
}
