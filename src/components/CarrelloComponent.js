import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const CarrelloComponent = ({eliminaProdotto, prodotto}) => {

    var utente = JSON.parse(localStorage.getItem("utente"));

    return (

        <>
            <Card style={{width: "50%", margin: "auto"}}>
                <Card.Header>Prodotto: </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Titolo: {prodotto.titolo}; <br/>
                        Descrizione: {prodotto.descrizione};<br/>
                        Prezzo: {prodotto.prezzo};<br/>
                        Quantita: {prodotto.quantita};
                    </Card.Text>
                    {utente?.ruolo === "user" &&
                    <Button variant="primary" onClick= {() => eliminaProdotto(prodotto.id)}>Elimina</Button>
                    }
                </Card.Body>
            </Card>
        </>
    )

}