import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export const ProdottoComponent = ({state, aggiungiProdotto, onChange, edit, modificaProdotto}) => {

    return (

        <>
        <Card style={{width:"50%", margin:"auto", padding: "10px", marginTop: "100px"}}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Titolo</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Titolo" 
                        name="titolo"
                        value={state?.titolo}
                        onChange ={(e) => onChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descrizione</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Descrizione" 
                        name="descrizione"
                        value={state?.descrizione}
                        onChange ={(e) => onChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Prezzo</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Prezzo" 
                        name="prezzo"
                        value={state?.prezzo}
                        onChange ={(e) => onChange(e)}
                    />
                </Form.Group>
                {edit  ? (
               
                <Button variant="primary" onClick={() => aggiungiProdotto()}>
                    Inserisci
                </Button>):
                (
                <Button variant="primary" onClick={() => modificaProdotto()}>
                Modifica
                </Button>
                )
                }
            </Form>
        </Card> 
        </>
    )

}