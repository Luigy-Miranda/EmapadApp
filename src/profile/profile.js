
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
            <ImageBackground source={require('../assets/wallpaper_factura.png')} style={styles.container} resizeMode="cover" >
 
                <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                <View style={styles.ban}>
                    <View style={styles.ima}>
                        <MaterialCommunityIcons name="account-circle" color='#fff' size={100} />
                        <View style={styles.top}>
                            <Text style={styles.nombre}>{this.state.setData['NOMBRES']}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('update')}
                                >
                                <MaterialCommunityIcons name="content-save-edit-outline" color='#fff' size={30} />  
                                <Text style={{color:'#fff', fontSize:15, marginLeft:10}}>Actualizar datos</Text>
                            </TouchableOpacity>       
                        </View>
                    </View>
                    <Text style={styles.nombre}>Datos personales del cliente</Text>

                    <View style={styles.bottom}>
                        <View style={styles.bottomItemIneer}>
                            <View style={styles.texti}> 
                                <MaterialCommunityIcons name="shield-check" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Número del Servicio: </Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['SERVICIO']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="map-marker-account" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Dirección:</Text>
                            </View>
                            <View style={styles.texti}>
                                    <Text style={styles.SubText}>{this.state.setData['DIRECCION']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="email" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Correo: </Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['correo']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="phone" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Celular:</Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['celular']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <MaterialCommunityIcons name="map-outline" color='#fff' size={30} />
                                <Text style={styles.textotitulo}> Zona: </Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['SECDES']}</Text> 
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
            justifyContent: 'center',
            flex:1,
            borderRadius: 10,
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            paddingBottom: 10

        },  
        ima:{
            flexDirection:'row',
            alignItems:'center'

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
            paddingLeft: 15,
            width:Dimensions.get ('window').width-30,
        },


        center:{
            height:'10%',
            backgroundColor:'rgba(255,255,255, 1)',

            borderRadius: 20

        },
        bottom:{
            marginTop:10 ,
            width:Dimensions.get ('window').width-30,
         
            flexDirection:'row',
            paddingLeft: 15,
            borderRadius: 10,
            backgroundColor:'rgba(232, 232, 232,0.2)',
        },
        bottomItem:{
          
        },
        nombre:{
            fontWeight: 'bold',
            fontSize:20,
            color: '#FFFFFF',

        },  
        bottomItemIneer:{
            padding:5
        }, 
        texti:{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom:2,
            color: '#D9D9D9',

        
        },
        Logo:{
            width:30,
            height:30,
        },
        SubText:{
            fontSize:20,
            color: '#BDCCD3',
            fontWeight: 'bold',

        }, 
        textotitulo:{
            fontSize:20,
            fontWeight: 'bold',
            padding: 1,
            color:'#ECECEC'
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