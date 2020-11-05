import React, { useEffect, useState } from 'react';
import { CarrelloComponent } from '../components/CarrelloComponent';
import { useCarrello } from '../contexts/carrello.context';
import { LayoutPage } from '../layout/Layoutpage';
import { carrelloService } from '../services/carrello.service';
import { carrelloAction } from '../actions/carrello.action';
import { history } from '../utils/history';

const Carrellopage = () => {


    const [listaCarrello, setListaCarrello] = useState();

    const { carrelloState , dispatchCarrello} = useCarrello()

    useEffect(() => {

      var utente = JSON.parse(localStorage.getItem("utente"));
      if (!utente?.success){
        history.push("/login")
      }
      else{
        carrelloService.getAllCarrello().then((response) => {

            setListaCarrello(response);
        });
    }
    }, 
    []);

    const eliminaProdotto = (id) =>{

        carrelloService.eliminaProdotto(id).then((response) =>{
  
          setListaCarrello(response);
          dispatchCarrello(carrelloAction.countAction(response));
        })
      }

  return (
    <>
    {listaCarrello ? listaCarrello.map(prodotto =>
    <CarrelloComponent prodotto = {prodotto} eliminaProdotto = {eliminaProdotto}/>

    ) : <h1>Non esiste</h1> 
    }
    </>
  )
}

const LayoutProdottipage = LayoutPage(Carrellopage);
export {LayoutProdottipage as Carrellopage}