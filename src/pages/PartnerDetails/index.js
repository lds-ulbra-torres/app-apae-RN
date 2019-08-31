import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
    ImageBackground,
    Image
} from 'react-native';

import styles from './styles';
import { getPartnerDetails, baseURL } from '../../services/Api';
import { Line } from '../Components';
 
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
            <Image style={ styles.image } source= {{ uri: `${baseURL}${partner.photo_partner}` }} />

            <View style={ styles.name }>
                <View style={ styles.containerFantasyName }>
                    <Text style={ styles.fantasyName }> {partner.fantasy_name_partner} </Text>
                </View>

                <View style={ styles.containerCall }>
                    <TouchableOpacity style={ styles.buttonCall }>
                        <Icon name= 'phone' size= { 35 } color= '#4caf50'/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={ styles.card }>
                <View style={ styles.payment }>
                    <Text> { partner.discount_partner } </Text> 
                </View>                
                    <Line margin= { 5 }/>
                <View style={ styles.payment }>
                    <Text> { partner.card_discount_partner} </Text> 
                </View>
                <Line margin= { 5 }/>
                <View style={ styles.payment }>
                    <Text> { partner.term_discount_partner} </Text> 
                </View>
            </View>

            <Text>{partner.id_partner}</Text>
        </SafeAreaView>
    );
}
