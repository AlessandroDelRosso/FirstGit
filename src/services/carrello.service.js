const URL_BACKEND = "http://localhost:9999";

export const carrelloService = {
    getAllCarrello, 
    eliminaProdotto

};

function getAllCarrello() {
    const requestOptions  = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch('http://localhost:9999/carrello', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}


function eliminaProdotto(id) {
    const requestOptions  = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch('http://localhost:9999/carrello/' + id, requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}