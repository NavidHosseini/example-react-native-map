import React, { useEffect, useState } from 'react'


const ContextAllText = React.createContext()



export const ProviderAllText = ({ children }) => {

    const a = 2



    return (
        <ContextAllText.Provider value={{ a }}>
            {children}
        </ContextAllText.Provider>
    )
}

export default ContextAllText