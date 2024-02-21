import React from 'react';
import { View,Text} from 'react-native';
import { colors } from '../consts/color';
import Feather from 'react-native-vector-icons/Feather';
export const Registationstate = () =>{
    return(
      <View style={{flexDirection:'row',margin:10,borderWidth:1,borderRadius:5,borderColor:colors.theme,padding:5}}>
         <Feather
      name="search"
      color={colors.theme}
      size={22}
      style={{margin:5}}
    />
        <Text style={{fontSize:16,margin:5}}>Search reg. number,Apt.ID,Make</Text>  
      </View>
    );
}