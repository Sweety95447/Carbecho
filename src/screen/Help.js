import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity,Linking} from 'react-native';
import { colors } from '../consts/color';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const Help = () => {
    return (
        <View style={styles.row}>
            <TouchableOpacity
                onPress={() => Linking.openURL(`tel:+918826512919`)}
                style={styles.item}
            >
                <Icon
                    onPress={() => Linking.openURL(`tel:+918826512919`)}
                    name="call"
                    size={30}
                    style={{ color: colors.white}} />
                <Text style={{color:colors.white}}>Call us</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL('mailto:info@carbecho.com?subject= &body=')}
                style={styles.item}
            >
                <Icon
                    onPress={() => Linking.openURL('mailto:info@carbecho.com?subject= &body=')}
                    name="mail"
                    size={30}
                    style={{ color: colors.white}} />
                <Text style={{color:colors.white}}>Mail us</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+918826512919')}
                style={styles.item}
            >
                <Ionicons
                    onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+918826512919')}
                    name="logo-whatsapp"
                    size={30}
                    style={{ color: colors.white}} />
                <Text style={{color:colors.white}}>WhatsApp</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5FCFF',
        paddingTop: 0
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        // backgroundColor: '#F5FCFF',
        paddingHorizontal: 10,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    active: {
        // backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        // backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        // backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },

    row: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    item: {
        flex: 1,
        height: 120,
        paddingVertical: 20,
        borderColor: colors.grey,
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 5,
        backgroundColor: colors.theme
    },
});