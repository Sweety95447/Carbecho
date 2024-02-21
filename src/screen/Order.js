// import React from 'react';
// import { View,Text,Image} from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Account } from './Account';
// import {Negotiation} from './Negotiation';
// import { Procedure } from './Procedure';
// import {Rctransfer} from './Rctransfer';
// import { colors } from '../consts/color';
// import Icon from '../consts/icon';
// const Tab = createMaterialTopTabNavigator();
// export const Order = () =>{
//     return(
//       <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: colors.grey,
//         indicatorStyle :{
//           backgroundColor:'white',
//     },
  
//         style: {
//           padding: 5,
//           backgroundColor:colors.theme
//         }
      
//       }}
      
//       >
//         <Tab.Screen name="IN NEGOTIATION" component={Negotiation} 
//         options={{
//           headerShown: false,
//           // tabBarIcon: ({ color, size }) => (
//           //   <Image
//           //   resizeMode='contain'
//           //   style={{height:30,width:30,tintColor:color}}
//           //   source={require('../assets/car.png')}
//           //   />
//           // ),
//         }}/>
//         <Tab.Screen name="PROCEDURE" component={Procedure} 
//          options={{
//             headerShown: false,
//             // tabBarIcon: ({ color, size }) => (
//             //   <Image
//             //   resizeMode='contain'
//             //   style={{height:30,width:30,tintColor:color}}
//             //   source={require('../assets/mycar.png')}
//             //   />
//             // ),
//           }}
//         />
//         <Tab.Screen name="RC TRANSFER" component={Rctransfer} 
//          options={{
//             headerShown: false,
//             // tabBarIcon: ({ color, size }) => (
//             //   <Image
//             //   resizeMode='contain'
//             //   style={{height:30,width:30,tintColor:color}}
//             //   source={require('../assets/account.png')}
//             //   />
//             // ),
//           }}
//         />
//       </Tab.Navigator>
//     );
// }


import React from 'react';
import { View,Text} from 'react-native';
export const Order = () =>{
    return(
      <View>
      </View>
    );
}