import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

//import MapView, { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import MapView from "react-native-map-clustering";
import { showLocation, Popup } from 'react-native-map-link'

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

    const getAddress = (e) => {

        // mapRef.current
        //     .addressForCoordinate({
        //         // latitude: selectedLatitude,
        //         // longitude: selectedLongitude,
        //         latitude: 41.89,
        //         longitude: 12.49,
        //     })
        //     .then((res) => console.log(res));



        // Geocoder.from(41.89, 12.49)
        //     .then(json => {
        //         var addressComponent = json.results[0].address_components[0];
        //         console.log(addressComponent);
        //     })
        //     .catch(error => console.warn(error));
        // // setCoordMarker(e.nativeEvent.coordinate)
        // console.log(e.nativeEvent.coordinate)

        // this is need to payment in google cloud
    }


    const redirectToAnotherApp = () => {
        setIsVisible(true)
        // showLocation({
        //     latitude: 38.8976763,
        //     longitude: - 77.0387185,
        //     // sourceLatitude: -8.0870631,  // optionally specify starting location for directions
        //     // sourceLongitude: -34.8941619,  // not optional if sourceLatitude is specified
        //     title: 'The White House',  // optional
        //     googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
        //     googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',  // optionally specify the google-place-id
        //     // alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
        //     // dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
        //     // dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
        //     cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
        //     // appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
        //     // naverCallerName: 'com.example.myapp' // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
        //     // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
        //     // app: 'uber'  // optionally specify specific app to use
        // })
    }

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