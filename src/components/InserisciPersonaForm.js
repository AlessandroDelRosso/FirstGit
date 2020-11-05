import React from 'react'

export const InserisciPersonaForm = ({state, onChange, stampaPersona, updatePersona, edit}) => {
    return(
        <>
        <label>Inserisci Nome: </label>
        <input
        type = "text"
        name="nome"
        value={state?.nome}
        onChange ={(e) => onChange(e)}
        />

        <label>Inserisci Cognome: </label>
        <input
        type = "text"
        name="cognome"
        value={state?.cognome}
        onChange ={(e) =>onChange(e)}
        />

        {edit ? (<button type="submit" onClick= {() => updatePersona(state?.id)}>Modifica Persona</button>) :
        (<button type="submit" onClick= {() => stampaPersona()}>Inserisci Persona</button>)
        }
        </>
    )
}