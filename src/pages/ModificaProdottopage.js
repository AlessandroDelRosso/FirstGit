import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutPage } from '../layout/Layoutpage';
import { useCarrello } from '../contexts/carrello.context';
import { prodottiService } from '../services/prodotti.service';
import { history } from '../utils/history';
import { ProdottoComponent } from '../components/ProdottoComponent';

const ModificaProdottopage = () => {

    const { carrelloState , dispatchCarrello} = useCarrello()
    const [state, setState] = useState({id: carrelloState.prodotto.id , titolo: carrelloState.prodotto.titolo, descrizione: carrelloState.prodotto.descrizione, prezzo: carrelloState.prodotto.prezzo})
    const [edit, setEdit] = useState(false)

    useEffect(() => {

        var utente = JSON.parse(localStorage.getItem("utente"));
        if (!utente?.success){
          history.push("/login")
        }
        else{
            setEdit(false)
        }
      }, []);

      const modificaProdotto = () =>{
        var prodotto = {id: state.id, titolo: state.titolo, descrizione: state.descrizione, prezzo: state.prezzo}
          prodottiService.modificaProdotto(prodotto).then((response) =>{
  
             history.push("/prodotti")
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
    <ProdottoComponent  modificaProdotto = {modificaProdotto} onChange = {onChange} state = {state} edit={edit}/>
    </>
  );
}

const LayoutLoginpage = LayoutPage(ModificaProdottopage);
export {LayoutLoginpage as ModificaProdottopage}