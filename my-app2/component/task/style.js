import { StyleSheet } from 'react-native';
import color from '../../contain/color';

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 15,
        //paddingVertical: 1,
        alignItems: 'center',
      },
      square:{
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      evenColor:{
        backgroundColor: color.even
      },
      oddColor:{
        backgroundColor: color.odd
      },
      number:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
      },
      content:{
        fontSize: 20,
        width: '75%'
      }
});

export default styles;


