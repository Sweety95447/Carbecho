// import React from 'react';
// import { View,Text,Image} from 'react-native';
// import { Images } from '../styles/image';
// export const Homepage = () =>{
//     return(
//       <View style={{margin:10,backgroundColor:'red',borderRadius:20}}>
//            <Image
//                     resizeMode='contain'
//                     style={{height:200,width:'100%',borderRadius:20}}
//                     source={require('../assets/bugatti.png')}
//                 />
//       </View>
//     );
// }

// import React from 'react';
// import {StyleSheet, Text, ImageBackground, View} from 'react-native';
// import { colors } from '../consts/color';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';

// export const Homepage = () =>{
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.coverImage}
//         source={require('../assets/bugatti.png')}>
//         <View style={styles.textView}>
//           <Text style={styles.imageText}><Text>DL 1234575</Text></Text>
//           <Text style={styles.imageText}>New Delhi</Text>
//         </View>
//       </ImageBackground>


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   coverImage: {
//     width: '100%',
//     height: 200,
//   },
//   textView: {
//     position: 'absolute',
//     bottom: -20,
//   },
//   imageText: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: colors.theme,
//     opacity:0.6,
//     margin:5,
//     padding:7,
//     borderRadius:5
//   },
// });

import { NavigationContainer } from '@react-navigation/native';
import React,{useState} from 'react';
import { Text, Dimensions, Image, StyleSheet, View, ImageBackground, FlatList,TouchableWithoutFeedback, Alert} from 'react-native';
import { CALLBACK_TYPE } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../consts/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from '../consts/icon';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../styles/Header';
const slides = [
  {
    key: 's1',
    title: 'Earn Upto रु82,000 more!',
    text: 'Our Partner makes as much as रु82,000 per month selling as many as 7 more cars than usual.',
    image: require('../assets/bugati.jpg'),
  },
  {
    key: 's2',
    title: 'Verified Inspection Reports',
    text: 'All cars are verified with complete paperwork by our team of experts',
    image: require('../assets/bugatti.png'),
  },
  {
    key: 's3',
    title: 'Discover New Local Products',
    text: 'Choose from a wide range of cars and delivering them straight to your homes',
    image: require('../assets/bug.jpg'),
  },
  {
    key: 's4',
    title: 'Discover New Local Products',
    text: 'Choose from a wide range of cars and delivering them straight to your homes',
    image: require('../assets/buggatti.jpg'),
  },
];

const data = [
  {
    id: '1',
    title: 'Car',
    image: require('../assets/car.png'),
  },
  {
    id: '2',
    title: 'Bike',
    image: require('../assets/car.png'),
  },
  {
    id: '3',
    title: 'Laptop',
    image: require('../assets/car.png'),
  },
  {
    id: '4',
    title: 'Mobile',
    image: require('../assets/car.png'),
  },
  {
    id: '5',
    title: 'Furniture',
    image: require('../assets/armchair.png'),
  },
];

const show = [
  {
    id: '1',
    title: 'Car',
    image: require('../assets/car.png'),
  },
  {
    id: '1',
    title: 'Bike',
    image: require('../assets/car.png'),
  },
  {
    id: '1',
    title: 'Laptop',
    image: require('../assets/car.png'),
  },
  {
    id: '2',
    title: 'Mobile',
    image: require('../assets/car.png'),
  },
  {
    id: '2',
    title: 'Furniture',
    image: require('../assets/armchair.png'),
  },
];

const [pass, setPass] = useState(1);

const renderItem = ({ item }) => {
  return (

    <TouchableWithoutFeedback onPress={()=>{
      alert(item.id)
      setPass(item.id)
      }}>

    <View style={{ padding: 5,borderRadius:8,flexDirection:'row',backgroundColor:'#dedede',margin:5}}>
      <Image
                    resizeMode='contain'
                    style={{height:25,width:25}}
                    source={item.image}
                />
      <Text
        style={{fontSize:16,fontWeight:'500',color:'black',marginLeft:5}}>{item.title}</Text>

      
    </View>
    </TouchableWithoutFeedback>

  );
};

const call = () =>{
  
}


const renderData = ({ item}) => {
  console.log("value",item);
  
};

export const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white' }}>
      
      <Header/>

      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

      <FlatList
          style={{height:height/1.45}}
          data={show.filter(big => big.id == pass)}
          renderItem={({ item }) =>
            (
              <View style={{
                margin: 10,
                borderRadius: 10, backgroundColor: '#f0f0f0'
              }}>
                <View style={styles.container}>
                  <SwiperFlatList
                    autoplay={false}
                    autoplayLoop
                    index={0}
                    showPagination
                    data={slides}
                    paginationActiveColor={colors.theme}
                    paginationStyleItem={{ height: 10, width: 10 }}
                    renderItem={({ item }) => (
                      <View style={styles.child}>
                        <ImageBackground
                          style={{
                            height: 200,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: width - 20,
                          }}
                          imageStyle={{ borderRadius: 15 }}
                          source={item.image}
                          resizeMode={'cover'}
                        //source={{ uri: "https://rssindia.in.net/rupeeya/image/product/" + item.menu_image }}
                        >
                          <View style={styles.textView}>
                            <Text style={styles.imageText}><Text>DL 1234575</Text></Text>
                            <Text style={styles.imageText}>New Delhi</Text>
                          </View>
                        </ImageBackground>
          
                      </View>
                    )}
                  />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                  <Text style={{ flex: 1, color: 'black', fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>Bugatti Chiron {'\n'} Type 5</Text>
                  <Icon
                    name="heart"
                    color="#bdbdbd"
                    size={30}
                  />
                </View>
          
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                  <Text style={styles.imageTexts}><Text>59,327 km</Text></Text>
                  <Text style={styles.imageTexts}><Text>1st owner</Text></Text>
                  <Text style={styles.imageTexts}><Text>Petrol</Text></Text>
                </View>
          
               <TouchableWithoutFeedback onPress={()=> navigation.navigate('Details')}>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                  <Text style={styles.imageTextes}><Text>Highest Bid रु 15000000</Text></Text>
                  <Text style={{ alignSelf: 'center', marginLeft: 20, color: 'red' }}>Almost Over {"\n"}<Text style={{ color: 'black' }}>00h 01m 11s</Text></Text>
                </View>
                </TouchableWithoutFeedback>
          
                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
                  <Text style={{ flex: 1, fontWeight: '500', fontSize: 18, color: 'black' }}>Fair Market Value </Text>
                  <Text style={{ fontWeight: '500', fontSize: 18, color: 'black' }}>रु 15000000</Text>
                </View>
          
              </View>
          
              
            )
          }
          keyExtractor={(item, index) => index.toString()}
        />

      </View>


     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    backgroundColor: '#f0f0f0',
  },
  child: {
    height: 200,
    width: width - 20
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  textView: {
    position: 'absolute',
    bottom: -20,
  },
  imageText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: colors.theme,
    opacity: 0.6,
    marginVertical: 5,
    padding: 7,
    borderRadius: 5,
    marginHorizontal: 10
  },
  imageTexts: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#d7dce0',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    color: 'black'
  },
  imageTextes: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.theme,
    padding: 12,
    color: 'white',
    flex: 1,
    right: 10
  },
});