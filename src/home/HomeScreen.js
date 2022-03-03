import React, {Component} from 'react'
import { AppRegistry,Text, View, ImageBackground , TouchableOpacity,StyleSheet, Image,ScrollView, Dimensions,Platform } from 'react-native';
import {CustomHeader} from '../index';
import Swiper from 'react-native-swiper'
import axios from 'axios'
import variables from '../global/variables.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
///Guardado en Memoria

const STORAGE_KEY_NAME = 'cedula_usuario'

    
    const hol = async() => {
        const cedula = await AsyncStorage.getItem(STORAGE_KEY_NAME);
        const XD = await axios.get('http://clientes.emapad.gob.ec/Manager/usuario.php?id='+cedula);   
        const  v = XD.data;
        nombre = v['NOMBRES'];
        codigo = v['SERVICIO'];
    }
    
    hol()





export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setData: [],
            cedula:'',
            setDat:[]
        };
      }
      
  
    obtener (){
        const consul = async() => {
        const respuesta = await axios.get('http://clientes.emapad.gob.ec/Manager/usuario.php');   
        
        this.setState({setData : respuesta.data});
        
    }
    consul()
}
    render() {
        this.obtener();
        const image = { uri: this.state.setData['photo']};
        const image2 = { uri: this.state.setData['photo2']};
        const image3 = { uri : this.state.setData['photo3']};
        const image4 = { uri : this.state.setData['photo4']};
        const image5 = { uri : this.state.setData['photo5']};
        return (
            <ImageBackground  source={require('../assets/wallpaper_factura.png')} style={styles.container}>

  
                <CustomHeader title="EMAPAD-EP" isHome={true} navigation={this.props.navigation}/>
                <Text style={styles.texto}>{'Bienvenido'}</Text>
                <Text style={styles.name}>{nombre}</Text>
                <View style={styles.top}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Consulta')}
                    >
                    <Image style={styles.logo} source={require('../assets/icons/pay.png')}/> 
                    <Text style={styles.logo_text}>{'¡Consulta tu consumo del Agua Potable!'}</Text>
                    </TouchableOpacity>
                    
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('convenio')}
                    >
                    <Image style={styles.logo} source={require('../assets/icons/convenio.png')}/> 
                    <Text style={styles.logo_text}>{'¡Consulta tu convenio del Agua Potable!'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('coactiva')}

                    >
                    <Image style={styles.logo} source={require('../assets/icons/coactiva.png')}/> 
                    <Text style={styles.logo_text}>{'¿Problemas con coactiva?  Entra aqui'}</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.sub}>
                    
                    <Swiper style={styles.wrapper} autoplay={true}>
                        <View style={styles.slide1}>
                        <Image style={styles.noticias} source={image}/>
                            
                        </View>
                        <View style={styles.slide2}>
                            <Image style={styles.noticias} source={image2}/>
                        </View>
                        <View style={styles.slide3}>
                            <Image style={styles.noticias} source={image3}/>
                        </View>
                        <View style={styles.slide4}>
                            <Image style={styles.noticias} source={image4}/>
                        </View>
                        <View style={styles.slide4}>
                            <Image style={styles.noticias} source={image5}/>
                        </View>
                    </Swiper>
                </View>
                <View style={styles.abajo}>                
                    <Image style={styles.barner} source={require('../assets/barner.png')}/>
                </View>
                
                </ImageBackground>    
                    );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            alignContent:'center'
        },
  
        button_icon:{
            borderRadius: 4,
            marginBottom: 5,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            height:Dimensions.get ('window').height/8,
            marginRight:5           
        },
  
        button:{
            paddingHorizontal: 0,
            paddingVertical: 10,
            borderRadius: 4,
            backgroundColor: "rgba(183,183,183,0.7)",
            alignSelf: "flex-start",
            marginHorizontal: "1%",
            marginBottom: 6,
            justifyContent:'center',
            alignItems:'center',
            alignContent:'center',
            flex:2,

                    },
        logo_text:{
            alignItems:'center',
            marginLeft:20,
            alignContent:'center',
            justifyContent:'center',
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize:15,
            justifyContent:'center',

        },
        sub:{
            maxHeight:'80%',
            height: '50%',
            width: Dimensions.get ('window').width,


        },
        noticias:{
           resizeMode: 'stretch',
           width: Dimensions.get ('window').width,
           height:Dimensions.get ('window').height,
           maxHeight:'100%',
           maxWidth: '100%',
            
        },
        top:{
            flexDirection: "row",
        },
        barner:{
            maxHeight: '100%',
            width: Dimensions.get ('window').width,
            resizeMode: 'stretch',


        },
        abajo:{
            flex:1,

        },
        wrapper: {

        },
        slide1: {
            flex:1,
        },
        slide2: {
            flex:1,
        },
        slide3: {
            flex:1,
        },
        slide4: {
            flex:1,
        },
        text: {
          color: '#FFFFFF',
          fontSize: 30,
          fontWeight: 'bold'
        },
        logo:{
            width: 60,
          
            height: 60
        },
        texto:{
            paddingLeft:10,
            fontSize:25,
            color: '#FFFFFF',
            fontWeight: 'bold',
            justifyContent:'center',
            alignItems: 'center',
            alignContent:'center'
        },
        name:{
            paddingLeft:10,
            fontSize:15,
            color: '#FFFFFF',
            fontWeight: 'bold',
            justifyContent:'center',
            alignItems: 'center',
            alignContent:'center'
        },
        icon:{
            width: 40,
            height: 40
        }
    }
)






AppRegistry.registerComponent('myproject', () => SwiperComponent)