import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_NAME = 'cedula_usuario'




export class CustomDrawerContent extends Component {
    render() {
        
            const removeValue = async () => {
                try {
                  await AsyncStorage.removeItem(STORAGE_KEY_NAME)
                  const value = await AsyncStorage.getItem(STORAGE_KEY_NAME)
                  if(value == null) {
                    this.props.navigation.navigate('Login')
    
                  }
                } catch(e) {
                  // remove error
                }
              
              
              
        
        }
        
        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.Logo} source={require('./assets/logo.png')}/>
            </View>
            <ScrollView style={{marginLeft: 5}}>
            <TouchableOpacity
                style={{marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('MenuTab')}
                >
                <Image  style={{width: 30, height: 30}} source={require('./assets/icons/home.png')}/>  
                <Text>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('profile')}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/user.png')}/>  
                <Text>Mi Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('Consulta')}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/pay.png')}/>  
                <Text>Consultar/Generar Planilla</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('convenio')}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/convenio.png')}/>  
                <Text>Consultar Convenios</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('reclamos')}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/notification.png')}/>  
                <Text>Atención/Contacto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('preguntas')}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/cuestion.png')}/>  
                <Text>Preguntas Frecuentes</Text>
                </TouchableOpacity>
            </ScrollView>

                <TouchableOpacity
                style={{marginTop: 10, marginLeft: 10, marginBottom: 30}}
                onPress={removeValue}
                >
                <Image  style={{width: 25, height: 25}} source={require('./assets/icons/logout.png')}/>  
                <Text>Cerrar Sesión</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create(
    {

        Logo:{
            marginTop: 20,
            width:125,
            height:125,
        },
    }
)