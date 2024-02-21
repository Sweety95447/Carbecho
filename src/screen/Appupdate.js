import React from 'react';
import { View,Text,Image,Dimensions,TouchableWithoutFeedback} from 'react-native';
import { colors } from '../consts/color';
import Feather from 'react-native-vector-icons/Feather';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Appupdate = ({navigation}) =>{
    return(
      <View style={{flex:1,justifyContent:'center',alignContent:'center',backgroundColor:'white'}}>
          <Image
                    resizeMode='contain'
                    style={{height:height/2.5,width:'100%',margin:10}}
                    source={require('../assets/appupdate.png')}
                />

          <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:colors.black}}>Time To Update!</Text>
          <Text style={{textAlign:'center',fontSize:18,marginBottom:20}}>We added lots of features and fix some {"\n"} bugs to make your experience as smooth as {"\n"} possible</Text>

          <TouchableWithoutFeedback onPress={()=>navigation.navigate('Home')}>
            <View style={{ alignItems: 'center', marginVertical: 10, padding: 5,marginHorizontal:20 }}>
                <Text style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, backgroundColor: colors.theme, color: colors.white, paddingVertical: 5, fontWeight: 'bold' }}>Update</Text>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Home')}>
            <View style={{ alignItems: 'center', marginVertical: 10, padding: 5,marginHorizontal:20 }}>
                <Text style={{paddingHorizontal: 10, borderRadius: 5, backgroundColor: colors.white, color: colors.theme, paddingVertical: 5, fontWeight: 'bold' }}>Not Now</Text>
            </View>
            </TouchableWithoutFeedback>
      </View>
    );
}