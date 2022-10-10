import React, { useEffect } from 'react';

import {View, Text, Image, Button} from 'react-native';
import SplashScreensStyles from './styles';
import { Images } from '../../assest/images';


const {Logo_png} = Images

const {Container, logo} = SplashScreensStyles;

const Splashscreen = (props) => {

  useEffect(()=>{
    const runner = setTimeout(() =>{
      props.navigation.navigate("Preloginflow1")
    }, 3000)

    return () => clearTimeout(runner);
  });
  return (
    <View style={Container}>

    
      <Image source={Logo_png} />
  
        
     
    </View>
  );
};

export default Splashscreen;
