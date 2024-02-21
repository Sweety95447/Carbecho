import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Engine = () => {
    return (
        <ScrollView>
            <View>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/enone.jpg')}
                />
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/entwo.jpeg')}
                />

                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/enthree.jpg')}
                />

                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/enfour.jpg')}
                />

                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/enone.jpg')}
                />
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/entwo.jpeg')}
                />




            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: height / 4,
        width: width - 40,
        margin: 20,
        borderRadius: 20
    }
});

