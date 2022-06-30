
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Linking,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Button
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

////Variables en Memoria
const STORAGE_KEY_NAME = 'cedula_usuario'



export class Facturas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: [],

        };
      }
    obtener (){
        const consul = async() => {
        const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
        const cod = cedula;
        const obj = {"codigo" : cod}
        const respuesta = await axios.post('http://clientes.emapad.gob.ec/Manager/Oracle/',obj);
        this.setState({setData : respuesta.data});

    }
    consul()

    }


    render() {
        const generar = async() => {
            const messague =  await AsyncStorage.getItem(STORAGE_KEY_NAME);
            //alert(validacion);
            Linking.openURL('http://clientes.emapad.gob.ec/Manager/usuario.php?planilla='+messague);
          }
        this.obtener()


        return (
                <ImageBackground  source={require('../assets/wallpaper_factura.png')} style={styles.container} >
                    <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                    <ScrollView>


                        <View style={styles.xd}>
                            <View   style={styles.botonxd}>
                                <TouchableOpacity style={styles.button} onPress={generar}>
                                    <Text style={styles.tex}></Text>
                                    <Image style={styles.pdf} source={require('../assets/icons/pdf.png')}/>
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.guardian} source={require('../assets/guardian.png')}/>
                        </View>


                        <Animatable.View animation="fadeInDown"style={styles.subcontainer}>
                            <View style={styles.barner}>
                                <Text style={styles.PageText}> Total a pagar </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.ValorFac}>$ {this.state.setData['TOTAL']}</Text>
                            </View>
                        </Animatable.View>

                        <View style={styles.subcontainer2}>
                            <View style={styles.subcontainermini}>
                                <View style={styles.barner}>
                                    <Text style={styles.PageText}>Planillas pendientes</Text>
                                </View>
                                <View style={styles.otros}>
                                        <Text style={styles.SubText}>{this.state.setData['PLANILLAS']} planillas</Text>
                                </View>

                                <View style={styles.barner}>
                                    <Text style={styles.PageText}>Fecha de pago</Text>
                                </View>
                                <View style={styles.otros}>
                                    <Text style={styles.SubText}>{this.state.setData['FECHA_PAGO']}</Text>
                                </View>
                            </View>
                            <View style={styles.subcontainermini}>
                                <View style={styles.barner}>
                                        <Text style={styles.PageText}>Saldo anterior</Text>
                                </View>
                                <View style={styles.otros}>
                                    <Text style={styles.Consumo}>$ {this.state.setData['SALDO_ANTERIOR']}</Text>
                                </View>
                                <View style={styles.barner}>
                                    <Text style={styles.PageText}>Consumo del mes</Text>
                                </View>
                                <View style={styles.otros}>
                                    <Text style={styles.ValorPendiente}>$ {this.state.setData['CONSUMO_MES']}</Text>
                                </View>
                            </View>
                            </View>
                            <View>
                          
                            <Animatable.View animation="fadeInUp" style={styles.subcontainerx}>
                                <View style={styles.barner}>
                                    <Text style={styles.PageText}>Remisión otorgada</Text>
                                </View>
                                <View style={styles.otros}>
                                    <Text style={styles.ValorFac}>$ {this.state.setData['REMISION']}</Text>
                                </View>
                            </Animatable.View>
				         
                          
             
                          
                        </View>
                    </ScrollView>
 

                </ImageBackground>

        );
    }
}



const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        container1:{
            flex:1
        },
        subcontainer:{
            marginLeft:'5%',
            marginRight:'5%',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            backgroundColor:'rgba(232, 232, 232,0.5)',
            flex:1,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'2%',
            paddingBottom:10,
            paddingTop:10
        },
        subcontainer2:{
            marginLeft:'5%',
            marginRight:'5%',
            borderRadius:10,
            flex:1,
            flexDirection:'row',

        },
        subcontainerx:{
            marginLeft:'5%',
            marginRight:'5%',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            backgroundColor:'rgba(232, 232, 232,0.5)',
            flex:1,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'2%',
            paddingBottom:10,
            paddingTop:10
        },
        subcontainermini:{
            backgroundColor:'rgba(232, 232, 232,0.5)',
            margin:4,
            flex:1,
            padding:10,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',

        },
        xd:{
            flexDirection:'row',
        },
        barner:{
            marginTop: 5,
        },
        otros:{
            paddingLeft:10,
            marginRight:25

        },
        guardian:{
            height:180,
            width:180,
            resizeMode: 'cover',

        },
        pdf:{
            width: 100,
            height: 100,
            resizeMode: 'contain',
        },
        PageText:{
            fontSize:17,
            fontWeight: 'bold',
            color: '#1D4387'

        },
        Consumo:{
            fontSize:17,
            color:'#FFFFFF',
            fontWeight:'bold',
            textAlign:'center',

        },
        tex:{
            fontSize:17,
            color:'#FFFFFF',
            fontWeight:'bold',
            textAlign:'center',


        },
        SubText:{
            fontSize:17,
            color:'#FFFFFF',
            fontWeight:'bold',
            textAlign:'center',


        },

        ValorPendiente:{
            fontSize:17,
            color:'#FFFFFF',
            fontWeight: 'bold',
            textAlign:'center',

        },
        ValorFac:{
            fontSize:17,
            color:'#FFFFFF',
            fontWeight: 'bold',
            
        },


        botonxd:{
            flexDirection:'column-reverse',
        },
        button:{
            padding:'5%',
            marginLeft:'10%',
        }

    }
)
