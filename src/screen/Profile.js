import React from 'react';
import { View, Text, Image } from 'react-native';
import { Images } from '../styles/image';
import CardView from 'react-native-cardview'
export const Profile = () => {
    return (
        <View>
            <Image
                resizeMode='contain'
                style={Images.imageprofile}
                source={require('../assets/Banerjee.jpg')}
            />

            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ flex: 1,fontSize:18,fontWeight:'500',color:'black'}}>Name</Text>
                            <Text style={{fontSize:18}}>Aman Gupta</Text>
                        </View>
                       
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ flex: 1,fontSize:18,fontWeight:'500',color:'black' }}>Phone No</Text>
                            <Text style={{fontSize:18}}>+91 9876543210</Text>
                        </View>
                       
                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ flex: 1,fontSize:18,fontWeight:'500',color:'black' }}>Gender</Text>
                            <Text style={{fontSize:18}}>Male</Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 10 }}>
                            <Text style={{ flex: 1,fontSize:18,fontWeight:'500',color:'black'}}>Address</Text>
                            <Text style={{fontSize:18}}>DLF 6 Office No 311 3rd {"\n"}Floor Near Moti Nagar</Text>
                        </View>
                    </View>


                </CardView>
            </View>

        </View>
    );
}