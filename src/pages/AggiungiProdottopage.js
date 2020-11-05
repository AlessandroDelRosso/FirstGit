import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloService } from '../services/carrello.service';
import { carrelloAction } from '../actions/carrello.action';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { useCarrello } from '../contexts/carrello.context';
import { prodottiService } from '../services/prodotti.service';
import { history } from '../utils/history';

const AggiungiProdottopage = () => {

    const [state, setState] = useState({titolo: "", descrizione: "", prezzo: ""})
    const { carrelloState , dispatchCarrello} = useCarrello()
    const [edit, setEdit] = useState(false)

    useEffect(() => {

        var utente = JSON.parse(localStorage.getItem("utente"));
        if (!utente?.success){
          history.push("/login")
        }
        else{
          setEdit(true)
        }
      }, []);

    const aggiungiProdotto = () =>{

      var prodotto = {titolo: state.titolo, descrizione: state.descrizione, prezzo: state.prezzo}
        prodottiService.aggiungiProdotto(prodotto).then((response) =>{

          carrelloService.getAllCarrello().then((response) => {
            dispatchCarrello(carrelloAction.countAction(response));
            pulisciInput()
        })
        }) 
    }

    const onChange = (e) =>
    {
      setState({ ...state,[e.target.name]: e.target.value})
    }

    const pulisciInput = () =>{

        setState({titolo: "", descrizione: "", prezzo: ""})
      }


  return (

    <>
    <ProdottoComponent aggiungiProdotto = {aggiungiProdotto} onChange = {onChange} state = {state}  edit = {edit}/>
    </>
  );
}

const LayoutLoginpage = LayoutPage(AggiungiProdottopage);
export {LayoutLoginpage as AggiungiProdottopage}