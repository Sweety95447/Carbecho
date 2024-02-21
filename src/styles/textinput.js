import { StyleSheet } from 'react-native';
import { colors } from '../consts/color';
export const Textinput = StyleSheet.create({
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: 100,
        left: 25,
        padding: 5,
        zIndex: 50,
        margin: 14
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.theme,
        borderRadius: 10,
        margin: 20,
        flexDirection: 'row'
    },
    prefix: {
        paddingTop: 14,
        paddingLeft: 15,
        fontWeight: 'bold',
        color: 'black'
    }
})