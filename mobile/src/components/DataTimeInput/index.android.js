import React, { useState } from 'react';
import {
    TouchableOpacity,
    Image,
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid,
} from 'react-native';

import styles from './styles';

import calendarIcon from '../../assets/calendar.png';
import clockIcon from '../../assets/clock.png';

export default function DateTimeInputAndroid({ type }){
    const [dateTime, setDateTime] = useState();

    async function selectDateOrHour(){
        if(type == 'date'){
            const {action, year, month, day} = await DatePickerAndroid.open({
                mode: 'calendar'
            });

            if(action == DatePickerAndroid.dateSetAction)
                setDateTime(`${day} - ${month} - ${year}`);
        } else {
            const { action, hour, minute} = await TimePickerAndroid.open({
                is24Hour: true
            });

            if(action !== TimePickerAndroid.dismissedAction)
            setDateTime(`${hour}:${minute}`);
        }
    }

    return(
        <TouchableOpacity onPress={selectDateOrHour}>
            <TextInput 
                style={styles.input} 
                placeholder={type == 'date' 
                    ? 'Clique aqui para definir a data...' 
                    : 'Clique aqui para definir a hora...'}
                editable={false}
                value={dateTime}
            />
            <Image 
                style={styles.textInputIcon}
                source={type == 'date' ? calendarIcon : clockIcon}/>
        </TouchableOpacity>
    )
}