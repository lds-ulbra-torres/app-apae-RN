import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    Platform,
    Linking
} from 'react-native';

import styles from './styles';
import { getPartnerDetails, baseURL } from '../../services/Api';
import { Line } from '../Components';
 
export default function PartnerDetails({ navigation }) {
    const id  = navigation.getParam('id');
    const [partner, setParter] = useState({});

    function linkCall(phoneNumber){
        if( Platform.OS === 'android' ){
            phoneNumber = `tel:${ '${' + phoneNumber + '}' }`
        }else{
            phoneNumber = `telprompt: ${ '${' + phoneNumber + '}' }`

        }
        Linking.openURL( phoneNumber );       
    }

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
                    <TouchableOpacity style={ styles.buttonCall } onPress= { () => linkCall(partner.commercial_phone_partner) }>
                        <Icon name= 'phone' size= { 35 } color= '#4caf50'/>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <View style={ styles.cardContainer }>
                    <View style={ styles.card }>
                        <View style={ styles.row }>
                            <Icon name=  'tag' color= '#4caf50' size= { 20 } style={ styles.icon }/>
                            <Icon name=  'money' color='#4caf50' size= { 20 } style={ styles.icon }/>

                            <Text style= { styles.strong }> À vista: </Text>
                            <Text style= { styles.discount }>{ partner.discount_partner }%</Text> 
                        </View>                
                        
                        <Line margin= { 5 } color= '#bfbfbf'/>
                        
                        <View style={ styles.row }>
                            <Icon name=  'tag' color= '#4caf50' size= { 20 } style={ styles.icon }/>
                            <Icon name=  'calendar' color='#4caf50' size= { 20 } style={ styles.icon }/>
                            
                            <Text style= { styles.strong }> À Prazo: </Text>
                            <Text style= { styles.discount }>{ partner.term_discount_partner }%</Text> 
                        </View>
                        
                        <Line margin= { 5 } color = '#bfbfbf' />
                        
                        <View style={ styles.row }>
                            <Icon name=  'tag' color= '#4caf50' size= { 20 } style={ styles.icon }/>
                            <Icon name=  'credit-card' color='#4caf50' size= { 20 } style={ styles.icon }/>
                        
                            <Text style= { styles.strong }> Cartão de Débito: </Text>
                            <Text style= { styles.discount }>{ partner.card_discount_partner }%</Text> 
                        </View>

                        <Line margin= { 5 } color = '#bfbfbf' />
                        
                        <View style={ styles.row }>
                            <Text style= { styles.strong }> Rua: </Text>
                            <Text style={ styles.description }>{ partner.street_partner }</Text> 
                        </View>

                        <Line margin= { 5 } color = '#bfbfbf' />
                        
                        <View style={ styles.row }>
                            <Text style= { styles.strong }> Cidade: </Text>
                            <Text style={ styles.description }>{ partner.name_city }</Text> 
                        </View>

                        <Line margin= { 5 } color = '#bfbfbf' />
                        
                        <View style={ styles.row }>
                            <Text style= { styles.strong }> Estado: </Text>
                            <Text style={ styles.description }>{ partner.name_state }</Text> 
                        </View>

                        <Line margin= { 5 } color = '#bfbfbf' />

                        <View style={ styles.row }>
                            <Text style= { styles.strong }>Localização no Mapa:</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}