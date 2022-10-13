import React from "react";
import { ImageBackground, Text, View, Image, Dimensions, FlatList } from "react-native";
import { Images } from "../../assest/images";

const {
    Image_Background,
    Logo_png,
    Profile,
    BackGround_Icon,
    TextContent,
} = Images;

const Services = () => {
    const {width, height} = Dimensions.get('window');
    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', paddingVertical:'1%', marginLeft:'4%'}}>
                    <Image source={Logo_png} style={{ tintColor: '#5FC2DA', width: '25%', height: '100%', resizeMode: 'contain', marginRight:'3%' }} />
                    <Image source={Profile} />
                </View>
                <View style={{justifyContent:'center', alignItems:'center', marginRight:'5%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#000000'}}>Services</Text>
                </View>
            </View>
            <ImageBackground
                source={Image_Background}
                style={{ flex: 1 }}>
                    <Image source={BackGround_Icon} style={{width:width, marginTop:-65}}/>
                    <Image source={TextContent} style={{width:width-40, resizeMode:'contain', alignSelf:'center', marginTop:-110}}/>
                    <View>
                        <View>
                            <Text>What are you looking for?</Text>
                        </View>
                        <View>
                            <FlatList />
                        </View>
                    </View>

            </ImageBackground>
        </View>
    )
}
export default Services;