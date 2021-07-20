import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';

import MapView, { Polyline, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';

const Map3 = () => {
    const { width, height } = Dimensions.get('window');

    const ASPECT_RATIO = width / height;
    const LATITUDE = 37.78825;
    const LONGITUDE = -122.4324;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    let id = 0;

    const [polylines, setPolylines] = useState([])
    const [editing, setEditing] = useState(null)
    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })

    const finish = () => {

        const editingCompleteLine = {
            ...editing,
            "coordinates": [
                ...editing.coordinates,
                editing.coordinates[0]
            ]
        }
        //   console.log(obj)
        setPolylines([...polylines, editingCompleteLine])
        setEditing(null)
        // console.log(editing.coordinates[0])
    }

    const onPanDrag = (e) => {
        if (!editing) {
            setEditing({ id: id++, coordinates: [e.nativeEvent.coordinate], })
        } else {
            setEditing({ ...editing, coordinates: [...editing.coordinates, e.nativeEvent.coordinate] })
        }
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={region}
                scrollEnabled={false}
                onPanDrag={e => onPanDrag(e)}
            >

                {polylines.map(polyline => (
                    <Polyline
                        key={polyline.id}
                        coordinates={polyline.coordinates}
                        strokeColor="#000"
                        fillColor="rgba(255,0,0,0.5)"
                        strokeWidth={1}
                        lineCap={'round'}
                        lineJoin='round'
                        miterLimit={10}

                    />
                ))}



                {editing && (
                    <Polyline
                        key="editingPolyline"
                        coordinates={editing.coordinates}
                        strokeColor="#F00"
                        fillColor="rgba(255,0,0,0.5)"
                        strokeWidth={1}
                        lineCap={'round'}
                        lineJoin='round'
                        miterLimit={10}
                    />
                )}
            </MapView>
            <View style={styles.buttonContainer}>
                {editing && (
                    <TouchableOpacity
                        onPress={() => finish()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text>Finish</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}


export default Map3

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