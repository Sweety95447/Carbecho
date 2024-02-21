import { StyleSheet} from "react-native";
import { colors } from "../consts/color";
export const Title = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 16,
        fontWeight: 'bold',
        color: colors.black,
    },
    text:{
        fontSize: 16,
        textAlign: 'center',
        color: colors.theme,
        marginHorizontal: 30
    },
    skip:{
        alignSelf: 'flex-end', 
        margin: 10, 
        fontSize: 22,
        color: 'white',
        fontWeight: '500', 
        color: colors.theme
    },
    continue:{
        textAlign: 'center', 
         padding: 16, 
         fontWeight: '500', 
         color: 'white', 
         fontSize: 18 
    },
    textFor:{
        fontSize: 25, 
        fontWeight: 'bold', 
        marginHorizontal: 20, 
        color: colors.black 
    }
})