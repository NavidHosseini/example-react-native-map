// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import MapView from "react-native-map-clustering";
// import { Marker } from 'react-native-maps';

// const Map6 = () => {
//     const INITIAL_REGION = {
//         latitude: 52.5,
//         longitude: 19.2,
//         latitudeDelta: 8.5,
//         longitudeDelta: 8.5,
//     };


//     return (
//         <MapView clusterColor='red' initialRegion={INITIAL_REGION} style={{ flex: 1 }}>
//             <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
//             <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
//             <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
//             <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
//             <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
//             <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
//             <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
//             <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
//             <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
//         </MapView>
//     )
// }

// export default Map6

// const styles = StyleSheet.create({})
import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

const INITIAL_REGION = {
    latitude: 30.913513256192235,
    longitude: 52.69852861762047,
    latitudeDelta: 8,
    longitudeDelta: 8
};

const Map6 = () => (
    <MapView
        initialRegion={INITIAL_REGION}
        style={{ flex: 1 }}
        renderCluster={cluster => {
            const { id, geometry, onPress, properties } = cluster;
            const points = properties.point_count;

            return (
                <Marker
                    key={`cluster-${id}`}
                    coordinate={{
                        longitude: geometry.coordinates[0],
                        latitude: geometry.coordinates[1]
                    }}
                    onPress={onPress}
                >
                    <View style={{ padding: 50, backgroundColor: "white", borderRadius: 50, position: 'relative' }}>
                        <View style={{
                            // position: 'absolute', right: '50%', left: '50%'
                        }}>

                            < Text style={{}}>{points}</Text>
                        </View>
                    </View >
                </Marker >
            );
        }}
    >
        <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
        <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
        <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
        <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
        <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
        <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
        <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
        <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
        <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
    </MapView >
);

export default Map6;
