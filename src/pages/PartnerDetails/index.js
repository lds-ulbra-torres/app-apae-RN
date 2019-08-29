import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native';

import styles from './styles';

export default function PartnerDetails({ navigation }) {
    const id  = navigation.getParam('id');
    const partner = useState({});

    useEffect(() => {
        
    })

    return (
        <SafeAreaView style={ styles.container }>
            <Text>{id}</Text>
        </SafeAreaView>
    );
}
