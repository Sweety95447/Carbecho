import React from 'react';
import { View, Image, StatusBar} from 'react-native';
import { Container } from '../styles/wrapper';
import { Images } from '../styles/image';
import { colors } from '../consts/color';
const Splash = (props) => {
    setTimeout(() => {
        props.navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }]
       })
    }, 3000);
    return (
            <View style={Container.container}>
                <StatusBar
                    backgroundColor={colors.theme}
                />
                <Image
                    resizeMode='contain'
                    style={Images.image}
                    source={require('../assets/logo.png')}
                />
            </View>
    );
}
export default Splash;