
import React, {Component, useState} from 'react'
import { Text, View,TouchableOpacity,ImageBackground , Image,Dimensions,StyleSheet,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import axios from 'axios'
import {CustomHeader} from '../index'
import variables from '../global/variables.js';


export class Recovery extends React.Component {

        state = {
            setData: [],
            getcedula:'',
        }
     
    render() {
      const recovery = async() => {
        const cedula = this.state.getcedula;
        const codigo = Math.floor(Math.random() * (9000 - 1000)) + 1000;
        ced = cedula; 
        ran = codigo;
        const obj = {"cedula" : cedula, "codigo": codigo}
        const respuesta = await axios.post('http://clientes.emapad.gob.ec/Manager/Recovery/index.php/',obj);
        const validacion = respuesta.data;
            this.props.navigation.navigate('verification');

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
            <Text style={styles.PageTitle}>Recuperar contraseña</Text>
            <Text style={styles.back}>Se enviara un correo para restablecer la clave. porfavor ingrese su numero de cedula registrada en la APP.</Text>


                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setState ({getcedula: value})}
                        placeholder="Cedula"
                        keyboardType="numeric"
                    />
                
                <TouchableOpacity
                style={styles.button}
                onPress={recovery}   
                >
                <Image style={styles.logo} source={require('../assets/icons/recovery.png')}/> 
                <Text> Restablecer contraseña</Text>
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
            marginBottom:10,
            backgroundColor: "rgba(255, 255, 255,1)",
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
            borderRadius:8,
            marginBottom:30,
            fontSize: 20,

          },
          
          PageTitle:{
            fontSize:25,
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#134553',
            marginBottom:10,

        },
        back:{
            color: '#808B96',
            marginBottom:30,
            fontSize: 20,

        }
    }
)


