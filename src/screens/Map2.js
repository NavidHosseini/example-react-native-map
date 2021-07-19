import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, {
    ILocationProps,
    IDrawResult,
    TouchPoint,
    Marker
} from 'react-native-maps-draw';


const Map1 = () => {
    const mapRef = useRef(null);

    const initialPolygon = useRef({
        polygons: [],
        distance: 0,
        lastLatLng: undefined,
        initialLatLng: undefined,
        centerLatLng: undefined,
    });

    const [modePolygon, setPolygonCreated] = useState(false);

    const [isActiveDraw, setDrawMode] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [points, setPoints] = useState([]);

    const [polygon, setPolygon] = useState(initialPolygon.current);

    const handleMapReady = useCallback(() => mapRef.current && setIsReady(true), []);

    const handleRemovePolygon = useCallback(() => {
        setPolygon(initialPolygon.current);
        setPolygonCreated(false);
    }, []);

    const handleClear = useCallback(() => {
        setPolygon(initialPolygon.current);
        setPolygonCreated(false);
        setPoints([]);
    }, []);

    const handleIsDraw = useCallback(() => {
        if (!mapRef.current) return;
        setDrawMode((prevMode) => !prevMode);
    }, [handleClear, isActiveDraw]);

    const handleCanvasEndDraw = useCallback((locations) => {
        zoomCenterPolygon(locations.centerLatLng).then(() => {
            setPolygon(locations);
            setPolygonCreated(true);
        });
        setDrawMode((prevMode) => !prevMode);
    }, []);

    const zoomCenterPolygon = async (center) => {
        if (!mapRef.current) return;
        const camera = await mapRef.current.getCamera();
        if (Platform.OS === 'ios') {
            mapRef.current.animateCamera({
                center: center,
            });
        }
        if (Platform.OS === 'android') { }
    };


    const hasMarkerClose = polygon.centerLatLng && (
        <Marker onPress={handleRemovePolygon} coordinate={polygon.centerLatLng}>
            <MarkerLocation />
        </Marker>
    );

    const handlePolygon = useCallback(
        (item, index) => <AnimatedPolygon key={index} coordinates={polygon.polygons} />,
        [polygon.polygons]
    );


    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                points={points}
                widthLine={3}
                onEndDraw={handleCanvasEndDraw}
                isDrawMode={isActiveDraw}
                onMapReady={handleMapReady}
                onStartDraw={handleClear}
                createdPolygon={modePolygon}
                onChangePoints={setPoints}
                backgroundCanvas={'rgba(0, 0, 0, 0.0)'}
            >
                {isReady && modePolygon && polygon.polygons && polygon.polygons.length > 0 && (
                    <>
                        {hasMarkerClose}
                        {polygon.polygons.map(handlePolygon)}
                    </>
                )}
            </MapView>

            <TouchableOpacity style={styles.button} onPress={handleIsDraw}>
                {isActiveDraw ? (
                    <Text style={styles.title}>ON</Text>
                ) : (
                    <Text style={styles.title}>OFF</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}
export default Map1
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        top: '10%',
        right: '10%',
        position: 'absolute',
        backgroundColor: 'tomato',
        padding: 16,
        zIndex: 4,
        borderRadius: 18,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 12,
    },
});

