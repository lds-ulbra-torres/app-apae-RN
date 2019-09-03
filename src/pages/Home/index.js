import React, { useState, useEffect } from 'react';
import Icon from   'react-native-vector-icons/FontAwesome';
import { View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    FlatList,
 } from 'react-native';

import styles from './styles';
import axios, { baseURL } from '../../services/Api';

export default function Home ({ navigation }){
    const [ categories, setCategories ] = useState([]);

    useEffect(() =>{
        async function loadCategories(){
            
            const data = await axios
                .get('api/category')
                .then((promisse) => promisse.data);
            
            setCategories(data.category);
        }

        loadCategories();
    }, []);

    return(
        <SafeAreaView style={ styles.container }>
            <View style= { styles.header }>
                <Text style= { styles.textHeader }>APAE Torres</Text>

                <Text style= { styles.textHeader }>Lupa</Text>
            </View>

            <View style={ styles.listCards }>

            <FlatList
                style={ styles.flatList }
                data= { categories }
                keyExtractor = { item => item.id_category }
                numColumns = {2}
                renderItem = {({item}) =>(
                    <TouchableOpacity style= { styles.card } onPress= { () => navigation.navigate('PartnersCategory', { id: item.id_category }) }>
                        <ImageBackground style={ styles.image } source= { { uri: `${baseURL}${item.photo_category}` } }>
                            <View style={ styles.logo }>
                                <Text style= { styles.textLogo }> {item.name_category} </Text>
                            </View>

                            <View style={ styles.legenda }>
                                <Text style= { styles.textLegenda }>Ver Parceiros</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
            </View>
        </SafeAreaView>
    )
}