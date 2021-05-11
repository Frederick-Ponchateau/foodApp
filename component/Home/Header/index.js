import React , {useState} from 'react';
import { View, Text,Image } from 'react-native';
import Styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

const Header = () => {
    const [city, setCity] = useState('LoS Angeles');
    return (
        <View style={Styles.bodyHeader}>
        {/* left */}
        <View style={Styles.leftHeader} >
            <Icon name="bars" size={24} color="black" />
        </View>
        {/* center */}
        <View style={Styles.centerHeader}>
            <Picker
                selectedValue={city}
                onValueChange={(itemValue, itemIndex) =>
                    setCity(itemValue)
                }>
                 <Picker.Item
                    label='Los Angeles'
                    value= "Los Angeles"
                    style={Styles.pickerItem}
                />
                <Picker.Item
                    label='Martinique'
                    value= "Martinique"
                    style={Styles.pickerItem}
                />
                <Picker.Item
                    label='France'
                    value= "France"
                    style={Styles.pickerItem}
                />
            </Picker>
           
        </View>

        {/* right */}
        <View style={Styles.rightHeader}>
            <Icon name="search" size={24} color="black" />

        </View>
        
    </View>
    )
}

export default Header
