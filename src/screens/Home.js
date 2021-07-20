import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ marginVertical: 20 }}>

                <Button title='Map 1' onPress={() => navigation.navigate('Map1')} />
            </View>
            <View style={{ marginVertical: 20 }}>

                <Button title='tile map' onPress={() => navigation.navigate('Map2')} />
            </View>

            <View style={{ marginVertical: 20 }}>

                <Button title='map polyline area' onPress={() => navigation.navigate('Map3')} />
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