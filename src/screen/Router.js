import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './Splashscreen';
import Preloginflow1 from './Preloginflow1';
import Preloginflow2 from './Preloginflow2';
import Preloginflow3 from './Preloginflow3';
import BottomTabNavigator from '../components/BottumTabNavigator';

const Stack = createNativeStackNavigator();

const Router = (props) => {
    
  return (
 <NavigationContainer >
   <Stack.Navigator intialRouteName="Splashscreen" >
    <Stack.Screen  name="Splashscreen" component={Splashscreen} options={{title:"Splashscreen" ,headerShown:false}}/>
    <Stack.Screen  name="Preloginflow1" component={Preloginflow1} options={{title:"Preloginflow1" ,headerShown:false}}/>
    <Stack.Screen  name="Preloginflow2" component={Preloginflow2} options={{title:"Preloginflow2" ,headerShown:false}}/>
    <Stack.Screen  name="Preloginflow3" component={Preloginflow3} options={{title:"Preloginflow3" ,headerShown:false}}/>
    <Stack.Screen  name="BottomTabNavigator" component={BottomTabNavigator} options={{title:"BottomTabNavigator" ,headerShown:false}}/>
   </Stack.Navigator>

 </NavigationContainer>
  )
}

export default Router
