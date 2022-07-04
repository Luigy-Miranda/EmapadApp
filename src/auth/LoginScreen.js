import React, {Component} from 'react'
import { Text, View, SafeAreaView, ScrollView,TouchableOpacity,Image ,StyleSheet,ImageBackground,TextInput, Alert} from 'react-native';
import axios from 'axios'
import { KeyboardAvoidingView } from 'react-native';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from "expo-linear-gradient"; 



/////Guardado en Memoria 

const STORAGE_KEY_NAME = 'cedula_usuario'



export class LoginScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            user: '',
            pass: '',
            
          };
        }; 
        
        
    render() {   

        
        ///Si ya existe la sesion entrara de one xd
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem(STORAGE_KEY_NAME)
              if(value !== null) {
                this.props.navigation.navigate('HomeApp');
              }
            } catch(e) {
              // error reading value
            }
          }
          getData()
////Autenticacion toda perfecta
    const login_x = async() => {
        const cedula = this.state.user;
        const password = this.state.pass;
        const token = (await Notifications.getExpoPushTokenAsync()).data;

        console.log(token);
        const obj = {"cedula" : cedula, "password" : password, "token" :token}
        const respuesta = await axios.post('http://181.196.241.243/Manager/usuario.php/',obj);
        const validacion = respuesta.data.msg;
        if(validacion == '1'){
            this.props.navigation.navigate('HomeApp');
            foo = cedula; 
            await AsyncStorage.setItem(STORAGE_KEY_NAME, cedula);
        }else{
            alert('Nombre de usuario o contraseña incorrectas.');
        }
    }  

        return (
        <ImageBackground style={styles.container}  source={require('../assets/fondo.jpg')} >
            <LinearGradient colors={["rgba(0, 109, 255,0.8)", "rgba(83, 120, 149,0.8)"]} start={[0.9, 0.9]} style={styles.linearGradient} >
                <KeyboardAvoidingView  behavior="padding"  enabled>
                <View style={styles.subcontenedor}>
                    <Image style={styles.Logo} source={require('../assets/lo.png')}/>
                    <Text style={styles.texto_ba}>Ingresa o registrate con el numero de cedula del propietario de la guía.</Text>
                    <View style={styles.texti}> 
                        <MaterialCommunityIcons name="account-circle" color='#505050' size={30} />
                        <TextInput
                            style={styles.input}
                            autoCapitalize='none'
                            onChangeText={(user) => {this.setState({user:user})}}
                            placeholder="Numero de Cedula"
                            placeholderTextColor="#505050"
                            underlineColorAndroid="transparent"
                            keyboardType="numeric"
                        />
                    </View>   
                    <SafeAreaView  style={styles.texti}>
                        <MaterialCommunityIcons name="key" color='#505050' size={30} />
                        <TextInput
                            style={styles.input}
                            onChangeText={(pass) => {this.setState({pass:pass})}}
                            placeholder="Contraseña"
                            secureTextEntry
                            placeholderTextColor="#505050"
                            underlineColorAndroid="transparent"
                        />
                    </SafeAreaView>             
                    <TouchableOpacity
                        style={styles.button}
                        onPress={login_x}
                    >
                    <Text style={{fontWeight:'bold',fontSize:15}}>Ingresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonregister}
                        onPress={() => this.props.navigation.navigate('Register')}
                        >
                        <Text style={{fontWeight:'bold',fontSize:15}}>Registrarse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Recovery')}
                    >
                        <Text style={styles.back}> ¿Se te olvidó tu contraseña?</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff',fontSize:13, marginTop:20}}>Desarrollado por Luigy Miranda.</Text>
                    <Text style={{color:'#fff',fontSize:13, marginTop:2}}>Copyright © 2022 Emapad-EP.</Text>

                </View>
                

            </KeyboardAvoidingView>

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
        subcontenedor:{
            height:'100%',
            justifyContent: 'center', 
            alignItems: 'center',
            textAlign:'center'
        },
        Logo:{
            width:200,
            height:200,
        },
      
        back:{
            marginTop: 5,
            color: '#fff',
            fontSize: 18,
            fontWeight:'bold'
        },
        texto_ba:{
            color:'#fff',
            fontSize:20,
            fontWeight:'bold',
            justifyContent: 'center', 
            alignItems: 'center',
            textAlign:'center',
            marginLeft:10,
            marginRight:10
            
        },
        back2:{
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            padding:14,
            color: '#808B96',
            fontSize: 12,
            marginBottom:100
        },
        button:{
            alignItems: "center",
            backgroundColor: "rgba(50, 200, 0, 1)",
            color: '#FFFFFF',
            padding: 14,
            width:175,
            margin: 5,
            borderRadius:8,
            fontWeight:'bold'

        },
        buttonregister:{
            alignItems: "center",
            backgroundColor: "rgba(255, 240, 0 ,1)",
            color: 'rgba(0, 99, 0, 0.7)',
            padding: 14,
            width:175,
            borderRadius:8,
        },
        input: {
            height: 40,
            
            borderWidth: 0,
            padding: 10,
            fontSize:18,
            color: '#000',
            width: 255,
           
          },       
        texti:{
            flexDirection: 'row',
            paddingBottom:0,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            borderRadius:8,
            marginTop: 10,
            padding: 5,
            borderColor: '#C0C0C0'
        },
          
          PageTitle:{
            fontSize:25,
            color: '#FFFFFF',
            alignItems: 'center',
            fontWeight: 'bold',
            padding: 10,
            
        },
    }
)