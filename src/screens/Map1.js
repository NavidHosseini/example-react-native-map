import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useRef, useState } from 'react'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';

const Map1 = () => {

    const INITIAL_REGION = {
        latitude: 30.913513256192235,
        longitude: 52.69852861762047,
        latitudeDelta: 8.5,
        longitudeDelta: 8.5,
    };
    const mapRef = useRef();
    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            setTimeout(() => {
                mapRef.current.animateToRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }, 2000)
            }, 500);
        },
            err => {
                console.log(err);
            }
        );
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                //region={region}
                ref={mapRef}

                initialRegion={INITIAL_REGION}
                showsUserLocation={true}
                followsUserLocation={true}
            >
            </MapView>
        </View>
    )
}

export default Map1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    map: {
        width: '100%',
        height: '100%'
    }
})
