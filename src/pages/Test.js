import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

export default function Test() {
    const [ verif, setVerif]  = useState(false);
    const [ drawer, setDrawer]  = useState({});

    renderDrawer = () => {
        return (
            <View>
                <Text>I am in the drawer!</Text>
            </View>
        );
    };

    function animeDrawer(){
        verif ?
            drawer.closeDrawer()
        :
            drawer.openDrawer()

        setVerif(!verif);
    }

    

    return (
        <View style={{ height: 200 }}>

            <TouchableOpacity style={{height: 50, backgroundColor: 'green',}} onPress= { () =>  animeDrawer()}>
                <Text>Pressione</Text>
            </TouchableOpacity>

            <DrawerLayout
                style={{height: 200}}
                drawerWidth={200}
                ref= { (ref) => setDrawer(ref)}
                drawerType='slide'
                drawerBackgroundColor="#ddd"
                renderNavigationView={() => renderDrawer()}
            >
                <Text>Frente</Text>

            </DrawerLayout>
        </View>
    );
}