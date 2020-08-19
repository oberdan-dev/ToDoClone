import React, { useState} from 'react';
import { Platform, DatePickerAndroid} from 'react-native';

import DateTimeInputAndroid from './index.android';
import DateTimeInputIOS from './index.ios';

export default function Index() {
    return(
        Platform.OS === 'android' 
        ? 
        <DatePickerAndroid/>
        :
        <DateTimeInputIOS/>
    )
}