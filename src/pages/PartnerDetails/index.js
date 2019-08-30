import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
    ImageBackground,
} from 'react-native';

import styles from './styles';
import { getPartnerDetails, baseURL } from '../../services/Api';

export default function PartnerDetails({ navigation }) {
    const id  = navigation.getParam('id');
    const [partner, setParter] = useState({});

    useEffect(() => {
        async function loadPartner(){
            const partner = await getPartnerDetails(id);

            setParter(partner);
        }

        loadPartner();
    }, [])

    return (
        <SafeAreaView style={ styles.container }>
            <ImageBackground style={ styles.image } source= {{ uri: `${baseURL}${partner.photo_partner}` }}>
                <Text> {partner.fantasy_name_partner} </Text>
            </ImageBackground>

            <Text>{partner.id_partner}</Text>
        </SafeAreaView>
    );
}
