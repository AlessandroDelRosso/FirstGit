import { utenteConstant } from "../constants/utente.constant";

const loginAction = (utente) => {
    return {
        type: utenteConstant.LOGIN,
        utente
    };
}

const logoutAction = () => {
    return {
        type: utenteConstant.LOGOUT,
    };
}

export const utenteAction = {
    loginAction,
    logoutAction,
};