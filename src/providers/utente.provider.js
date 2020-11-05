import React, { useReducer } from 'react'
import { UtenteContext } from '../contexts/utente.context'
import { utenteReducer } from '../reducers/utente.reducer'


export const UtenteProvider = ({children}) => {

    const [utenteState, dispatch] = useReducer(utenteReducer)

    return (

        <UtenteContext.Provider value={{utenteState,dispatch}}>
            {children}
        </UtenteContext.Provider>
    )
}