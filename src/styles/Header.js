import { ViewPager } from "@shankarmorwal/rn-viewpager";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from "../consts/color";
export const Header = () => {
    return (
        <View style={{backgroundColor: colors.theme}}>
        <View style={{ backgroundColor: colors.theme, padding: 10, flexDirection: 'row' }}>
            <Text style={{ color: colors.white, fontSize: 20, marginHorizontal: 10, flex: 1 }}>Carbecho</Text>
            <MaterialIcons
                name="car-rental"
                color={colors.white}
                size={28}
                style={{ marginHorizontal: 30 }}
            />
            <Ionicons
                name="notifications-sharp"
                color={colors.white}
                size={25}
                style={{ marginHorizontal: 10 }}
            />
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, borderWidth: 1, borderRadius: 5, borderColor: colors.theme, padding: 5,backgroundColor:colors.white,marginBottom:15,marginTop:5 }}>
                <Feather
                    name="search"
                    color={colors.theme}
                    size={22}
                    style={{ margin: 5 }}
                />
                <Text style={{ fontSize: 16, margin: 5 }}>Search car by model,year and name...</Text>
            </View>

        </View>

    );
}