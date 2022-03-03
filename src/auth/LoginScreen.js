import React, {Component} from 'react'
import { Text, View, SafeAreaView, Linking,TouchableOpacity,Image ,StyleSheet,ImageBackground,TextInput, Alert} from 'react-native';
import axios from 'axios'
import { KeyboardAvoidingView } from 'react-native';
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
const getToken = async() => {

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    tokens = token;
    return token;
  }

/////Guardado en Memoria 

const STORAGE_KEY_NAME = 'cedula_usuario'



export class LoginScreen extends Component {
    componentDidMount() {
        getToken();
        
      }
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
        const token = tokens;
        const obj = {"cedula" : cedula, "password" : password, "token" :token}
        const respuesta = await axios.post('http://clientes.emapad.gob.ec/Manager/usuario.php/',obj);
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
        <ImageBackground style={styles.container}  source={require('../assets/wallpaper_factura.png')} >
            <KeyboardAvoidingView  behavior="padding"  enabled>
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.Logo} source={require('../assets/lo.png')}/>
                <View style={styles.texti}> 
                    <Image style={styles.Icons} source={require('../assets/icons/user.png')}/>         
                    <TextInput
                        style={styles.input}
                        autoCapitalize='none'
                        onChangeText={(user) => {this.setState({user:user})}}
                        placeholder="Numero de Cedula"
                        placeholderTextColor="rgba(255,255,255, 0.9)"
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>   
                <SafeAreaView  style={styles.texti}>
                    <Image style={styles.Icons} source={require('../assets/icons/pass.png')}/>   
                    <TextInput
                        style={styles.input}
                        onChangeText={(pass) => {this.setState({pass:pass})}}
                        placeholder="Contraseña"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255, 0.9)"
                        underlineColorAndroid="transparent"
                    />
                </SafeAreaView>             
     
                <TouchableOpacity
                style={styles.button}
                onPress={login_x}
                >

                <Text>Ingresar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.buttonregister}
                onPress={() => this.props.navigation.navigate('Register')}
                >
                <Text>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Recovery')}
                >
                <Text style={styles.back}> ¿Se te olvidó tu contraseña?</Text>
                </TouchableOpacity>
            </View>

            </SafeAreaView>

        </KeyboardAvoidingView>
    

        </ImageBackground>
        
  );
    }
}




const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        Logo:{
            width:240,
            height:240,
        },
        Icons:{
            width:35,
            height:35,
        },        
        back:{
            marginTop: 15,
            color: '#808B96',
            fontSize: 18,
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
            backgroundColor: "rgba(0, 200, 255, 0.7)",
            color: '#FFFFFF',
            padding: 14,
            width:175,
            margin: 16,
            borderRadius:8,
        },
        buttonregister:{
            alignItems: "center",
            backgroundColor: "rgba(255, 240, 0 ,0.6)",
            color: 'rgba(0, 99, 0, 0.7)',
            padding: 14,
            width:175,
            margin: 16,
            borderRadius:8,
        },
        input: {
            height: 40,
            
            borderWidth: 0,
            padding: 10,
            fontSize:18,
            color: '#FFFFFF',
            width: 255,
           
          },       
        texti:{
            flexDirection: 'row',
            paddingBottom:0,
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 155, 219, 0.4)',
            borderWidth: 2,
            borderRadius:8,
            marginTop: 10,
            padding: 5,
            borderColor: '#85929E'
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