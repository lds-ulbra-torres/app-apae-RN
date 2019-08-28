import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { partnerByCategory } from '../../services/Api';
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
                data= { partners }
                keyExtractor= { item => item.id_partner }
                numColumns= { 1 }
                renderItem= {({ item }) => (
                    <TouchableOpacity style= { styles.card }>
                        <Text>{ item.id_partner }</Text>
                    </TouchableOpacity>
                )}

            />
            
        </SafeAreaView>
  );
}
