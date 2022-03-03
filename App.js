import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {profile} from './src/profile/profile'
import { update} from './src/profile/update'
import {Facturas} from './src/planilla/Facturas'
import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen} from './src/home'
import {RegisterScreen, LoginScreen} from './src/auth'
import {reclamos} from './src/reclamos'
import {coactiva} from './src/coactiva'
import {Recovery} from './src/Recovery/'
import {verification} from './src/Recovery/verification'
import {password} from './src/Recovery/password'
import {preguntas} from './src/preguntas/'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {convenio} from './src/convenio';
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})



const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" 
      drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name="MenuTab" component={HomeScreen} />
        <Drawer.Screen name="Consulta" component={Facturas}/>
        <Drawer.Screen name="profile" component={profile}/>
        <Drawer.Screen name="reclamos" component={reclamos}/>
        <Drawer.Screen name="coactiva" component={coactiva}/>  
        <Drawer.Screen name="preguntas" component={preguntas}/>  
        <Drawer.Screen name="convenio" component={convenio}/>      
        
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()

export default function App() {

      return (
        <NavigationContainer>
            <StackApp.Navigator initialRouteName="Login">
              <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
              <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
              <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
              <StackApp.Screen name="reclamos" component={reclamos} options={navOptionHandler}/>
              <StackApp.Screen name="profile" component={profile} options={navOptionHandler}/>
              <StackApp.Screen name="coactiva" component={coactiva} options={navOptionHandler}/>
              <StackApp.Screen name="Recovery" component={Recovery} options={navOptionHandler}/>
              <StackApp.Screen name="verification" component={verification} options={navOptionHandler}/>
              <StackApp.Screen name="password" component={password} options={navOptionHandler}/>
              <StackApp.Screen name="preguntas" component={preguntas} options={navOptionHandler}/>
              <StackApp.Screen name="update" component={update} options={navOptionHandler}/>
              <StackApp.Screen name="convenio" component={convenio} options={navOptionHandler}/>

              
            </StackApp.Navigator>
        </NavigationContainer>
      );
    }

    



