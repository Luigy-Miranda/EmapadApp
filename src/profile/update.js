
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TextInput
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'

export class UPDATE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correo_xd: '',


        };
      }




    render() {



        const Asincronica_Enviar = async() => {
            const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
            const correo = this.state.correox;
            const celular = this.state.phonex;
            const obj = {"correo" : correo, "celular" : celular,"cedula" : cedula}
            await axios.post('http://181.196.241.243/Manager/usuario.php/',obj);
            this.props.navigation.navigate('profile');
            }
        return (
            <ImageBackground   source={require('../assets/fondo.jpg')} ssstyle={styles.container}>
            <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={{height:'100%'}} >
              <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                <View style={styles.ban}>


                <View style={styles.innerx}>
                        <Text style={styles.back}>Presione el dato que desee editar.</Text>
                        </View>
                <View style={styles.bottom}>

                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemIneer}>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="email" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Correo </Text>
                            </View>
                            <View style={styles.te}>

                                    <View style={styles.inner}>

                            <TextInput
                                style={styles.input}
                                placeholder={email}
                                onChangeText={(correox) => {this.setState({correox:correox})}}

                            />

                                        </View>


                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="email" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Celular </Text>
                            </View>
                            <View style={styles.te}>
                            <TextInput
                                style={styles.input}
                                placeholder={phone}
                                keyboardType="numeric"
                                onChangeText={(phonex) => {this.setState({phonex:phonex})}}

                            />

                            </View>
                            <TouchableOpacity style={styles.button} onPress={Asincronica_Enviar} > 
                                <MaterialCommunityIcons name="sync-circle" color='#fff' size={30} />
                                <Text style={{color:'#fff',fontWeight:'bold'}}>Actualizar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </LinearGradient>
            </ImageBackground>
        );
    }
}



const styles = StyleSheet.create(
    {
        container:{
            flex:1,

        },
        top:{
            flexDirection:'row',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor:'rgba(255,255,255, 0.5)',
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            paddingBottom: 10

        },
        innerx:{
            padding: 24,
            marginBottom:10,
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(215, 223, 227, 1)",
            padding: 10,
            borderRadius:10,
            color: '#FFFFFF',
            height: 40,
        },
        ima:{
            alignItems:'center',
            alignItems:'flex-end',

        },
        te: {
            flexDirection: 'row',
            padding:5,
            borderColor:'#fff',
          },
        button:{
            flexDirection: "row", 
            alignItems: "center",
            marginTop:20,
            backgroundColor: "#22BB00",
           
            padding: 5,
            justifyContent:'center',
            borderRadius:10,
            color: '#FFFFFF',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 11,
            },
            shadowOpacity: 0.55,
            shadowRadius: 14.78,

            elevation: 22,
        },
        Icons:{
            width:25,
            height:25,
        },
        ban:{
            paddingLeft: 15,
            width:Dimensions.get ('window').width-30,
        },


        center:{
            height:'10%',
            backgroundColor:'rgba(255,255,255, 1)',
            borderRadius: 20

        },
        bottom:{
            marginTop:15,
            width:Dimensions.get ('window').width-30,
            height:'60%',
            flexDirection:'row',
            paddingLeft: 15,
            borderRadius: 10,
        },
        bottomItem:{
            flex:1,
        },
        nombre:{
            fontWeight: 'bold',
            fontSize:20,
            marginTop: 10,

        },
        bottomItemIneer:{
            flex:1,
            height:Dimensions.get ('window').height/2,
        },
        texti:{
            flexDirection: 'row',
            marginTop: 10,



        },
        Logo:{
            width:30,
            height:30,
        },
        SubText:{
            fontSize:20,
            color: '#007AA5',
            fontWeight: 'bold',

        },

        input:{
            color: '#007AA5',
            fontSize:20,
            fontWeight: 'bold',
            padding:5,
            width:300,
            borderWidth:2,
            borderRadius:5,
            backgroundColor:'#fff',
            borderColor:'#fff'

        },
        textotitulo:{
            fontSize:20,
            fontWeight: 'bold',
            padding: 1,
            color:'#fff'

        },
        com:{
            fontSize:15,
            fontWeight: 'bold',
            color: '#000000',
            marginTop: '5%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)
