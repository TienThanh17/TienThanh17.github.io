import { StyleSheet } from 'react-native';
import color from '../../contain/color';

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: color.background,
    },
    input: {
        height: 40,
        width: "80%",
        backgroundColor: 'silver',
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'aqua',
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    iconWrapper: {
        height: 40,
        width: 40,
        backgroundColor: 'lime',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'aqua',
    },
    icon: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default styles;