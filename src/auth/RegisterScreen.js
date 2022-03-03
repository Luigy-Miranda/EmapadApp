
import React, {Component, useState} from 'react'
import { Text, View,TouchableOpacity,ImageBackground , Image,Dimensions,StyleSheet,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import axios from 'axios'
import {CustomHeader} from '../index'
import * as Notifications from 'expo-notifications';
import * as Permission from "expo-permissions";
import variables from '../global/variables.js';

const getToken = async() => {

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  tokens = token;
  return token;
}

export class RegisterScreen extends React.Component {

  componentDidMount() {
    getToken();
    
  }
        state = {
            setData: [],
            getcedula:'',
            getcorreo:'',
            getpass:'',
            validated : false,
        }
     
    render() {
      const register = async() => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.getcorreo)===true) {
        const cedula = this.state.getcedula;
        const correo = this.state.getcorreo;
        const password = this.state.getpass;
        const token = tokens;
        const obj = {"cedula" : cedula,"correo" : correo, "password" : password, "token":token}
        const respuesta = await axios.post('http://clientes.emapad.gob.ec/Manager/usuario.php/',obj);
        const validacion = respuesta.data.msg;
        this.props.navigation.navigate('Login')
        alert(validacion);
        } else {
            alert('Correo no valido');
        }
      } 


        return (
            <ImageBackground  source={require('../assets/wallpaper_factura.png')} style={styles.con} >

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <CustomHeader title="Registrate" navigation={this.props.navigation} />

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.inner}>
            <Text style={styles.PageTitle}>Registrate!</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setState ({getcedula: value})}
                        placeholder="Numero de Cedula"
                        keyboardType="numeric"
                    />
                
                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setState ({getcorreo: value})}
                        placeholder="Correo"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setState ({getpass: value})}
                        secureTextEntry
                        placeholder="Contraseña"
                    />
                <TouchableOpacity
                style={styles.button}
                onPress={register}   
                >
                <Image style={styles.logo} source={require('../assets/icons/register.gif')}/> 
                <Text>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                <Text style={styles.back}> Ya tengo una cuenta</Text>
                </TouchableOpacity>

            
            </View>
  
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
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
            backgroundColor:'rgba(255,255,255, 0.5)',
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
            justifyContent: "space-around"
        }, 
            

        button:{
            flexDirection: "row", 
            alignItems: "center",
            backgroundColor: "rgba(215, 223, 227, 1)",
            padding: 10,
            borderRadius:10,
            color: '#FFFFFF',
            height: 40,
        },
 
        input: {
            height: 40,
            borderColor: "#134553",
            borderBottomWidth: 2,
            marginBottom: 1,
            padding: 10,
            borderRadius:8,
          },
          
          PageTitle:{
            fontSize:25,
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: 10,
            

        },
        back:{
            color: '#FFFFFF',
        }
    }
)


