const URL_BACKEND = "http://localhost:9999";

export const prodottiService = {
    getAllProdotti,
    eliminaProdotto,
    aggiungiCarrello,
    aggiungiProdotto,
    modificaProdotto

};

function getAllProdotti() {
    const requestOptions  = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch('http://localhost:9999/prodotti', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}


function eliminaProdotto(id) {
    const requestOptions  = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch('http://localhost:9999/prodotti/' + id, requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}

function aggiungiCarrello(prodotto) {
    const requestOptions  = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prodotto)
    };

    return fetch('http://localhost:9999/prodotti/addcart', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}

function aggiungiProdotto(prodotto) {
    const requestOptions  = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prodotto)
    };

    return fetch('http://localhost:9999/prodotti', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}

function modificaProdotto(prodotto) {
    const requestOptions  = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prodotto)
    };

    return fetch('http://localhost:9999/prodotti/modifica', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}