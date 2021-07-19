import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Map1 from '../screens/Map1'
import Map2 from '../screens/Map2'
import Map3 from '../screens/Map3'




const Stack = createStackNavigator()

const StackNavigator = () => {


    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Map1" options={{ title: 'user location' }} component={Map1} />
            <Stack.Screen name="Map2" options={{ title: 'tile map' }} component={Map2} />
            <Stack.Screen name="Map3" options={{ title: '' }} component={Map3} />
        </Stack.Navigator>
    )
}

export default StackNavigator
