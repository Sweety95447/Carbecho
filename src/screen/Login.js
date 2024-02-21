import React from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar,TouchableWithoutFeedback} from 'react-native';
import { colors } from '../consts/color';
import { Title } from '../styles/title';
import Icon from '../consts/icon';
import { Container } from '../styles/wrapper';
import { Button } from '../styles/button';
import { Textinput } from '../styles/textinput';
const CustomTextInput = ({ label, style, ...props }) => (
  <View style={Container.view}>
    <StatusBar
      backgroundColor={colors.theme}
    />
    <Icon
      name="arrow-left"
      color="black"
      size={25}
      style={{ marginHorizontal: 20, marginVertical: 10 }}
    />
    <Text style={Title.textFor}>Enter your mobile number {'\n'}to get OTP</Text>
    <View style={Textinput.labelContainer}>
      <Text style={{ color: colors.theme, fontWeight: '500' }}>Mobile Number</Text>
    </View>
    <View style={Textinput.textInput}>
      <Text style={Textinput.prefix}>+91  <Text style={{ color: 'grey' }}>|</Text></Text>
      <TextInput
        placeholder="10 digit mobile number"
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
      />
    </View>

    <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('Otp')}>
    <View style={Button.button}>
      <Text style={Title.continue}>Get OTP</Text>
    </View>
    </TouchableWithoutFeedback>

    <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>By clicking,I accept the <Text style={{ textDecorationLine: 'underline', fontWeight: '500', color: 'black' }}>terms of service</Text> <Text>and</Text>
      <Text style={{ textDecorationLine: 'underline', fontWeight: '500', color: 'black' }}> privacy policy</Text>
    </Text>
  </View>
);
export default CustomTextInput;