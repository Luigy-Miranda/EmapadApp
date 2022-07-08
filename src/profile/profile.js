
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Button
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from "expo-linear-gradient"; 

///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'




export class PROFILE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: []
        };
      }
    obtener (){
        //const cedula = this.state.user;
        
        const consul = async() => {
        const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
        const respuesta = await axios.get('http://181.196.241.243/Manager/usuario.php?id='+cedula);   
        const v = respuesta.data;
        this.setState({setData : respuesta.data});
        email=respuesta.data.correo;
        phone=respuesta.data.celular;
    }
    consul()

    }

    render() {
        this.obtener()

        return (
            <ImageBackground   source={require('../assets/fondo.jpg')} ssstyle={styles.container}>
                <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={{height:'100%'}} >
   
                <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                <View style={styles.ban}>
                    <View style={styles.ima}>
                        <MaterialCommunityIcons name="account-circle" color='#fff' size={100} />
                        <View style={styles.top}>
                            <Text style={styles.nombre}>{this.state.setData['NOMBRES']}</Text>
                                <Text style={styles.SubText}>{this.state.setData['SECDES']}</Text> 
                            
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('UPDATE')}
                                >
                                <MaterialCommunityIcons name="content-save-edit-outline" color='#fff' size={30} />  
                                <Text style={{color:'#fff', fontSize:15, marginLeft:10}}>Actualizar datos</Text>
                            </TouchableOpacity>       
                        </View>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize:20,color: '#FFFFFF', paddingLeft:15}}>Datos personales del cliente</Text>

                    <View style={styles.bottom}>
                        <View style={styles.bottomItemIneer}>
                            <View style={styles.texti}> 
                                <MaterialCommunityIcons name="shield-check" color='#fff' size={30} />
                                <View style={styles.contenedor_texto}>
                                    <Text style={styles.textotitulo}> Número del Servicio: </Text>
                                    <Text style={styles.SubText}> {this.state.setData['SERVICIO']}</Text>
                                </View>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="map-marker-account" color='#fff' size={30} />
                                <View style={styles.contenedor_texto}>
                                    <Text style={styles.textotitulo}> Dirección:</Text>
                                    <Text style={styles.SubText}>{this.state.setData['DIRECCION']}</Text>
                                </View>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="email" color='#fff' size={30} />
                                <View style={styles.contenedor_texto}>
                                    <Text style={styles.textotitulo}> Correo: </Text>
                                    <Text style={styles.SubText}> {this.state.setData['correo']}</Text>
                                </View>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="phone" color='#fff' size={30} />
                                <View style={styles.contenedor_texto}>
                                    <Text style={styles.textotitulo}> Celular:</Text>
                                    <Text style={styles.SubText}> {this.state.setData['celular']}</Text>
                                </View>
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
            justifyContent: 'center',
            flex:1,
            borderRadius: 10,
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            paddingBottom: 10

        },  
        ima:{
            flexDirection:'row',
            alignItems:'center',

        },
 
        button:{
            alignItems: "center",
            textAlign:'center',
            backgroundColor: "rgba(1, 5, 9,0.6)",
            padding: 5,
            marginTop:10,
            borderRadius:8,
            borderWidth:1,
            borderColor:'#FFFFFF',
            flexDirection: 'row',     
 

        },
        ban:{
            flex:1,
            width:Dimensions.get ('window').width-30,

        },


        center:{
            height:'10%',
            backgroundColor:'rgba(255,255,255, 1)',
            borderRadius: 20

        },
        bottom:{
            marginTop:10 ,
            width:Dimensions.get ('window').width,
            flexDirection:'row',
            paddingLeft: 15,
            flex:1,

        },
        bottomItem:{

        },
        nombre:{
            fontWeight: 'bold',
            fontSize:20,
            color: '#FFFFFF',

        },  
        bottomItemIneer:{
            flex:1,

        }, 
        texti:{
            flexDirection: 'row',
            marginTop: 2,
            width:Dimensions.get ('window').width-30,
            marginBottom:2,
            color: '#fff',
            borderBottomColor:'#fff',
            borderBottomWidth:2,
            alignItems:'center'
        
        },
        contenedor_texto:{
            marginBottom:2
        },
        Logo:{
            width:30,
            height:30,
        },
        SubText:{
            fontSize:20,
            color: '#E8E8E8',

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