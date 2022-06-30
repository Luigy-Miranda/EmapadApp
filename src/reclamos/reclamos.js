import React, {Component, useState}  from 'react'
import { Text, View, SafeAreaView,Linking, TouchableOpacity, StyleSheet, Button, Image, TextInput, Dimensions, ImageBackground, } from 'react-native';
import {CustomHeader} from '../index'
import axios from 'axios';
import { KeyboardAvoidingView } from 'react-native';
import variables from '../global/variables.js';
import CheckBox from 'react-native-check-box'


export class RECLAMOS extends Component {
    state = {
        descripcion:'',
        isChecked: false,
        isChecked2: false,
        isChecked3: false,
        isChecked4: false,
        isChecked5: false,
    }
    render() {
        const enviar = async() => {
            const cedula = foo;
            const messague = this.state.descripcion;
            const obj = {"descripcion" : messague, "cedula": cedula}
            const respuesta = await axios.post('http://181.196.241.244/administrador/PHP_Api/Back-end/usuario.php/',obj);
            const validacion = respuesta.data;
            Linking.openURL(validacion);
          } 
        return (
            <ImageBackground  source={require('../assets/wallpaper_factura.png')} style={styles.container}>
            <CustomHeader title="Reclamos o Sugerencias" navigation={this.props.navigation}/>
         

                <View style={styles.i}>
                    <Image style={styles.Logo} source={require('../assets/lo.png')}/>
                </View>
                
                <View style={styles.container_2}>

                <Text style={styles.PageTitle}>Selecciona tu petición. Pronto te atenderemos!</Text>
                <View style={styles.bloque}>
                <CheckBox
                    style={styles.con}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked,
                        descripcion: 'No tengo agua en mi sector.'
                    })
                    }}
                    isChecked={this.state.isChecked}
                    leftText={"No tengo agua en mi sector."}
                    />  
                    <CheckBox
                    style={styles.con}
                    onClick={()=>{
                    this.setState({
                        isChecked2:!this.state.isChecked2,
                        descripcion: 'Tengo baja presión de agua.'
                    })
                    }}
                    isChecked={this.state.isChecked2}
                    leftText={"Tengo baja presión de agua."}
                    /> 
                    <CheckBox
                    style={styles.con}
                    onClick={()=>{
                    this.setState({
                        isChecked3:!this.state.isChecked3,
                        descripcion: 'Cómo puedo realizar limpieza de alcantarilla?'

                    })
                    }}
                    isChecked={this.state.isChecked3}
                    leftText={"Cómo puedo realizar limpieza de alcantarilla?"}
                    /> 
                    <CheckBox
                    style={styles.con}
                    onClick={()=>{
                    this.setState({
                        isChecked4:!this.state.isChecked4,
                        descripcion: 'Denuncio una fuga de agua.'
                    })
                    }}
                    isChecked={this.state.isChecked4}
                    leftText={"Denuncié fuga de agua."}
                    /> 
                    <CheckBox
                    style={styles.con}
                    onClick={()=>{
                    this.setState({
                        isChecked5:!this.state.isChecked5,
                        descripcion: 'Solicito una revisión de guía.'
                    })
                    }}
                    isChecked={this.state.isChecked5}
                    leftText={"Solicito una revisión de guía."}
                    /> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={enviar}
                    >
                    <Text>Enviar petición</Text>
                </TouchableOpacity>
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
            color: '#000000',
        },
        container_2:{
            paddingLeft: 15
        },
        bloque:{
            flexWrap: 'wrap',
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
            height:Dimensions.get ('window').height/2,
            backgroundColor: "rgba(255, 255, 255,1)",
            paddingLeft: 15
        },
        Logo:{

            width :200,
            height: 150,
        },
        i:{
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'

        },
        con:{
            flex: 1, 
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            marginTop:10,
            borderRadius: 15,
        },
        button:{
            alignItems: "center",
            backgroundColor: "rgba(0, 191, 0,0.8)",
            padding: 10,
            margin: 12,
            borderRadius:8,
            justifyContent: 'center'
        },
        input: {
            borderWidth: 1,
            borderRadius:8,
            width:Dimensions.get ('window').width /5,
            color: '#000000'
          },
          sugerencias:{
            paddingRight: '30%',
            paddingLeft: '30%',
            borderWidth: 1,
            borderRadius:8,
            borderColor: '#000000',
            color: '#000000'

          },
          PageTitle:{
            fontSize:22,
            alignItems: 'center',
            fontWeight: 'bold',
            padding: 10,
            color: '#FFFFFF'
        },
    }
)