import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelloComponent } from '../components/HelloComponent';
import { AnimaleComponent } from '../components/AnimaleComponent';
import { InserisciPersonaForm } from '../components/InserisciPersonaForm';
import { LayoutPage } from '../layout/Layoutpage';
import { history } from '../utils/history';



const Homepage = () => {
  // const [listaNome, setListaNome] = useState(["Pierpaolo","Alessandro","Roberto"])
  const [listaPersone, setListaPersone] = useState([
    {id:1, nome: "Pierpaolo", cognome: "Rossi"},
    {id:2, nome:"Alessandro", cognome:"Del Rosso"},
    {id:3, nome:"Giovanni", cognome:"Verdi"}])

  const [listaAnimale, setListaAnimale] = useState([
    {nome: "Aron", razza: "Bassotto"},
    {nome:"Thor", razza:"BullDog"},
    {nome:"Tayler", razza:"Beagle"},
    {nome:"Jack", razza:"Husky"},
    {nome:"Lucky", razza:"Pastore Tedesco"}])

    const [state, setState] = useState({nome: "", cognome: ""})
    const [edit, setEdit] = useState(false)

    // setListaPersone({nome:"Alessandro", cognome:"Raggi"})

    const onChange = (e) =>
    {
      // const {value, id} = e.target;
      // console.log(e);
      // console.log(e.target.name);
      // console.log(e.target.value);
      setState({ ...state,[e.target.name]: e.target.value})
    }

    useEffect(() => {

      var utente = JSON.parse(localStorage.getItem("utente"));
      if (!utente?.success){
        history.push("/login")
      }
    }, []); 

    const stampaPersona = () => {
      console.log(state.nome)
      console.log(state.cognome)
      var id = Math.floor(Math.random() * 1000)
      console.log(id)
      var nuovaPersona = {id:id, nome:state.nome, cognome:state.cognome}
      setListaPersone([...listaPersone, nuovaPersona])
      pulisciInput()
      
    }

    const eliminaPersona = (id) => {
      console.log(id)
      setListaPersone(listaPersone.filter(persona => persona.id !== id))
    }

    const modificaPersona = (id) =>{

      var persona = (listaPersone.filter(persona => persona.id === id))[0];
      setState({id:persona.id, nome:persona.nome, cognome:persona.cognome})
      setEdit(true)
    }

    const updatePersona = (id) => {

      var nuovaPersona = {id: id, nome: state.nome, cognome: state.cognome};
        
      setListaPersone(listaPersone.map(persona =>
        
        persona.id === id ? persona = nuovaPersona : persona
        //Oppure:
      //   {

      //   if(persona.id === id)

      //   persona = personaNuova;
      //   return persona;

      // }
      ));

    }

    const pulisciInput = () =>{

      setState({nome:"",cognome:""})
    }

  return (

    <>
    {/* {listaNome.map(nome =>
      <HelloComponent nome={nome} cognome="Rossi" />
      )} */}

    {listaPersone.map(elemento =>
      <HelloComponent id = {elemento.id} nome={elemento.nome} cognome= {elemento.cognome} eliminaPersona={eliminaPersona} modificaPersona={modificaPersona}/>
      )}

    {listaAnimale.map(animale =>
      <AnimaleComponent nome={animale.nome} razza= {animale.razza} />
      )}

    <InserisciPersonaForm state= {state} onChange={onChange} stampaPersona={stampaPersona} edit={edit}  updatePersona={updatePersona}/>
    </>
    // <div>
    //   <HelloComponent nome="Alessandro" />
    //   <HelloComponent nome="Roberto" />
    //   <HelloComponent nome="Luca" />
    // </div>
  );
}

const LayoutHomepage = LayoutPage(Homepage);
export {LayoutHomepage as Homepage}
