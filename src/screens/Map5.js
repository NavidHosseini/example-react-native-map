import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from "react-native-map-clustering";

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 30.913513256192235;
const LONGITUDE = 52.69852861762047;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const Map5 = () => {

    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })
    const [markers, setMarkers] = useState([])
    const [coordMarker, setCoordMarker] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const onMapPress = (e) => {
        setMarkers([...markers,
        {
            coordinate: e.nativeEvent.coordinate,
            key: id++,
            color: randomColor(),
        },
        ])
    }

    const mapRef = useRef()


    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={region}
                onPress={e => onMapPress(e)}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.key}
                        coordinate={marker.coordinate}
                        pinColor={marker.color}
                        draggable={true}
                        onPress={(e) => alert(`lat: ${e.nativeEvent.coordinate.latitude} , lon: ${e.nativeEvent.coordinate.longitude}`)

                        }
                    />
                ))}
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setMarkers([])}
                    style={styles.bubble}
                >
                    <Text>Tap to create a marker of random color</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});

export default Map5;