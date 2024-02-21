import { StyleSheet} from "react-native";
import { colors } from "../consts/color";
export const Wrap = StyleSheet.create({
   contain:{
       backgroundColor:'#c8d2db',
       flexDirection:'row',
       margin:10,
       borderRadius:8,
       padding:10
    },
    text:{
        color:colors.black,
        fontWeight:'500',
        fontSize:16,
        marginStart:10,
        flex:1,
        alignContent:'center'
    }
})