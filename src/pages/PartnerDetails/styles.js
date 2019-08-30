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
});

export default styles;