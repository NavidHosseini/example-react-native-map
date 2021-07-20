import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';

const Map1 = () => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
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
