import React from 'react';
import { View, Text,TouchableWithoutFeedback } from 'react-native';
import { colors } from '../consts/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Wrap } from '../styles/view';
import { RotateInUpLeft } from 'react-native-reanimated';
export const Account = ({navigation}) => {
  return (
    <View>
      <View style={{ backgroundColor: colors.theme, padding: 5 }}>
        <Text style={{ color: colors.white, fontWeight: '500', fontSize: 18, marginStart: 10 }}>Welcome</Text>
        <Text style={{ color: colors.white, fontWeight: '500', fontSize: 14, marginStart: 10 }}>Manoj Raj</Text>
      </View>

     <TouchableWithoutFeedback onPress={()=> navigation.navigate('Profile')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Manage Profile</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Document')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Upload Document</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>
      

      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Payment Details</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>

     
      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Help')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Help & Support</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Insurance')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Insurance</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Registationstate')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>Registration States</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>


      <TouchableWithoutFeedback onPress={()=> navigation.navigate('Update')}>
      <View style={Wrap.contain}>
        <Text style={Wrap.text}>App Updates</Text>
        <AntDesign
          name="right"
          color={colors.black}
          size={22}
        />
      </View>
      </TouchableWithoutFeedback>

    </View>
  );
}