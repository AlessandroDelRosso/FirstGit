import React, { useEffect, useState } from 'react';
import { carrelloAction } from '../actions/carrello.action';
import { EliminaBottoneComponent } from '../components/EliminaBottoneComponent';
import { useCarrello } from '../contexts/carrello.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloService } from '../services/carrello.service';
import { prodottiService } from '../services/prodotti.service';
import { history } from '../utils/history';

const Prodottipage = () => {


    const [listaProdotti, setListaProdotti] = useState();

    const { carrelloState , dispatchCarrello} = useCarrello()

    useEffect(() => {

      var utente = JSON.parse(localStorage.getItem("utente"));
      if (!utente?.success){
        history.push("/login")
      }
      else{


        prodottiService.getAllProdotti().then((response) => {

            console.log(response);
            setListaProdotti(response);
        });
      }
    }, []);

    const eliminaProdotto = (id) =>{

      prodottiService.eliminaProdotto(id).then((response) =>{

        setListaProdotti(response);

      })
    }

    const selectProdotto = (prodotto) =>{


        dispatchCarrello(carrelloAction.selectAction(prodotto));
        history.push("/modifica")
    }

    const aggiungiCarrello = (prodotto) =>{

      prodottiService.aggiungiCarrello(prodotto).then((response) =>{

        carrelloService.getAllCarrello().then((response) => {
          dispatchCarrello(carrelloAction.countAction(response));
        });
      })
    }
    


  return (
    <>
    {listaProdotti ? listaProdotti.map(prodotto =>
    <EliminaBottoneComponent eliminaProdotto = {eliminaProdotto} prodotto = {prodotto} aggiungiCarrello = {aggiungiCarrello} selectProdotto={selectProdotto}/>

    ) : <h1>Non esiste</h1> 
    }
    </>
  )
}

const LayoutProdottipage = LayoutPage(Prodottipage);
export {LayoutProdottipage as Prodottipage}