import React, { useState } from "react";
import { View, Text, StatusBar,TouchableWithoutFeedback } from "react-native";
import Icon from "../consts/icon";
import { colors } from "../consts/color";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Button } from "../styles/button";
import { Title } from "../styles/title";
import {Fillotp} from '../styles/fillotp';
import { useNavigation } from '@react-navigation/native';
const CELL_COUNT = 6;
export const Otp = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar
        backgroundColor={colors.theme}
      />
      <Icon
        name="arrow-left"
        color="black"
        size={25}
        style={{ marginHorizontal: 20, marginVertical: 10 }}
      />
      <Text style={Title.textFor}>Verify with OTP sent to {'\n'} 8826512999</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={Fillotp.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[Fillotp.cell, isFocused && Fillotp.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <View style={Button.button}>
          <Text style={Title.continue}>Continue</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}
