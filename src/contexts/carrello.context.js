import React, { useContext } from 'react'

export const CarrelloContext = React.createContext();

export const useCarrello = () => {
    const contextValue = useContext(CarrelloContext);
    return contextValue;
}