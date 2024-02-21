import React, { useState } from 'react';
import { Text, Dimensions, Image, StyleSheet, View, ImageBackground, FlatList, TouchableWithoutFeedback, Alert } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../consts/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Icon from '../consts/icon';
import Negotiation from './Negotiation';
import SectionList from 'react-native-tabs-section-list';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
const SECTIONS = [
  {
    title: 'CAR DOCUMENT',
    data: Array(1)
      .fill(0)
      .map(_ => ({
        title: 'Burgers',
        description: "It is ok",
        price: '100'
      }))
  },
  {
    title: 'EXTERIOR',
    data: Array(10)
      .fill(0)
      .map(_ => ({
        title: 'LHS Font Tyre',
        description: "65-85%",
        price: require('../assets/bugati.jpg')
      }))
  },
  {
    title: 'ENGINE',
    data: Array(10)
      .fill(0)
      .map(_ => ({
        title: 'Engine Sound',
        description: "No engine sound, No Blow",
        price: require('../assets/laptop.jpeg')
      }))
  },
];

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

export const Details = ({navigation}) => {
  return (

    <View>

      <ScrollView style={{marginBottom:50}}>



        <View style={styles.containers}>


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
                      {/* <View style={styles.textView}>
                        <Text style={styles.imageText}><Text>DL 1234575</Text></Text>
                        <Text style={styles.imageText}>New Delhi</Text>
                      </View> */}
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

            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
              <Text style={styles.imageTextes}><Text>Highest Bid रु 15000000</Text></Text>
              <Text style={{ alignSelf: 'center', marginLeft: 20, color: 'red' }}>Almost Over {"\n"}<Text style={{ color: 'black' }}>00h 01m 11s</Text></Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5 }}>
              <Text style={{ flex: 1, fontWeight: '500', fontSize: 18, color: 'black' }}>Fair Market Value </Text>
              <Text style={{ fontWeight: '500', fontSize: 18, color: 'black' }}>रु 15000000</Text>
            </View>
          </View>

          <View style={{ width: '100%', height: 0.5, backgroundColor: colors.grey }}>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <Ionicons
              name="location-sharp"
              color={colors.theme}
              size={22}
              style={{ margin: 5 }}
            />
            <Text style={{ fontSize: 16, margin: 5, fontWeight: '500', color: colors.black }}>New Delhi | DL BC</Text>
          </View>

          <View style={{ width: '100%', height: 0.5, backgroundColor: colors.grey }}>
          </View>


          
          <View style={{ flexDirection: 'row', margin: 10, width: width }}>
           <TouchableWithoutFeedback onPress={()=> navigation.navigate('Engine')}>
            <View>
              <Image
                resizeMode='contain'
                style={{ height: 100, width: width / 3.3, borderRadius: 10 }}
                source={require('../assets/bugati.jpg')}
              />
              <Text style={{ textAlign: 'center', color: 'black' }}>Engine</Text>
            </View>
          </TouchableWithoutFeedback>

            <View style={{ marginHorizontal: 10 }}>
              <Image
                resizeMode='contain'
                style={{ height: 100, width: width / 3.3, borderRadius: 10 }}
                source={require('../assets/bugati.jpg')}
              />
              <Text style={{ textAlign: 'center', color: 'black' }}>Interior</Text>
            </View>

            <View>
              <Image
                resizeMode='contain'
                style={{ height: 100, width: width / 3.3, borderRadius: 10 }}
                source={require('../assets/bugati.jpg')}
              />
              <Text style={{ textAlign: 'center', color: 'black' }}>Damage</Text>
            </View>
          </View>




          <View style={{ height: 300 }}>
            <SectionList
              sections={SECTIONS}
              keyExtractor={item => item.title}
              stickySectionHeadersEnabled={false}
              scrollToLocationOffset={50}
              tabBarStyle={styles.tabBar}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderTab={({ title, isActive }) => (
                <View
                  style={[
                    styles.tabContainer,
                    { borderBottomWidth: isActive ? 1 : 0 }
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      { backgroundColor: isActive ? '#090909' : 'grey' }
                    ]}
                  >
                    {title}
                  </Text>
                </View>
              )}
              renderSectionHeader={({ section }) => (
                <View>
                  <View style={styles.sectionHeaderContainer} />
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
              )}
              renderItem={({ item, index }) => (

                <View style={styles.itemContainer}>
                  {item.title === 'Burgers' ?
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, color: 'black', fontSize: 16 }}>RC Availability</Text>
                        <Text style={{ color: 'black', fontSize: 16 }}>Original Condition ok</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, color: 'black', fontSize: 16 }}>Mismatch in RC</Text>
                        <Text style={{ color: 'black', fontSize: 16 }}>No Mismatch</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, color: 'black', fontSize: 16 }}>RTO NOC Issued</Text>
                        <Text style={{ color: 'black', fontSize: 16 }}>No</Text>
                      </View>
                    </View>
                    :
                    <View style={{ flexDirection: 'row' }}>
                      <AntDesign
                        name="checkcircle"
                        color='green'
                        size={22}
                        style={{ margin: 5 }}
                      />
                      <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>
                          {item.title}
                        </Text>
                        <Text>
                          {item.description}
                        </Text>
                      </View>
                      <Image
                        resizeMode='contain'
                        style={{ height: 50, width: 80 }}
                        source={item.price}
                      />

                    </View>
                  }
                </View>


              )}
            />
          </View>







        </View>

      </ScrollView>


      <View style={styles.bottomView} >

        <View style={{width:width/2,backgroundColor:colors.grey}}>
            <Text style={{textAlign:'center',padding:10,fontSize:20,color:colors.white}}>Place Bid</Text>
        </View>
        <View style={{width:width/2,backgroundColor:colors.theme,height:50}}>
            <Text style={{textAlign:'center',padding:10,fontSize:20,color:colors.white}}>Start Auto Bid</Text>
        </View>

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
  containers: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1
  },
  tabContainer: {
    borderBottomColor: '#090909'
  },
  tabText: {
    padding: 10,
    color: '#9e9e9e',
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 10,
    color: 'white',
    margin: 10
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea'
  },
  sectionHeaderContainer: {
    // height: 10,
    backgroundColor: '#f6f6f6',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1
  },
  sectionHeaderText: {
    color: '#010101',
    backgroundColor: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#131313'
  },
  itemPrice: {
    fontSize: 18,
    color: '#131313'
  },
  itemDescription: {
    marginTop: 10,
    color: '#b6b6b6',
    fontSize: 16
  },
  itemRow: {
    flexDirection: 'row'
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    backgroundColor:'grey'
  },
  textStyle: {
    color: '#fff',
    fontSize: 22
  }
});