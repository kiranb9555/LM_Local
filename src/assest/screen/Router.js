import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Splashscreen from '../../screen/Splashscreen';



const Router = (props) => {
    const Stack= createNativeStackNavigator();
  return (
 <NavigationContainer >
   <Stack.navigator intitalRouteName ="SplashScreen" >
<Stack.Screen  name="SplashScreen" component={Splashscreen}  options ={{title:'Splash'}}/>
 <Stack.Screen  name="Preloginflow1" component={Preloginflow1} />
<Stack.Screen  name="Preloginflow2" component={Preloginflow2} />

<Stack.Screen  name="Preloginflow3" component={Preloginflow3} /> 
   </Stack.navigator>

 </NavigationContainer>
  )
}

export default Router
