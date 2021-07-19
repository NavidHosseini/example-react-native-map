import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from '../navigations/StackNavigator'

const Amlak = () => {
    return (
        <NavigationContainer >
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Amlak

const styles = StyleSheet.create({})
