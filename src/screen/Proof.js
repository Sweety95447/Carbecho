import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Touchable,TouchableWithoutFeedback} from 'react-native';
import { colors } from '../consts/color';
import Feather from 'react-native-vector-icons/Feather';
import CardView from 'react-native-cardview';
import { RadioButton } from 'react-native-paper';
import { ScrollView} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Proof = ({navigation}) => {
    const [value, setValue] = React.useState('Shop Photo');
    const [deal, setDeal] = React.useState('Shop & Est.License');
    return (
        <ScrollView>
        <View>
        <View>
            <Text style={{ margin: 10, fontSize: 20, color: colors.black, fontWeight: '500' }}>Dealership Proof</Text>
            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>

                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={styles.innerContainer}>
                                <Text style={{ margin: 10, color: colors.theme, fontWeight: '500', fontSize: 16 }}>Select Dealership Proof</Text>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="Shop Photo" color={colors.theme} />
                                    <Text style={styles.title}>Shop Photo</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="Visiting Card" color={colors.theme} />
                                    <Text style={styles.title}>Visiting Card</Text>
                                </View>
                            </View>
                        </RadioButton.Group>


                    </View>


                </CardView>

            </View>

            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>
                        <Text style={{ margin: 10, color: colors.theme, fontWeight: '500', fontSize: 16 }}>{value}</Text>

                        <View style={{ width: width, flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ borderWidth: 1, borderRadius: 10, padding: 50, width: width / 3 }} />
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: colors.black }}>Front</Text>
                            </View>

                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ borderWidth: 1, borderRadius: 10, padding: 50, width: width / 3 }} />
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: colors.black }}>Back</Text>
                            </View>
                        </View>

                        {/* <View style={{ alignItems: 'flex-end',margin:10,padding:5 }}>
                            <Text style={{borderWidth:1,paddingHorizontal:10,borderRadius:5,backgroundColor:colors.theme,color:colors.white,paddingVertical:5,fontWeight:'bold'}}>Upload</Text>
                        </View> */}
                    </View>


                </CardView>
            </View>

        </View>
       
        <View>
            <Text style={{ margin: 10, fontSize: 20, color: colors.black, fontWeight: '500' }}>Business Proof</Text>
            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>

                        <RadioButton.Group onValueChange={newValue => setDeal(newValue)} value={deal}>
                            <View style={styles.innerContainer}>
                                <Text style={{ margin: 10, color: colors.theme, fontWeight: '500', fontSize: 16 }}>Select Business Proof</Text>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="Shop & Est.License" color={colors.theme} />
                                    <Text style={styles.title}>Shop & Est.License</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="GST Reg. Certificate" color={colors.theme} />
                                    <Text style={styles.title}>GST Reg. Certificate</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="Udyog Aadhaar" color={colors.theme} />
                                    <Text style={styles.title}>Udyog Aadhaar</Text>
                                </View>
                            </View>
                        </RadioButton.Group>


                    </View>


                </CardView>

            </View>

            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>
                        <Text style={{ margin: 10, color: colors.theme, fontWeight: '500', fontSize: 16 }}>{deal}</Text>

                        <View style={{ width: width, flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ borderWidth: 1, borderRadius: 10, padding: 50, width: width / 1.3 }} />
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: colors.black }}>Image</Text>
                            </View>
                        </View>
                    </View>


                </CardView>
            </View>

           

            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Account')}>
            <View style={{ alignItems: 'flex-end', margin: 10, padding: 5 }}>
                <Text style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, backgroundColor: colors.theme, color: colors.white, paddingVertical: 5, fontWeight: 'bold' }}>Upload</Text>
            </View>
            </TouchableWithoutFeedback>

        </View>
       
       </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    radioContainer: {
        flexDirection: 'row',
    },
    title: {
        marginTop: 7,
    },
    categoryTitle: {
        marginBottom: 10,
        fontSize: 20,
    },
});



