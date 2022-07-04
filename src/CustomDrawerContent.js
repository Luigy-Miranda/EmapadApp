import React, {Component} from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    <MaterialCommunityIcons name="home-variant-outline" color='#888888' size={30} />
                    <Text>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('PROFILE')}
                >
                    <MaterialCommunityIcons name="account-circle" color='#888888' size={30} />
                <Text>Mi Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('Consulta')}
                >
                    <MaterialCommunityIcons name="cash-fast" color='#888888' size={30} />
                <Text>Consultar/Generar Planilla</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('CONVENIO')}
                >
                    
                    <MaterialCommunityIcons name="account-cash" color='#888888' size={30} />
                <Text>Consultar Convenios</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('RECLAMOS')}
                >
                    
                    <MaterialCommunityIcons name="comment-multiple-outline" color='#888888' size={30} />
                <Text>Atención/Contacto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{ marginLeft: 10, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={() => this.props.navigation.navigate('PREGUNTAS')}
                >
                    <MaterialCommunityIcons name="account-question" color='#888888' size={30} />
                <Text>Preguntas Frecuentes</Text>
                </TouchableOpacity>
            </ScrollView>

                <TouchableOpacity
                style={{ marginLeft: 10, marginBottom: 5, backgroundColor:'#F4F4F4',borderWidth: 2, borderRadius:8, padding: 5,borderColor: '#FFFFFF'}}
                onPress={removeValue}
                >
                    
                    <MaterialCommunityIcons name="chevron-left-circle" color='#888888' size={30} />
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