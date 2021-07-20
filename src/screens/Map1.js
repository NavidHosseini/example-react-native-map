import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';

const Map1 = () => {
    const [region, setRegion] = useState(null)

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            setRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            })
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
                region={region}
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
