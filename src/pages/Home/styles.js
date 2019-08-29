import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex: 1,
        maxHeight: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4caf50',
        padding: 20,
    },
    textHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    listCards: {
        flex: 1,
    },
    flatList: {
        flex: 1,
        alignContent: 'stretch',
        padding: 5,
    },
    card: {
        flex: 1,
        margin: 5,
        height: 185,
    },
    legenda: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'stretch',
    },
    textLegenda: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        borderWidth: 2,
        paddingTop: 100,
    },
    logo:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        
    }
    
});

export default styles;