const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { parse } = require('path');
const app = express();

app.use(cors())

const PRODUCT_DATA_FILE = path.join('./server-prodotti.json');
const USER_DATA_FILE = path.join('./server-utenti.json');
const CARRELLO_DATA_FILE = path.join('./server-carrello.json');

app.set('port', process.env.PORT || 9999);

//LIBRERIA CHE PARSA IL BODY DI OGNI CHIAMATA E LA TRASFORMA IN JSON
app.use(bodyParser.json())

app.get('/utenti', (req,res) => {
    fs.readFile(USER_DATA_FILE, (err, data) => {
        res.json(JSON.parse(data));
    })
})

app.get('/prodotti', (req,res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
        res.json(JSON.parse(data));
    })
})

app.post('/prodotti', (req,res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
        // res.json(JSON.parse(data));
        const listaProdotti = JSON.parse(data);
        const id = Math.floor(Math.random() * 1000)
        const nuovoProdotto = {
            id: id,
            titolo: req.body.titolo,
            descrizione: req.body.descrizione,
            prezzo: req.body.prezzo
        };

        listaProdotti.push(nuovoProdotto);
        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(listaProdotti),
            () => {
                res.json(listaProdotti);
            }
        );
    });
});

app.delete('/prodotti/:id', (req,res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
        const listaProdotti = JSON.parse(data);

        const nuovaLista = listaProdotti.filter(prodotto => prodotto.id !== parseInt(req.params.id))

        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(nuovaLista),
            () => {
                res.json(nuovaLista);
            }
        );
    });
});

app.post('/prodotti/addcart', (req,res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err, data) => {
        // res.json(JSON.parse(data));
        const listaProdotti = JSON.parse(data);


        var prodotto = listaProdotti.filter(prodotto => prodotto.id === parseInt(req.body.id))[0]

        if(prodotto){

            prodotto = {
                ...prodotto, quantita : prodotto.quantita++
            }

        }
        else{
            console.log("sono entrato else");
            const nuovoProdotto = {
                id: req.body.id,
                titolo: req.body.titolo,
                descrizione: req.body.descrizione,
                prezzo: req.body.prezzo,
                quantita: 1
            };                
        listaProdotti.push(nuovoProdotto);
        }
  
        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaProdotti),
            () => {
                res.json(listaProdotti);
            }
        );   
    });
});

app.post('/login', (req,res) => {
    fs.readFile(USER_DATA_FILE, (err, data) => {
        const listaUtenti = JSON.parse(data);
        var utenteLogin
        
        utenteLogin = {success : false}
        listaUtenti.map(persona => {

            if(persona.username === req.body.username && persona.password === req.body.password)
            {
                utenteLogin = {...persona, success : true}
            }
            return null;
        })
        res.json(utenteLogin)

    });
});

app.get('/carrello', (req,res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err, data) => {
        res.json(JSON.parse(data));
    })
})

app.delete('/carrello/:id', (req,res) => {
    fs.readFile(CARRELLO_DATA_FILE, (err, data) => {

        var listaProdotti = JSON.parse(data);

        var prodotto = listaProdotti.filter(prodotto => prodotto.id === parseInt(req.params.id))[0]

        if(prodotto.quantita > 1){

            prodotto = {
                ...prodotto, quantita : prodotto.quantita--
            }

        }
        else{

            listaProdotti = listaProdotti.filter(prodotto => prodotto.id !== parseInt(req.params.id))

        }

        fs.writeFile(
            CARRELLO_DATA_FILE,
            JSON.stringify(listaProdotti),
            () => {
                res.json(listaProdotti);
            }
        );
    });
});

app.post('/prodotti/modifica', (req,res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {

        var listaProdotti = JSON.parse(data);

        var nuovaLista = listaProdotti.map(prodotto => prodotto.id === req.body.id ? 
            
        prodotto = {
            id: req.body.id,
            titolo: req.body.titolo,
            descrizione: req.body.descrizione,
            prezzo: req.body.prezzo,
        } : prodotto)

        fs.writeFile(
            PRODUCT_DATA_FILE,
            JSON.stringify(nuovaLista),
            () => {
                res.json(nuovaLista);
            }
        );
    });
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})