import { carrelloConstant } from "../constants/carrello.constant";
import { prodottiService } from "../services/prodotti.service";

const countAction = (prodotti) => {
    return {
        type: carrelloConstant.COUNT,
        prodotti
    };
}

const selectAction = (prodotto) => {
    return {
        type: carrelloConstant.SET_PRODOTTO_SELEZIONATO,
        prodotto
    };
}

export const carrelloAction = {
    countAction,
    selectAction
};