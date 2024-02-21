import React from 'react';
import { View,Text} from 'react-native';
import CardView from 'react-native-cardview';
export const Procedure = () =>{
    return(
      <View style = {{margin:10}}>
          <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={5}>
              <View>
                  <View style={{flexDirection:'row',margin:10}}>
                      <Text style={{flex:1}}>Total Payable</Text>
                      <Text style={{}}>Rs.0</Text>
                  </View>
                  <View style={{width:'100%',height:1,backgroundColor:'grey'}}>       
                  </View>
                  <View style={{flexDirection:'row',margin:10}}>
                      <Text style={{flex:1}}>Account Balance</Text>
                      <Text style={{}}>Rs.0</Text>
                  </View>
                  <View style={{width:'100%',height:1,backgroundColor:'grey'}}>       
                  </View>
                  <View style={{flexDirection:'row',margin:10}}>
                      <Text style={{flex:1}}>Pending Deposit</Text>
                      <Text style={{}}>Rs.0</Text>
                  </View>
              </View>

            
</CardView>
      </View>
    );
}