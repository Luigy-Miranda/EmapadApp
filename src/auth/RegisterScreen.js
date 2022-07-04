
import React, {Component, useState} from 'react'
import { Text, View,TouchableOpacity,ImageBackground , Image,Dimensions,StyleSheet,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import axios from 'axios'
import {CustomHeader} from '../index'
import * as Notifications from 'expo-notifications';
import * as Permission from "expo-permissions";
import variables from '../global/variables.js';
import { LinearGradient } from "expo-linear-gradient"; 

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export class RegisterScreen extends React.Component {


        state = {
            setData: [],
            getcedula:'',
            getcorreo:'',
            getpass:'',
            validated : false,
            toke: ''
        }
     
    render() {
      const register = async() => {
        const token = (await Notifications.getExpoPushTokenAsync()).data;

        const cedula = this.state.getcedula;
        const correo = this.state.getcorreo;
        const password = this.state.getpass;
        const obj = {"cedula" : cedula,"correo" : correo, "password" : password, "token":token}
        const respuesta = await axios.post('http://181.196.241.243/Manager/usuario.php/',obj);
        const validacion = respuesta.data.msg;
        this.props.navigation.navigate('Login')
        alert(validacion);
        
      } 


        return (
        <ImageBackground  source={require('../assets/fondo.jpg')} style={styles.con} >
            <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={{height:'100%'}} >
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
                <CustomHeader title="Registrate" navigation={this.props.navigation} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.PageTitle}>Registrate!</Text>
                        <Text style={{fontSize:17,color:'#fff', fontWeight:'bold', marginBottom:10}}>Recuerda que solo puedes registrarte con el número de cedula del propietario de la guía de Agua Potable.</Text>
                        
                        <TextInput
                            style={styles.input}
                            onChangeText = {(value) => this.setState ({getcedula: value})}
                            placeholder="Ingrese su numero de Cedula"
                            keyboardType="numeric"
                            placeholderTextColor="#000"

                        />
                        <TextInput
                            style={styles.input}
                            onChangeText = {(value) => this.setState ({getcorreo: value})}
                            placeholder="Ingrese su correo"
                            placeholderTextColor="#000"

                        />
                        <TextInput
                            style={styles.input}
                            onChangeText = {(value) => this.setState ({getpass: value})}
                            secureTextEntry
                            placeholder="Ingrese una contraseña"
                            placeholderTextColor="#000"

                        />
                        <TouchableOpacity style={styles.button} onPress={register}>
                            <MaterialCommunityIcons name="account-plus-outline" color='#fff' size={30} />
                            <Text style={{fontWeight:'bold', marginLeft:10,fontSize:17, color:'#fff'}}>Registrarse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.back}> Ya tengo una cuenta</Text>
                        </TouchableOpacity>

            
            </View>
  
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
        </LinearGradient>
    </ImageBackground>
        );
    }
}




const styles = StyleSheet.create(
    {
        con:{
            flex: 1,
        },
        container:{
            paddingLeft: 15,
            height: Dimensions.get ('window').height-200,
  
        },
        logo:{
            width: 30,
            height: 30
        },
        inner:{    
            padding: 24,
            flex: 1,
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
        }, 
            

        button:{
            flexDirection: "row", 
            alignItems: "center",
            backgroundColor: "#22BB00",
            padding: 10,
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.10,
            shadowRadius: 3.84,

            elevation: 10,
            
        },
 
        input: {
            borderColor: "#fff",
            borderWidth: 2,
            marginBottom: 20,
            padding: 10,
            borderRadius:5,
            fontSize:18,
            color: '#000',
            fontWeight:'bold',
            backgroundColor:'rgba(255,255,255,1)'
          },
          
          PageTitle:{
            fontSize:25,
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: 10
        },
        back:{
            color: '#FFFFFF',
            marginTop:30,
            fontSize:18,
            fontWeight:'bold'

        }
    }
)


