const URL_BACKEND = "http://localhost:9999";

export const loginService = {
    loginPersona

};

function loginPersona(persona) {

    const requestOptions  = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(persona)
    };

    return fetch('http://localhost:9999/login', requestOptions).
    then(response => response.json()).catch(err => console.log(err));
}