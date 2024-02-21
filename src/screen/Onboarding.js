import React from 'react';
import {
   View,
   Text,
   Image,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors } from '../consts/color';
import { Images } from '../styles/image';
import { Container } from '../styles/wrapper';
import { Circle } from '../styles/circle';
import { Title } from '../styles/title';
import Icon from '../consts/icon';
const Onboarding = (props) => {
   const onDone = () => {
      props.navigation.reset({
         index: 0,
         routes: [{ name: 'Login' }]
      })
   };

   const RenderNextButton = () => {
      return (
         <View style={Circle.circle}>
            <Icon
               name="arrow-right"
               color="rgba(255, 255, 255, .9)"
               size={24}
            />
         </View>
      );
   };

   const RenderDoneButton = () => {
      return (
         <View style={Circle.circle}>
            <Icon
               name="check"
               color="rgba(255, 255, 255, .9)"
               size={24}
            />
         </View>
      );
   };

   const RenderItem = ({ item }) => {
      return (
         <View
            style={{
               flex: 1,
               backgroundColor: 'white',
            }}>
            <Text 
            onPress={()=>  props.navigation.reset({
               index: 0,
               routes: [{ name: 'Login' }]
            })}
            style={Title.skip}>Skip</Text>
            <View style={Container.container}>
               <Image
                  style={Images.image}
                  resizeMode='contain'
                  source={item.image} />
               <Text style={Title.title}>
                  {item.title}
               </Text>
               <Text style={Title.text}>
                  {item.text}
               </Text>
            </View>

         </View>
      );
   };
   return (
      <AppIntroSlider
         data={slides}
         renderItem={RenderItem}
         onDone={onDone}
         renderDoneButton={RenderDoneButton}
         renderNextButton={RenderNextButton}
         activeDotStyle={{ backgroundColor: colors.theme }}
      />
   );
};

export default Onboarding;

const slides = [
   {
      key: 's1',
      title: 'Earn Upto रु82,000 more!',
      text: 'Our Partner makes as much as रु82,000 per month selling as many as 7 more cars than usual.',
      image: require('../assets/onboardone.png'),
   },
   {
      key: 's2',
      title: 'Verified Inspection Reports',
      text: 'All cars are verified with complete paperwork by our team of experts',
      image: require('../assets/onboardthree.png'),
   },
   {
      key: 's3',
      title: 'Discover New Local Products',
      text: 'Choose from a wide range of cars and delivering them straight to your homes',
      image: require('../assets/onboardtwo.png'),
   },
];