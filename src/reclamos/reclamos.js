import React, {Component, useState}  from 'react'
import { Text, View, SafeAreaView,Linking, TouchableOpacity, StyleSheet, Button, Image, TextInput, Dimensions, ImageBackground, } from 'react-native';
import {CustomHeader} from '../index'
import axios from 'axios';
import { KeyboardAvoidingView } from 'react-native';
import variables from '../global/variables.js';
import CheckBox from 'react-native-check-box'
import { LinearGradient } from "expo-linear-gradient"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
            <ImageBackground   source={require('../assets/fondo.jpg')} ssstyle={styles.container}>
                <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={{height:'100%'}} >
                <CustomHeader title="Reclamos o Sugerencias" navigation={this.props.navigation}/>
                    <View style={styles.container_2}>
                        <Text style={styles.PageTitle}>Selecciona tu petición. Pronto te atenderemos tu requerimiento o reclamo.</Text>
                        <View style={styles.bloque}>
                            <CheckBox
                                style={styles.con}
                                onClick={()=>{
                                this.setState({
                                    isChecked:!this.state.isChecked,
                                    descripcion: 'No tengo agua en mi sector.'
                                })
                                }}
                                checkBoxColor='#fff'
                                isChecked={this.state.isChecked}
                                rightText={"No tengo agua en mi sector."}
                                rightTextStyle={{color:'#fff', fontSize:20, fontWeight:'bold'}}

                            />  
                            <CheckBox
                                style={styles.con}
                                onClick={()=>{
                                this.setState({
                                    isChecked2:!this.state.isChecked2,
                                    descripcion: 'Tengo baja presión de agua.'
                                })
                                }}
                                checkBoxColor='#fff'
                                isChecked={this.state.isChecked2}
                                rightText={"Tengo baja presión de agua."}
                                rightTextStyle={{color:'#fff', fontSize:20, fontWeight:'bold'}}

                            /> 
                            <CheckBox
                                style={styles.con}
                                onClick={()=>{
                                this.setState({
                                    isChecked3:!this.state.isChecked3,
                                    descripcion: 'Cómo puedo realizar limpieza de alcantarilla?'

                                })
                                }}
                                checkBoxColor='#fff'
                                isChecked={this.state.isChecked3}
                                rightText={"Cómo puedo realizar limpieza de alcantarilla?"}
                                rightTextStyle={{color:'#fff', fontSize:20, fontWeight:'bold'}}

                            /> 
                            <CheckBox
                                style={styles.con}
                                onClick={()=>{
                                this.setState({
                                    isChecked4:!this.state.isChecked4,
                                    descripcion: 'Denuncio una fuga de agua.'
                                })
                                }}
                                checkBoxColor='#fff'
                                isChecked={this.state.isChecked4}
                                rightTextStyle={{color:'#fff', fontSize:20, fontWeight:'bold'}}
                                rightText={"Denuncié fuga de agua."}
                            /> 
                            <CheckBox
                                style={styles.con}
                                onClick={()=>{
                                this.setState({
                                    isChecked5:!this.state.isChecked5,
                                    descripcion: 'Solicito una revisión de guía.'
                                })
                                }}
                                checkBoxColor='#fff'
                                isChecked={this.state.isChecked5}
                                rightTextStyle={{color:'#fff', fontSize:20, fontWeight:'bold'}}
                                rightText={"Solicito una revisión de guía."}
                            /> 

                        </View>
                        <TouchableOpacity style={styles.button} onPress={enviar} >
                            <Text style={{fontSize:15, fontWeight:'bold', color:"#fff", marginRight:10}}>Enviar petición</Text>
                            <MaterialCommunityIcons name="send" color='#fff' size={20} />
                        </TouchableOpacity>
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
        container_2:{
            paddingLeft: 15,
            flex:1
        },
        bloque:{
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
            flex:1,
            borderTopColor:'#fff',
            borderTopWidth:2,
            borderBottomWidth:2,
            borderBottomColor:'#fff'
  
        },

        i:{
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'
        },
        con:{
            flex: 1, 
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',

        },
        button:{
            alignItems: "center",
            flexDirection:'row',
            backgroundColor: "rgba(0, 191, 0,1)",
            padding: 10,
            marginLeft:10,
            marginRight:20,
            marginTop:10,
            marginBottom:10,
            borderRadius:8,
            borderColor:'#fff',
            justifyContent: 'center',
            color: '#FFFFFF',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 11,
            },
            shadowOpacity: 0.7,
            shadowRadius: 14.78,

            elevation: 22,
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