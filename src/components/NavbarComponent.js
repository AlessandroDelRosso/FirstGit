import React, { useEffect } from 'react'
import { Badge, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useUtente } from '../contexts/utente.context';
import { useCarrello } from '../contexts/carrello.context';
import { history } from '../utils/history';
import { utenteAction } from '../actions/utente.action';


export const NavbarComponent = () => {

    const { utenteState , dispatch} = useUtente()

    const { carrelloState , dispatchCarrello} = useCarrello()

    var utente = JSON.parse(localStorage.getItem("utente"));

    const logout = () => {

        
        localStorage.removeItem("utente");
        history.push("/login")
        dispatch(utenteAction.logoutAction())
    }


    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <i class="fas fa-shopping-cart"></i>
                {utente?.success && 
                <>
                <Navbar.Brand><Link  to="/">HomePage</Link></Navbar.Brand>
                <Navbar.Brand><Link to="/prodotti">Prodotti</Link></Navbar.Brand>
                </>}
                {utente?.ruolo === "user" &&
                <Navbar.Brand><Link to="/carrello">Carrello<Badge variant="secondary">{carrelloState?.listaprodotti?.length??"X"}</Badge></Link></Navbar.Brand>
                }
                {utente?.ruolo === "admin" && <Navbar.Brand><Link to="/inserisciprodotto">Inserisci Prodotto</Link></Navbar.Brand>}
                {utente?.success &&
                <Navbar.Brand><Link><span onClick={() => logout()}>Logout</span></Link></Navbar.Brand>
                }
            </Navbar>
        </>
    )

}