
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    TextInput,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform
    , Button
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'

export class update extends Component {
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
            await axios.post('http://clientes.emapad.gob.ec/Manager/usuario.php/',obj);
            this.props.navigation.navigate('profile');
            }
        return (
            <ImageBackground source={require('../assets/wallpaper_factura.png')} style={styles.container} resizeMode="cover" >

                <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                <View style={styles.ban}>


                <View style={styles.innerx}>
                        <Text style={styles.back}>Presione el dato que desee editar.</Text>
                        </View>
                <View style={styles.bottom}>

                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemIneer}>
                            <View style={styles.texti}>
                                <Image style={styles.Logo} source={require('../assets/icons/email.png')}/>
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
                                <Image style={styles.Logo} source={require('../assets/icons/phone.png')}/>
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
                            <TouchableOpacity
                                style={styles.button}
                                onPress={Asincronica_Enviar}
                                >
                                <Text>Aceptar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

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
            backgroundColor: "rgba(232, 232, 232,0.5)",
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
            marginLeft:10,
          },
        button:{
            alignItems: "center",
            backgroundColor: "rgba(73, 174, 249,1)",
            padding: 10,
            margin: 12,
            borderRadius:8,
        },
        Icons:{
            width:25,
            height:25,
        },
        ban:{
            paddingLeft: 15,
            width:Dimensions.get ('window').width-30,
        },
        profileimage:{
            width: 75,
            height: 75,
            borderRadius: 100,
            borderWidth: 4,
            backgroundColor: '#eee',
            borderColor: '#FFFFFF',

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
            flexWrap: 'wrap',
            paddingLeft: 15,
            borderRadius: 10,
            backgroundColor:'rgba(232, 232, 232,0.5)',
        },
        bottomItem:{
            flex:1,
            height: 100
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
            borderWidth:1,
            borderRadius:5

        },
        textotitulo:{
            fontSize:20,
            fontWeight: 'bold',
            padding: 1,

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
