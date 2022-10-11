import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Images } from "../../assest/images";

const {
    Image_Background,
} = Images;

const Services = () => {
    return(
        <View style={{flex:1}}>
            <ImageBackground 
            source={Image_Background}
            style={{flex:1}}>

            </ImageBackground>
        </View>
    )
}
export default Services;