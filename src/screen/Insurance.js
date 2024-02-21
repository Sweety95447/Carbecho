import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Touchable,TouchableWithoutFeedback} from 'react-native';
import { colors } from '../consts/color';
import Feather from 'react-native-vector-icons/Feather';
import CardView from 'react-native-cardview';
import { RadioButton } from 'react-native-paper';
import { ScrollView} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Insurance = ({navigation}) => {
    const [value, setValue] = React.useState('Yes');
    return (
        <ScrollView>
        <View>
            <View style={{ margin: 10 }}>
                <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}>
                    <View>

                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={styles.innerContainer}>
                                <Text style={{ margin: 10, color: colors.theme, fontWeight: '500', fontSize: 16 }}>You have insurance or not</Text>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="Yes" color={colors.theme} />
                                    <Text style={styles.title}>Yes</Text>
                                </View>
                                <View style={styles.radioContainer}>
                                    <RadioButton value="No" color={colors.theme} />
                                    <Text style={styles.title}>No</Text>
                                </View>

                            </View>
                        </RadioButton.Group>


                    </View>


                </CardView>

            </View>

            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Proof')}>
            <View style={{ alignItems: 'flex-end', margin: 10, padding: 5 }}>
                <Text style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, backgroundColor: colors.theme, color: colors.white, paddingVertical: 5, fontWeight: 'bold' }}>Submit</Text>
            </View>
            </TouchableWithoutFeedback>

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



