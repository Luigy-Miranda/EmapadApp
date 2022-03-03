
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Linking,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Button
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        const v = respuesta.data;
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

                    <View style={styles.xd}>
                    <View style={styles.botonxd}>
                    <TouchableOpacity
                            style={styles.button}
                            onPress={generar}
                            >
                    <Text style={styles.tex}></Text>
                    <Image style={styles.pdf} source={require('../assets/icons/pdf.png')}/>

                        </TouchableOpacity>
                    </View>
                    <Image style={styles.guardian} source={require('../assets/guardian.png')}/>


                    </View>
  
                    <View style={styles.subcontainer}>
                            <View style={styles.barner}>
                                    <Text style={styles.PageText}> Fecha de pago: </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.SubText}>{this.state.setData['FECHA_PAGO']}</Text>
                            </View>
                            <View style={styles.barner}>
                                <Text style={styles.PageText}> Planillas pendientes: </Text>
                            </View>
                            <View style={styles.otros}>
                                    <Text style={styles.SubText}>{this.state.setData['PLANILLAS']}</Text>
                            </View>
                            <View style={styles.barner}>
                                    <Text style={styles.PageText}> Saldo anterior: </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.Consumo}>$ {this.state.setData['SALDO_ANTERIOR']}</Text>
                            </View>
                            <View style={styles.barner}>
                                <Text style={styles.PageText}> Consumo del mes: </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.ValorPendiente}>$ {this.state.setData['CONSUMO_MES']}</Text>
                            </View>
                            <View style={styles.barner}>
                                <Text style={styles.PageText}> Remisión otorgada: </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.ValorFac}>$ {this.state.setData['REMISION']}</Text>
                            </View>
                            <View style={styles.barner}>
                                <Text style={styles.PageText}> Total a pagar: </Text>
                            </View>
                            <View style={styles.otros}>
                                <Text style={styles.ValorFac}>$ {this.state.setData['TOTAL']}</Text>
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
        container1:{
            flex:1
        },
        subcontainer:{
            marginLeft:'5%',
            marginRight:'5%',
            padding:'5%',
            borderRadius:10,
            backgroundColor:'rgba(232, 232, 232,0.5)',
        },
        xd:{
            flexDirection:'row',
        },
        barner:{
            marginTop: 5,
        },
        otros:{
            backgroundColor: "#009BDB",
            paddingLeft:10,
            marginRight:25,


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
            fontSize:20,
            fontWeight: 'bold',
            color: '#1D4387'

        },
        Consumo:{
            fontSize:20,
            color:'#FFFFFF',
            fontWeight:'bold',
        },
        tex:{
            fontSize:15,
            color:'#FFFFFF',
            fontWeight:'bold',
            

        },
        SubText:{
            fontSize:20,
            color:'#FFFFFF',
            fontWeight:'bold',

        },

        ValorPendiente:{
            fontSize:20,
            color:'#FFFFFF',
            fontWeight: 'bold',
        },
        ValorFac:{
            fontSize:20,
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
