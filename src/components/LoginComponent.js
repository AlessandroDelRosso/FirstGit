import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export const LoginComponent = ({state, loginPersona, onChange}) => {

    return (

        <>
        <Card style={{width:"50%", margin:"auto", padding: "10px", marginTop: "100px"}}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Inserisci Username" 
                        name="username"
                        value={state?.username}
                        onChange ={(e) => onChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Inserisci Password" 
                        name="psw"
                        value={state?.psw}
                        onChange ={(e) => onChange(e)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={() => loginPersona()}>
                    Login
                </Button>
            </Form>
        </Card> 
        </>
    )

}