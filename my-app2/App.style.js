import { StyleSheet } from 'react-native';
import color from './contain/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
      },
      body:{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 30 
      },
      header:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'aqua'
      },
      items:{
        marginTop: 15,
      },
});

export default styles;

