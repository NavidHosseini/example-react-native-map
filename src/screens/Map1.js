import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, UrlTile } from 'react-native-maps';

const Home = () => {
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
            //   onPanDrag={(res) => console.log(res)}
            >

                <UrlTile
                    /**
                     * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
                     * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
                     */
                    urlTemplate={'https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga'}
                    //     urlTemplate={'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                    /**
                     * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
                     * MKTileOverlay. iOS only.
                     */
                    maximumZ={19}
                    /**
                     * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
                     * to be used. Its default value is false.
                     */
                    flipY={false}
                />
            </MapView>
        </View>
    )
}

export default Home

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
