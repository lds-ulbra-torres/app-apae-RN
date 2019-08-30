import React, { useState, useEffect } from 'react';
import Icon from   'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { partnerByCategory, baseURL } from '../../services/Api';
import styles from './styles';

export default function PartnersCategory({ navigation }) {
    const id = navigation.getParam('id');
    const [ partners, setPartners ] = useState([]);

    useEffect(() => {
        async function loadPartners (){
            const partners = await partnerByCategory(id)

            setPartners(partners);
        }

        loadPartners();
    }, [])

    return (
        <SafeAreaView style= { styles.container }>
            <View style= { styles.header }>
                <Text style= { styles.textHeader }>APAE Torres</Text>

                <Text style= { styles.textHeader }>Lupa</Text>
            </View>

            <FlatList
                style={ styles.flatList }
                data= { partners }
                keyExtractor= { item => item.id_partner }
                numColumns= { 1 }
                renderItem= {({ item }) => (
                    !item.fantasy_name_partner.includes('0000')  &&
                    <TouchableOpacity style= { styles.card } onPress= { () =>(
                            navigation.navigate('PartnerDetails', { id: item.id_partner }) 
                    )}>
                        <ImageBackground style={ styles.image } source= {{ uri: `${ baseURL }${ item.photo_partner }` }}>
                            <View style={ styles.subtitle }>
                                <View style={ styles.name }>
                                    <Text style={ styles.textName }>{item.fantasy_name_partner}</Text>
                                </View>

                                <View style={ styles.discount }>
                                    <Text style={ styles.textDiscount }>-{item.discount_partner}% </Text>

                                    <Icon name='tag' color= 'white' size={30}/>

                                    <Text style={ styles.secondTextDiscount }> À Vista</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}

            />
            
        </SafeAreaView>
  );
}