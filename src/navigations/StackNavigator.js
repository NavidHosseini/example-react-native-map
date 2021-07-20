import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Map1 from '../screens/Map1'
import Map2 from '../screens/Map2'
import Map3 from '../screens/Map3'
import Map4 from '../screens/Map4'
import Map5 from '../screens/Map5'
import Map6 from '../screens/Map6'




const Stack = createStackNavigator()

const StackNavigator = () => {


    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map1" options={{ title: 'user location' }} component={Map1} />
            <Stack.Screen name="Map2" options={{ title: 'tile map' }} component={Map2} />
            <Stack.Screen name="Map3" options={{ title: 'map polyline area' }} component={Map3} />
            <Stack.Screen name="Map4" options={{ title: 'marker in center' }} component={Map4} />
            <Stack.Screen name="Map5" options={{ title: 'set marker and dragble' }} component={Map5} />
            <Stack.Screen name="Map6" options={{ title: 'map cluster' }} component={Map6} />
        </Stack.Navigator>
    )
}

export default StackNavigator
