
import React, {Component, useState} from 'react'
import { Text, View,TouchableOpacity,ImageBackground , Image,Dimensions,StyleSheet,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import axios from 'axios'
import {CustomHeader} from '../index'
import variables from '../global/variables.js';
import { LinearGradient } from "expo-linear-gradient"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export class PASSWORD extends React.Component {

        state = {
            setData: [],
            pass:'',

        }
     
    render() {
        const recovery = async() => {
        const cedula = ced;
        const codigo =ran;
        const pass = this.state.pass;
        const obj = {"password" : pass, "dni": cedula,"cod" : codigo}
        const respuesta = await axios.post('http://181.196.241.243/Manager/Recovery/index.php/',obj);
        const validacion = respuesta.data;
        this.props.navigation.navigate('Login');
        } 
    
        return (
            <ImageBackground  source={require('../assets/fondo.jpg')} style={styles.con} >
                <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={{height:'100%'}} >
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
                        <CustomHeader title="Registrate" navigation={this.props.navigation} />
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.inner}>
                                <Text style={styles.PageTitle}>Recuperar contraseña</Text>
                                <Text style={styles.back}>A continuación ingrese su nueva contraseña y presiono continuar.</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText = {(value) => this.setState ({pass: value})}
                                    placeholder="Ingrese su nueva contraseña"
                                    placeholderTextColor="#000"
                                    underlineColorAndroid="transparent"
                                />
                                <TouchableOpacity style={styles.button} onPress={recovery}>
                                    <MaterialCommunityIcons name="account-lock-open-outline" color='#fff' size={30} />
                                    <Text  style={{color:'#fff',fontWeight: 'bold',}}> Continuar</Text>
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
            borderRadius:10,
            width:Dimensions.get ('window').width-30,
            justifyContent: "space-around"
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
                height: 11,
            },
            shadowOpacity: 0.55,
            shadowRadius: 14.78,

            elevation: 22,
        },
 
        input: {
            borderColor: "#fff",
            borderWidth: 2,
            borderRadius:5,
            marginBottom:30,
            fontSize: 20,
            padding:10,
            backgroundColor:'#fff',

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
            marginBottom:30,
            fontSize: 20,
            fontWeight: 'bold',

        }
    }
)


