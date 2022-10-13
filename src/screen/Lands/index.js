import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
import { Images } from "../../assest/images";

const {
    Image_Background,
    Logo_png,
    Profile,
} = Images;

const Lands = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#5FC2DA', borderBottomWidth: 0.5 }}>
                <View style={{ flexDirection: 'row', paddingVertical: '1%', marginLeft: '4%' }}>
                    <Image source={Logo_png} style={{ tintColor: '#5FC2DA', width: '25%', height: '100%', resizeMode: 'contain', marginRight: '3%' }} />
                    <Image source={Profile} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: '5%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>My Lands</Text>
                </View>
            </View>
            <View style={{width:'100%', height:200, justifyContent:'center',alignItems:'center', paddingHorizontal:"30%"}}>
                <Text style={{textAlign:'center'}}>Your properties will
                    appear here</Text>
            </View>
        </View>
    )
}
export default Lands;