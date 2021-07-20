import React, { useEffect } from "react"
import { PermissionsAndroid } from "react-native"
import Geocoder from "react-native-geocoding"
import { PROVIDER_GOOGLE } from "react-native-maps"
import SplashScreen from "react-native-splash-screen"

const Context = React.createContext()


export const Provider = ({ children }) => {
    useEffect(() => {
        Geocoder.init("AIzaSyACzBURiRcR7T9c84mQM7rGL_4wHO5g_pE")
        SplashScreen.hide()
    }, [])
    const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    granted === PermissionsAndroid.RESULTS.GRANTED;
    const a = 0

    return (
        <Context.Provider
            value={{
                a
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context