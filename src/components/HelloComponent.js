import React from 'react'
// import './HelloComponent.css'
//Usare il .module e quindi creare un file css .module.css permette di evitare che il codice css 
//si propaghi su tutti gli altri script ma rimanga solo su questo
import style from './HelloComponent.module.css'

export const HelloComponent = ({id, nome, cognome, eliminaPersona, modificaPersona}) => {

    return (

        <>
        {/* <div className="containerHelloComponent"> */}
        <div className={style.containerHelloComponent}>
        <h1>{id} Hello {nome} {cognome}!</h1>
        <button onClick= {() => eliminaPersona(id)}>Elimina</button>
        <button onClick= {() => modificaPersona(id)}>Modifica</button>
        </div>
        </>
    )

}