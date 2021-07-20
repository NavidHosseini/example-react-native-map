import React, { useEffect } from "react"
import { PermissionsAndroid } from "react-native"
import SplashScreen from "react-native-splash-screen"

const Context = React.createContext()


export const Provider = ({ children }) => {
    useEffect(() => {
        //  Geocoder.init("***")
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