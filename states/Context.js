import React, { useEffect} from "react"
import SplashScreen from "react-native-splash-screen"

const Context = React.createContext()


export const Provider = ({ children }) => {
    useEffect(() => { SplashScreen.hide() }, [])

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