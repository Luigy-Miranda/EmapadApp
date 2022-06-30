
import React, {Component, useState} from 'react'
import { Text, View,TouchableOpacity,ImageBackground , Image,Dimensions,StyleSheet,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import axios from 'axios'
import {CustomHeader} from '../index'
import variables from '../global/variables.js';

export class VERIFICATION extends React.Component {

        state = {
            setData: [],
            getcedula:'',
            getcorreo:'',
            visible : true,
        }
     
    render() {
        const recovery = async() => {
            if (this.state.getcedula == ran){
                this.props.navigation.navigate('password');
            }else{
                alert('El codigo no es correcto.');
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
            <Text style={styles.PageTitle}>Recuperar contraseña</Text>
            <Text style={styles.back}>Ingrese el codigo que fue enviado a su correo para continuar.</Text>


                    <TextInput
                        style={styles.input}
                        onChangeText = {(value) => this.setState ({getcedula: value})}
                        placeholder="Codigo"
                        keyboardType="numeric"
                    />
                
                <TouchableOpacity
                style={styles.button}
                onPress={recovery}   
                >
                <Image style={styles.logo} source={require('../assets/icons/recovery.png')}/> 
                <Text> Restablecer contraseña</Text>
                </TouchableOpacity>



                <TouchableOpacity
            
                onPress={() => this.props.navigation.navigate('Recovery')}   
                >
                <Text style={styles.back1}> Reenviar codigo</Text>
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
            marginBottom:30,
            borderRadius:8,
            fontSize: 20,

          },
          
          PageTitle:{
            fontSize:25,
            alignItems: 'center',
            fontWeight: 'bold',
            color: '#134553',
            marginBottom: 10,
            

        },
        back1:{
            color: '#808B96',
            marginTop:30,
            fontSize: 20,

        },        
        back:{
            color: '#808B96',
            marginBottom:30,
            fontSize: 20,

        }
    }
)


