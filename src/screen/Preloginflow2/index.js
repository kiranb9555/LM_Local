import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Button, ImageBackground, TouchableOpacity} from 'react-native';
import {Images} from '../../assest/images';
// import Preloginflow2Styles from './styles';

// const {container, Preloginflow1fistyle, Preloginflow1btn, text} =
//   Preloginflow2Styles;
const {Preloginflow1_firstIcon, Preloginflow1_secondtIcon} = Images;

const Preloginflow2 = () => {

    const navigation =useNavigation();
  return (
    <View  style={{
        backgroundColor: '#857AFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{padding:'2%'}}>
        <TouchableOpacity>
        <Text style={{fontSize:16, color:'blue'}}>SKIP ONBOARDING</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground source={Preloginflow1_firstIcon} style={{width:'100%', height:160, justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
        <Text style={{fontSize:36, fontWeight:'bold', color:'#fff', textAlign:'center', marginHorizontal:'15%'}}>Add your lands with just a click</Text>
      </ImageBackground>
      <View style={{justifyContent:'center',alignItems:'center', marginTop:'5%'}}>
        <Image source={Preloginflow1_secondtIcon}/>
      </View>
      <View style={{position:'absolute', bottom:10, flexDirection:'row', alignItems:'center', paddingHorizontal:'25%'}}>
        <TouchableOpacity style={{backgroundColor:'blue',width:150, height:30, borderRadius:10, marginHorizontal:'5%'}} onPress={()=>navigation.navigate('Preloginflow3')}>
        <Text style={{fontSize:16, fontWeight:'600', color:'#fff', textAlign:'center'}}>Next Button</Text>
        </TouchableOpacity>
        <Text style={{fontSize:16, fontWeight:'600',color:'blue'}}>1/3</Text>
      </View>
    </View>
  );
};

export default Preloginflow2;
