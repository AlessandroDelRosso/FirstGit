import React, { useContext } from 'react'

export const UtenteContext = React.createContext();

export const useUtente = () => {
    const contextValue = useContext(UtenteContext);
    return contextValue;
}