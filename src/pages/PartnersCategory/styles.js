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
    flatList: {
        flex:1
    },
    card: {
        flex: 1,
        backgroundColor: '#90d192',
        margin: 5,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 7,
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    subtitle:{
        flexDirection: 'row',
        height: 'auto',
        minHeight: 65,
    },
    name:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    discount:{
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4caf50',
        padding: 10,
    },
    textName: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textDiscount: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    secondTextDiscount: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default styles;