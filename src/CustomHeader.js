import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const {Value, timing} = Animated
export class CustomHeader extends Component {
    render() {
        let {navigation, isHome, title} = this.props
        return (
            <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {
                isHome ?
                <TouchableOpacity style={{flexDirection:'row', marginLeft:5, alignItems:'center'}} onPress={() => navigation.openDrawer()}>
                    <MaterialCommunityIcons name="reorder-horizontal" color='#FFFFFF' size={30} />
                    <Text style={{color:'#FFFFFF',fontWeight:'bold', fontSize:18}}>Menu</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center', padding:10}}
                onPress={() => navigation.goBack()}
                >
                          <MaterialCommunityIcons name="chevron-left-circle" color='#fff' size={30} />

                    <Text style={{fontWeight:'bold', color:'#FFFFFF', marginLeft:10}}>Atras</Text>
                </TouchableOpacity>
                }
            </View>  
                
                <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>



                </View>
                <View style={{flex: 1}}></View>
            </View>
  )
    }
}


const styles = StyleSheet.create(
    {
        Logo:{
            width:123,
            height:24,
        },

    }
)




