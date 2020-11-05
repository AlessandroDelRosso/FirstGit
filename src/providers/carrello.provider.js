import React, { useReducer } from 'react'
import { CarrelloContext } from '../contexts/carrello.context'
import { carrelloReducer } from '../reducers/carrello.reducer'


export const CarrelloProvider = ({children}) => {

    const [carrelloState, dispatchCarrello] = useReducer(carrelloReducer)

    return (

        <CarrelloContext.Provider value={{carrelloState,dispatchCarrello}}>
            {children}
        </CarrelloContext.Provider>
    )
}