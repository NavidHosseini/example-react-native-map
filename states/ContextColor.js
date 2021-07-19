import React, { useEffect, useState } from 'react'


const ContextColor = React.createContext()



export const ProviderColor = ({ children }) => {
    const a = 3

    return (
        <ContextColor.Provider
            value={{
                a
            }}>
            {children}
        </ContextColor.Provider>
    )
}

export default ContextColor