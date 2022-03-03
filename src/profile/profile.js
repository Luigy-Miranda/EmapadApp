
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

///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'




export class profile extends Component {
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
        const respuesta = await axios.get('http://clientes.emapad.gob.ec/Manager/usuario.php?id='+cedula);   
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
                        <Image style={styles.profileimage} source={require('../assets/icons/user.png')}/> 
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('update')}
                            >
                            <Text>Actualizar datos </Text>
                            <Image style={styles.Icons} source={require('../assets/icons/edit.png')}/>          

                        </TouchableOpacity>            
                    </View>
                <View style={styles.top}>
                    <Text style={styles.nombre}>{this.state.setData['NOMBRES']}</Text>
                </View>
                <View style={styles.bottom}>
                        <View style={styles.bottomItemIneer}>
                            <View style={styles.texti}> 
                            <Image style={styles.Logo} source={require('../assets/icons/number.png')}/> 
                                <Text style={styles.textotitulo}> Numero del Servicio: </Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['SERVICIO']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <Image style={styles.Logo} source={require('../assets/icons/ubication.png')}/> 
                                <Text style={styles.textotitulo}> Direccion:</Text>
                            </View>
                            <View style={styles.texti}>
                                    <Text style={styles.SubText}>{this.state.setData['DIRECCION']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <Image style={styles.Logo} source={require('../assets/icons/email.png')}/> 
                                <Text style={styles.textotitulo}> Correo: </Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['correo']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <Image style={styles.Logo} source={require('../assets/icons/phone.png')}/> 
                                <Text style={styles.textotitulo}> Celular:</Text>
                            </View>
                            <View style={styles.texti}>
                                <Text style={styles.SubText}>{this.state.setData['celular']}</Text>
                            </View>
                            <View style={styles.texti}>
                                <Image style={styles.Logo} source={require('../assets/icons/location.png')}/> 
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
            flexDirection:'row',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor:'rgba(255,255,255, 0.5)',
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            paddingBottom: 10

        },  
        ima:{
            alignItems:'flex-end',
            flexDirection:'row',
            flexWrap: 'wrap',

        },
        Icons:{
            width:25,
            height:25,
        },  
        button:{
            alignItems: "center",
            backgroundColor: "rgba(73, 174, 249,1)",
            padding: 10,
            margin: 12,
            borderRadius:8,
            borderWidth:1,
            borderColor:'#FFFFFF',
            flexDirection: 'row',     

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
            marginTop:10 ,
            width:Dimensions.get ('window').width-30,
            maxHeight:'70%',
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
       
        }, 
        texti:{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom:2

        
        },
        Logo:{
            width:30,
            height:30,
        },
        SubText:{
            fontSize:20,
            color: '#FFFFFF',
            fontWeight: 'bold',

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