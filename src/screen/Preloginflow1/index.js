import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Images } from '../../assest/images';
import Preloginflow1Styles from './styles';

const { container, Preloginflow1fistyle, Preloginflow1btn, text } =
  Preloginflow1Styles;
const {
  PreLogin1,
  Preloginflow1_secondtIcon,
  Close,
} = Images;

const Preloginflow1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#DBF5FC',
        flex: 1,

      }}>
      <View style={{ padding: '2%' }}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Image source={Close} style={{ width: 18, height: 18 }} />
          <Text style={{ fontSize: 12, color: '#5FC2DA', marginLeft: '2%', fontWeight: '600' }}>SKIP ONBOARDING</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={PreLogin1}
        style={{
          width: '100%',
          height: 160,
          alignSelf:'center',
          backgroundColor:'#DFFFF',
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop: '20%',
        }}>
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
          width: '100%',
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          bottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          // paddingHorizontal: '25%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#5FC2DA',
            width: '40%',
            padding: '2%',
            borderRadius: 10,
            alignSelf: 'center',
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
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#00BDEB', textAlign: 'center', alignSelf: 'center', marginLeft: '5%' }}>
          1/3
        </Text>
      </View>
    </View>
  );
};

export default Preloginflow1;
