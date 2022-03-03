import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';


const {Value, timing} = Animated
export class CustomHeader extends Component {
    render() {
        let {navigation, isHome, title} = this.props
        return (
            <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {
                isHome ?
                <TouchableOpacity style={{flexDirection:'row', marginLeft:5}} onPress={() => navigation.openDrawer()}>
                    <Image style={{width: 30, height: 30, marginRight:5}}
                    source={require('./assets/icons/menu.png')}
                    resizeMode="contain"/>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold', fontSize:18}}>Menu</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity 
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => navigation.goBack()}
                >
                    <Image style={{width: 30, height: 30, marginLeft: 5}}
                    source={require('./assets/icons/back.png')}
                    resizeMode="contain"
                    />
                    <Text style={{fontWeight:'bold', color:'#FFFFFF'}}>Atras</Text>
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




