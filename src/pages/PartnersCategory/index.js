import React, { useState, useEffect } from 'react';
import Icon from   'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements'
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
    const [ filter, setFilter ] = useState(false);
    const [ verif, setVerif ] = useState('');
    const [ text, setText ] = useState('');

    useEffect(() => {
        async function loadPartners (){
            const partners = await partnerByCategory(id)

            setFilter(partners)
            setPartners(partners);
        }

        loadPartners();
    }, []);

    useEffect(() =>{       
        function filterPartners(){
            if(!partners){
                return
            }
            if(!text){
                setFilter(partners)
                return
            }
    
            setFilter(partners.filter( item => item.fantasy_name_partner.toLowerCase().includes(text.toLowerCase()) ) );
            
        }
        filterPartners()
    }, [text])

    return (
        <SafeAreaView style= { styles.container }>
            <View style={styles.header}>

                {verif ?
                    <SearchBar
                        containerStyle={styles.input}
                        platform='android'
                        onChangeText={value => setText(value)}
                        value={text}
                        placeholder= 'Insira o parceiro...'
                        onCancel= { () => {setVerif(!verif) & setText('')}}
                    />
                    :
                    <View style={styles.containerTextHeader}>
                        <Text style={styles.textHeader}>Clone APAE Torres</Text>
                    </View>
                }

                <TouchableOpacity style={styles.searchButton} onPress={() => {setVerif(!verif) & setText('')}}>
                    <Icon name='search' color='white' size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={ styles.flatList }
                data= { filter }
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