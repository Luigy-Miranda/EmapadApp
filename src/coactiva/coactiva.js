
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    SectionList,
    ScrollView
} from "react-native";
import {CustomHeader} from '../index'
import React, { useState, useEffect, useRef, Component } from 'react';
import axios from 'axios';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY_NAME = 'cedula_usuario'


const DATA = [
    {
      title: "¿Que es el proceso de Coactiva?",
      data: ["Es la aplicación de la potestad administrativa respecto de una obligación que los ciudadanos o extranjeros contraen por varias circunstancias en un estado determinado."]
    },
    {
      title: "¿Que ocurre si entro a Coactiva?",
      data: ["EMAPAD-EP envía notificaciones cuando entra al proceso, en caso de no acercarse a la empresa despues de la segunda notificación se aplicara la medida de retención de Cuentas Bancarias."]
    },
    {
      title: "¿Que puede hacer para salir de Coactiva?",
      data: ["- Pagando la totalidad de la deuda más costos procesales se levantan las medidas procesales.\n- Si hace un convenio de pago despues de la segunda notificación, no se aplicara retención."]
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

export class coactiva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: [],
            Texto:1,
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
            alignItems:'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor:'rgba(255,255,255, 1)',
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            paddingBottom: 10,


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
        profileimage:{
            width: 75,
            height: 75,
            borderColor: '#FFFFFF',

        },
        title: {
            fontSize: 18,
            color: '#FFFFFF'

          },


        texto:{
            fontSize:15,
            color: '#007AA5',
            fontWeight: 'bold',

        }, 
        item: {
            backgroundColor: "#87AAB7",
            padding: 20,
            marginVertical: 8,
          },
        center:{
            height:'10%',
            backgroundColor:'rgba(255,255,255, 1)',

            borderRadius: 20

        },

        bottomItem:{
            width: '100%',
            height: '60%',

        },
        nombre:{
            fontWeight: 'bold',
            fontSize:15,
            marginTop: 10,
            backgroundColor:'#FFFFFF',
            borderColor:'#000000'
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
        texto:{
            fontSize:15,
            color: '#007AA5',
            fontWeight: 'bold',

        },
        xd:{
            fontSize:20,
            color: '#007AA5',
            fontWeight: 'bold',
        },
        bottom:{

            borderRadius: 10,
            backgroundColor:'rgba(255,255,255, 1)',
            width:Dimensions.get ('window').width-30,
            paddingLeft: 15,
            marginTop:2,
            paddingBottom: 10,
        },
        bottom1:{
            alignItems:'center',
            justifyContent: 'center',
            borderRadius: 50,
            backgroundColor:'rgba(255,255,255, 1)',
            width:Dimensions.get ('window').width-30,
            paddingBottom: 10,
            marginTop: 13
        },
        button:{
            borderColor: '#0087C1',
            borderWidth:2,
            marginTop:15,
            width:Dimensions.get ('window').width-60,
            paddingLeft: 15,
            backgroundColor:'rgba(0,122,165, 0.5)',
            flexDirection: "row",
            paddingBottom: 10

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
        },
        header: {
            fontSize: 18,
            color: "#007AA5",
            fontWeight: 'bold',
          },
    }
)
