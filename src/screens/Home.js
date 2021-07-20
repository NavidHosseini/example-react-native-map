import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ marginVertical: 20 }}>

                <Button title='user location' onPress={() => navigation.navigate('Map1')} />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Button title='tile map' onPress={() => navigation.navigate('Map2')} />
            </View>

            <View style={{ marginVertical: 20 }}>

                <Button title='map polyline area' onPress={() => navigation.navigate('Map3')} />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Button title='marker in center' onPress={() => navigation.navigate('Map4')} />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Button title='set marker and dragble' onPress={() => navigation.navigate('Map5')} />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Button title='map cluster' onPress={() => navigation.navigate('Map6')} />
            </View>

        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //    alignItems: 'center',
        justifyContent: 'center'
    }
})