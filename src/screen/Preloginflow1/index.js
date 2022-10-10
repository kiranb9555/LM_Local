import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../assest/images';
import Preloginflow1Styles from './styles';

const {container, Preloginflow1fistyle, Preloginflow1btn, text} =
  Preloginflow1Styles;
const {Preloginflow1_firstIcon, Preloginflow1_secondtIcon,Close} = Images;

const Preloginflow1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#fFF',
        flex: 1,
        
      }}>
      <View style={{padding: '2%'}}>
        <TouchableOpacity style={{flexDirection:'row'}}>
          <Image source={Close} />  
          <Text style={{fontSize: 16, color: '#5FC2DA', marginLeft:'2%'}}>SKIP ONBOARDING</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={Preloginflow1_firstIcon}
        style={{
          // width: '100%',
          height: 160,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Text
          style={{
            fontSize: 36,
            fontFamily:'Archivo',
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
             marginHorizontal: '15%',
          }}>
          Add your lands with just a click
        </Text>
      </ImageBackground>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
        }}>
        <Image source={Preloginflow1_secondtIcon} />
      </View>
      <View
        style={{
          position: 'absolute',
        
          bottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: '25%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5FC2DA',
            width: 150,
            height: 30,
            borderRadius:10,
            marginHorizontal: '13%',
          }}
          onPress={() => navigation.navigate('Preloginflow2')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              
              color: '#fff',
              textAlign: 'center',
            }}>
            Next 
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#00BDEB'}}>
          1/3
        </Text>
      </View>
    </View>
  );
};

export default Preloginflow1;
