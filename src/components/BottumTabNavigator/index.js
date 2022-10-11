import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from "../../screen/Services";
import { Images } from "../../assest/images";
import { Image } from "react-native";
import Lands from "../../screen/Lands";
import News from "../../screen/News";
import Profile from "../../screen/Profile";

const Tab = createBottomTabNavigator();

const {
    SecurityEnergy,
    ActivityHistory,
    Landscape,
    Customer,
} = Images;

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Services" component={Services}
                options={{
                    tabBarLabelPosition:'below-icon',
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                           <Image source={SecurityEnergy} style={{width:25}}/>
                        )
                    },
                    title: 'Services', //Set Header Title
                    headerShown: false,
                }} />
                <Tab.Screen name="News" component={News}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                           <Image source={ActivityHistory} style={{width:25}}/>
                        )
                    },
                    title: 'News', //Set Header Title
                    headerShown: false,
                }} />
                <Tab.Screen name="Lands" component={Lands}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                           <Image source={Landscape} style={{width:25}}/>
                        )
                    },
                    title: 'Lands', //Set Header Title
                    headerShown: false,
                }} />
                <Tab.Screen name="Profile" component={Profile}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => {
                        return (
                           <Image source={Customer} style={{width:25}}/>
                        )
                    },
                    title: 'Profile', //Set Header Title
                    headerShown: false,
                }} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;