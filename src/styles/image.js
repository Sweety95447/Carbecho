import { StyleSheet,Dimensions} from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Images=StyleSheet.create({
    image:{
     height:height/2.8,
     width:width,
    },
    imageprofile:{
        height:100,
        width:100,
        borderRadius:50,
        margin:10,
        alignSelf:'center'
       },
})