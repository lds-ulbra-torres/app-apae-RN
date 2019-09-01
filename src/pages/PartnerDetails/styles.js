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
    image:{ 
        width: '100%',
        height: '100%',
        maxHeight: 240,
    },
    name: {
        height: 'auto',
        minHeight: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4caf50',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    containerFantasyName:{
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCall:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCall: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fantasyName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    cardContainer: {
        margin: 5,
        height: 'auto',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 7,
    },
    card:{
        backgroundColor: 'white',
        height: 'auto',
        width: 'auto',
        borderRadius: 5,
    },
    discount:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4caf50'
    },
    icon: {
        marginRight: 10
    },
    
    row: {
        flexDirection: 'row',
        margin: 5,
        padding: 5
    },
    strong:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    description:{
        fontSize: 20
    }
});

export default styles;