
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    FlatList,
    SectionList,
    TouchableHighlight,
    ScrollView,StatusBar
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'



const DATA = [
    {
      title: "1. ¿Cuál es el horario de atención de Oficinas de atención a clientes?",
      data: ["Horarios de atención en oficinas de la Cdla. Abel Gilbert 3 y El Recreo 3ra etapa, sector la loma. Lunes a viernes de 8H00 a 17H00."]
    },
    {
      title: "2. ¿Dónde puedo pagar mi planilla de agua?",
      data: ["En canales de recaudación autorizados: \n- WesterUnion\n- Servipagos\n- Facilito\n- Banco Guayaquil\n- Banco del Pichincha\n- Banco del Barrio\n- Banco del Pacifico\n- Produbanco"]
    },
    {
      title: "3. ¿Cómo obtengo el certificado de no adeudar?",
      data: ["Requisitos:\n- Estar al día en sus pagos\n- Copia de cedula (titular de la cuenta)\n- Copia de las escrituras (3 primeras páginas) o copia del predio\n- Pago de tasa administrativa\n- Se entrega el certificado en 48 horas laborables."]
    },
    {
      title: "4. No me llega la planilla a mi domicilio. ¿Qué debo hacer?",
      data: ["- Puede consultarla mediante nuestro sitio web o por medio de la APP de EMAPAD-EP"]
    },
    {
      title: "5. Me cortaron el servicio de agua ¿Qué tiempo demora la reconexión?",
      data: ["Previa la cancelación del total de la deuda, se realizará la reconexión del servicio en un lapso de 48 a 72 horas laborables."]
    }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
export class preguntas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: [],
        };
      }
    obtener (){
        const consul = async() => {
        const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
        const respuesta = await axios.get('http://clientes.emapad.gob.ec/Manager/usuario.php?id='+cedula);   
        const v = respuesta.data;
        this.setState({setData : respuesta.data});
    }
    consul()

    }


    render() {

        this.obtener()


        return (
            <ImageBackground source={require('../assets/wallpaper_factura.png')} style={styles.container} resizeMode="cover" >
 
                <CustomHeader title="Facturas" navigation={this.props.navigation}/>
                <ScrollView>

                <View style={styles.ban}>
                <Text style={styles.texto}>{'Estamos aqui para ayudarte '+this.state.setData['NOMBRES']}</Text>
                <View style={styles.ima}>
                    <Image style={styles.logo_top} source={require('../assets/icons/help.gif')}/> 
                </View>
                <View style={styles.top}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    ></SectionList>
      
                 </View>
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
        top:{

            borderRadius: 10,
            backgroundColor:'rgba(255,255,255, 1)',
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,

        },  
        header: {
            fontSize: 18,
            color: "#007AA5",
            fontWeight: 'bold',
          },
        ima:{
            alignItems:'flex-end',
        },
        logo_top:{            
            width: 150,
            height: 100,},

        ban:{
            paddingLeft: 15,
            width:Dimensions.get ('window').width-30,
        },

        item: {
            backgroundColor: "#87AAB7",
            padding: 20,
            marginVertical: 8,
          },

          title: {
            fontSize: 18,
            color: '#FFFFFF'

          },


        texto:{
            fontSize:15,
            color: '#FFFFFF',
            fontWeight: 'bold',

        }, 
        xd:{
            fontSize:20,
            color: '#007AA5',
            fontWeight: 'bold',
        },

        logo_text:{
            fontSize:18,
            fontWeight: 'bold',
            padding: 1,
        },
        tex:{
            fontSize:18,
            fontWeight: 'bold',
            padding: 5,  
        }
    }
)