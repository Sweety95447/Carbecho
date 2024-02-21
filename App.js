import React from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screen/Splash';
import Onboarding from './src/screen/Onboarding';
import Login from './src/screen/Login';
import { Otp } from './src/screen/otp';
import { Home } from './src/screen/Home';
import { Homepage } from './src/screen/Homepage';
import { Mycar } from './src/screen/Mycar';
import { Order } from './src/screen/Order';
import { Account } from './src/screen/Account';
import { Negotiation } from './src/screen/Negotiation';
import { Procedure } from './src/screen/Procedure';
import { Rctransfer } from './src/screen/Rctransfer';
import { Profile } from './src/screen/Profile';
import { Registationstate } from './src/screen/Registationstate';
import { Details } from './src/screen/Details';
import { Engine } from './src/screen/Engine';
import { Document } from './src/screen/Document';
import { Proof } from './src/screen/Proof';
import { Help } from './src/screen/Help';
import { colors } from './src/consts/color';
import { Insurance } from './src/screen/Insurance';
import { Appupdate } from './src/screen/Appupdate';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="Mycar" component={Mycar} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="Negotiation" component={Negotiation} options={{ headerShown: false }} />
        <Stack.Screen name="Procedure" component={Procedure} options={{ headerShown: false }} />
        <Stack.Screen name="Rctransfer" component={Rctransfer} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name="Registationstate" component={Registationstate} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />

        <Stack.Screen name="Engine" component={Engine} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />

        <Stack.Screen name="Document" component={Document} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />


        <Stack.Screen name="Proof" component={Proof} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />

        <Stack.Screen name="Help" component={Help} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />

        <Stack.Screen name="Insurance" component={Insurance} options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />


        <Stack.Screen name="Update" component={Appupdate} options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.theme,
          },
          headerTintColor: colors.white,
        }} />




      </Stack.Navigator>


    </NavigationContainer>
  );
}
export default App;



