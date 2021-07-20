import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import marker from './../assets/icons8-marker.png'

const latitudeDelta = 0.025
const longitudeDelta = 0.025

const Map4 = () => {
    const [region, setRegion] = useState({
        latitudeDelta,
        longitudeDelta,
        latitude: 25.1948475,
        longitude: 55.2682899
    })


    const onRegionChange = region => {
        setRegion(region)

    }



    return (
        <View style={styles.map}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={region}
                onRegionChangeComplete={onRegionChange}
            />
            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={marker} />
            </View>
            {/* <SafeAreaView style={styles.footer}>
                <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
            </SafeAreaView> */}
        </View>
    )

}
export default Map4
const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
    },
    marker: {
        height: 48,
        width: 48
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        position: 'absolute',
        width: '100%'
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20
    }
})