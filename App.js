import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {PROFILE} from './src/profile/profile'
import { UPDATE} from './src/profile/update'
import {Facturas} from './src/planilla/Facturas'
import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen} from './src/home'
import {RegisterScreen, LoginScreen} from './src/auth'
import {RECLAMOS} from './src/reclamos'
import {COACTIVA} from './src/coactiva'
import {Recovery} from './src/Recovery/'
import {VERIFICATION} from './src/Recovery/verification'
import {PASSWORD} from './src/Recovery/password'
import {PREGUNTAS} from './src/preguntas/'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CONVENIO} from './src/convenio';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})


function Ati_B() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Mensajeria" component={RECLAMOS} 
        options={{
          headerShown: false,
          tabBarLabel: 'Mensajeria',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment-multiple-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={PROFILE} 
        options={{
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>

      </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    
    <Drawer.Navigator initialRouteName="MenuTab" 
        drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name="MenuTab" component={HomeScreen} options={navOptionHandler} />
        <Drawer.Screen name="Consulta" component={Facturas} options={navOptionHandler}/>
        <Drawer.Screen name="PROFILE" component={PROFILE} options={navOptionHandler}/>
        <Drawer.Screen name="RECLAMOS" component={RECLAMOS} options={navOptionHandler}/>
        <Drawer.Screen name="COACTIVA" component={COACTIVA} options={navOptionHandler}/>  
        <Drawer.Screen name="PREGUNTAS" component={PREGUNTAS} options={navOptionHandler}/>  
        <Drawer.Screen name="CONVENIO" component={CONVENIO} options={navOptionHandler}/>      

    </Drawer.Navigator>

  )
}

const StackApp = createStackNavigator()

export default function App() {

      return (
        <NavigationContainer>

            <StackApp.Navigator initialRouteName="Login">
              <StackApp.Screen name="HomeApp" component={DrawerNavigator}  options={navOptionHandler}/>
              <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
              <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
              <StackApp.Screen name="RECLAMOS" component={RECLAMOS} options={navOptionHandler}/>
              <StackApp.Screen name="PROFILE" component={PROFILE} options={navOptionHandler}/>
              <StackApp.Screen name="COACTIVA" component={COACTIVA} options={navOptionHandler}/>
              <StackApp.Screen name="Recovery" component={Recovery} options={navOptionHandler}/>
              <StackApp.Screen name="VERIFICATION" component={VERIFICATION} options={navOptionHandler}/>
              <StackApp.Screen name="PASSWORD" component={PASSWORD} options={navOptionHandler}/>
              <StackApp.Screen name="PREGUNTAS" component={PREGUNTAS} options={navOptionHandler}/>
              <StackApp.Screen name="UPDATE" component={UPDATE} options={navOptionHandler}/>
              <StackApp.Screen name="CONVENIO" component={CONVENIO} options={navOptionHandler}/>

 
            </StackApp.Navigator>

        </NavigationContainer>
      );
    }

    



