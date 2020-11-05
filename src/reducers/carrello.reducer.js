import { utenteAction } from "../actions/utente.action";
import { carrelloConstant } from "../constants/carrello.constant";


export const carrelloReducer = (state, action) => {

    switch (action.type) {

        case carrelloConstant.COUNT:
            return {
                ...state,
                listaprodotti: action.prodotti
            };

         case carrelloConstant.SET_PRODOTTO_SELEZIONATO:
            return {
                ...state,
                prodotto: action.prodotto
            };   
            
        default:
            return state;
    }
}