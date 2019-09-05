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
        alignItems: 'stretch',
        backgroundColor: '#4caf50',
        elevation: 20,
    },
    containerTextHeader: {
        flex: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    textHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    listCards: {
        flex: 1,
    },
    input: {
        flex: 10,
    },
    searchButton: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
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
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 7,
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
        paddingTop: 100,
        overflow: 'hidden',
        justifyContent: 'space-between',
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