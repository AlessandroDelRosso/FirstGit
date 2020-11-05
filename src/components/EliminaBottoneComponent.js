import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const EliminaBottoneComponent = ({eliminaProdotto, prodotto, aggiungiCarrello, selectProdotto}) => {

    var utente = JSON.parse(localStorage.getItem("utente"));

    return (

        <>
            <Card style={{width: "50%", margin: "auto"}}>
                <Card.Header>Prodotto: </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Titolo: {prodotto.titolo}; <br/>
                        Descrizione: {prodotto.descrizione};<br/>
                        Prezzo: {prodotto.prezzo};
                    </Card.Text>
                    {utente?.ruolo === "admin" &&
                    <>
                    <Button variant="primary" onClick= {() => eliminaProdotto(prodotto.id)}>Elimina</Button>
                    <Button variant="primary" onClick= {() => selectProdotto(prodotto)}>Modifica</Button>
                    </>
                    }   
                    {utente?.ruolo === "user" &&
                    <Button variant="primary" onClick= {() => aggiungiCarrello(prodotto)}>Add to Cart</Button>
                    }
                </Card.Body>
            </Card>
        </>
    )

}