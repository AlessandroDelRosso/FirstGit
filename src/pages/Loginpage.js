import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginComponent } from '../components/LoginComponent';
import { history } from '../utils/history';
import { loginService } from '../services/login.service';
import { LayoutPage } from '../layout/Layoutpage';
import { utenteAction } from '../actions/utente.action';
import { useUtente } from '../contexts/utente.context';
import { carrelloService } from '../services/carrello.service';
import { carrelloAction } from '../actions/carrello.action';
import { useCarrello } from '../contexts/carrello.context';

const Loginpage = () => {

    const [state, setState] = useState({username: "", psw: ""})
    const [utente, setUtente] = useState();
    const { carrelloState , dispatchCarrello} = useCarrello()

    const { utenteState , dispatch} = useUtente()

    const loginPersona = () =>{

      var persona = {username: state.username, password: state.psw}
        loginService.loginPersona(persona).then((response) =>{

          setUtente(response);
          localStorage.setItem("utente", JSON.stringify(response))

          dispatch(utenteAction.loginAction(response))

          if(response.success)
          {
              carrelloService.getAllCarrello().then((response) => {
              dispatchCarrello(carrelloAction.countAction(response));
          });
              history.push("/prodotti")
          }
          else{
              console.log("Errore")
              setState({username:"", password:""})
          }
        })
      }

    const onChange = (e) =>
    {
      setState({ ...state,[e.target.name]: e.target.value})
    }

  return (

    <>
    <h1>Benvenuto {utenteState?.utente?.username??"NESSUNO"}</h1>
    <LoginComponent loginPersona = {loginPersona} onChange = {onChange} state = {state}/>
    </>
  );
}

const LayoutLoginpage = LayoutPage(Loginpage);
export {LayoutLoginpage as Loginpage}