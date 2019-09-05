import React, { useState, useEffect } from 'react';
import Icon from   'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    TextInput
 } from 'react-native';

import styles from './styles';
import axios, { baseURL } from '../../services/Api';

export default function Home ({ navigation }){
    const [ categories, setCategories ] = useState([]);
    const [ filter, setFilter ] = useState(false);
    const [ verif, setVerif ] = useState('');
    const [ text, setText ] = useState('');

    
    useEffect(() =>{
        async function loadCategories(){
            const data = await axios
            .get('api/category')
            .then((promisse) => promisse.data);
            
            setFilter(data.category)
            setCategories(data.category);
        }
        loadCategories();
    }, []);

    useEffect(() =>{       
        function filterCategories(){
            if(!categories){
                return
            }
            if(!text){
                setFilter(categories)
                return
            }
    
            setFilter(categories.filter( item => item.name_category.includes(text) ) );
            
        }
        filterCategories()
    }, [text])

    return(
        <SafeAreaView style={ styles.container }>
            <View style= { styles.header }>

                { verif ?
                            <SearchBar
                                containerStyle={ styles.input }
                                platform= 'android'
                                onChangeText= { value => setText(value) }
                                value={ text }
                            />
                    :
                        <View style={ styles.containerTextHeader }>
                            <Text style= { styles.textHeader }>Clone APAE Torres</Text>
                        </View>
                }

                <TouchableOpacity style={ styles.searchButton } onPress= { () => setVerif(!verif) }>
                    <Icon name= 'search' color= 'white' size={ 20 } />
                </TouchableOpacity>
            </View>

            <View style={ styles.listCards }>

            <FlatList
                style={ styles.flatList }
                data= { filter }
                keyExtractor = { item => item.id_category }
                numColumns = {2}
                renderItem = {({ item }) =>(
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