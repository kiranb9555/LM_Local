import React from "react";
import { ImageBackground, Text, View, Image, Dimensions, FlatList } from "react-native";
import { Images } from "../../assest/images";

const {
    Image_Background,
    Logo_png,
    Profile,
    BackGround_Icon,
    TextContent,
    ServicesLabel,
    MonthlyUpdates,
    LegalServices,
    PlotTracing,
    Planting,
    Documents,
} = Images;

const data = [
    {
        id:1,
        image:MonthlyUpdates
    },
    {
        id:2,
        image:Planting
    },
    {
        id:3,
        image:Documents
    }
]

const Services = () => {
    const {width, height} = Dimensions.get('window');

    const renderItem = ({item}) => {
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={item.image} />
                {/* <Text>{item.name}</Text> */}
            </View>
        )
    }

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
                        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                            <Text style={{fontSize:16, fontWeight:'400', color:'#fff'}}>What are you looking for?</Text>
                            <Image source={ServicesLabel}/> 
                        </View>
                        <View>
                            <FlatList 
                                horizontal
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item)=> item.id}
                                style={{marginLeft:'3%',marginTop:"2%", borderColor:'#333', borderWidth:1, elevation:2, shadowColor:'#333',shadowOffset:5, paddingLeft:'4%'}}
                            />
                        </View>
                    </View>

            </ImageBackground>
        </View>
    )
}
export default Services;