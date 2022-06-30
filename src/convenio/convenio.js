
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Linking,
    Dimensions,
    FlatList,
    ScrollView,
    
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

////Variables en Memoria
const STORAGE_KEY_NAME = 'cedula_usuario'



export class CONVENIO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: [],

        };
      }

    

    obtener (){
        const consul = async() => {
        ///const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
        const cod = codigo;
        const obj = {"codigo" : cod}
        const respuesta = await axios.post('http://clientes.emapad.gob.ec/Manager/Oracle/convenios/',obj);
        const v = respuesta.data;
        if (respuesta.data['ANOS'] == "") {
            this.props.navigation.navigate('HomeApp');
            alert('No existe convenio asociado a esta cuenta.');
        }else{
            this.setState({setData : respuesta.data});
        }

    }
    consul()

    }


    render() {

        this.obtener()
        const datos = this.state.setData;



        return (
                <ImageBackground  source={require('../assets/wallpaper_factura.png')} style={styles.container} >
                <CustomHeader title="Facturas" navigation={this.props.navigation}/>

                    <View style={styles.container1}>

                    <View style={styles.xd}>
                    <Image style={styles.guardian} source={require('../assets/lo.png')}/>
                    </View>
                    <Text style={styles.Titulo_con}>Mi convenio</Text>

                                    <View style={styles.xd}>

                                        <View style={styles.xp}>
                                            <Text style={styles.Titulo}>Año</Text>
                                            <FlatList 
                                                data={datos['ANOS']}
                                                renderItem={({item}) => {
                                                    return <Text style={styles.PageText}>{item}</Text>
                                                }}
                                                />
                                        </View>
                                        <View style={styles.xp}>
                                            <Text style={styles.Titulo}>Mes</Text>
                                                <FlatList 
                                                data={datos['MESES']}
                                                renderItem={({item}) => {
                                                    return <View><Text style={styles.PageText}>{item}</Text></View>
                                                }}
                                                />
                                        </View>
                                    <View style={styles.xp}>
                                        <Text style={styles.Titulo}>Valores</Text>
                                                    <FlatList 
                                            data={datos['VALORESS']}
                                            renderItem={({item}) => {
                                                return <View><Text style={styles.PageText}>$ {item}</Text></View>
                                            }}
                                            />
              
                                    </View>
                                    <View style={styles.xp}>
                                        <Text style={styles.Titulo}>Estado</Text>
                                                    <FlatList 
                                            data={datos['ESTADOs']}
                                            renderItem={({item}) => {
                                                return <View><Text style={styles.PageText}>$ {item}</Text></View>
                                            }}
                                            />
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
        container1:{
            justifyContent: 'center',
            alignItems: 'center',

        },
        subcontainer:{
            borderRadius:10,
            backgroundColor:'rgba(232, 232, 232,0.5)',
        },
        xd:{
            flexDirection:'row',

        },

        PageText:{
            fontSize:15,
            fontWeight: 'bold',
            color:'#FFFFFF',

      
        },
        Titulo:{
            fontSize:17,
            fontWeight: 'bold',
            color:'#FFF000'
      
        },
        Titulo_con:{
            fontSize:19,
            fontWeight: 'bold',
            color:'#FFF000',
            marginBottom:2
        },
        guardian:{
            height:100,
            width:100,

        },
        text:{
          color:'#FFFFFF',
          fontSize:20,

          fontWeight:'bold'
        },

        botonxd:{
            flexDirection:'column-reverse'
        },
        te:{
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
        },
        xp:{
            flexDirection:'column',
            borderWidth:2,
            padding:10,
            borderColor:'#FFFFFF'

        }

    }
)
