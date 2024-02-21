import React from 'react';
import { View,Text,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homepage } from './Homepage';
import { Mycar } from './Mycar';
import { Order } from './Order';
import { Account } from './Account';
import { colors } from '../consts/color';
import Icon from '../consts/icon';
const Tab = createBottomTabNavigator();
export const Home = () =>{
    return(
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.theme,
        inactiveTintColor: colors.grey,
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        style: {
          padding: 10
        }
      }}
      >
        <Tab.Screen name="Explore" component={Homepage} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
            resizeMode='contain'
            style={{height:30,width:30,tintColor:color}}
            source={require('../assets/car.png')}
            />
          ),
        }}/>
        <Tab.Screen name="Mycar" component={Mycar} 
         options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
              resizeMode='contain'
              style={{height:30,width:30,tintColor:color}}
              source={require('../assets/mycar.png')}
              />
            ),
          }}
        />
        <Tab.Screen name="Order" component={Order} 
         options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
              resizeMode='contain'
              style={{height:30,width:30,tintColor:color}}
              source={require('../assets/order.png')}
              />
            ),
          }}
        />
        <Tab.Screen name="Account" component={Account} 
         options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image
              resizeMode='contain'
              style={{height:30,width:30,tintColor:color}}
              source={require('../assets/account.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
}