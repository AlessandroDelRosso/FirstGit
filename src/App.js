import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homepage } from './pages/Homepage';
import { BrowserRouter} from 'react-router-dom';
import { Route,Router} from 'react-router-dom';
import {Prodottipage} from './pages/Prodottipage';
import { history } from './utils/history';
import { Loginpage } from './pages/Loginpage';
import { UtenteProvider } from './providers/utente.provider';
import { Carrellopage } from './pages/Carrellopage';
import { CarrelloProvider } from './providers/carrello.provider';
import { AggiungiProdottopage } from './pages/AggiungiProdottopage';
import { ModificaProdottopage } from './pages/ModificaProdottopage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Router history={history}>
          <CarrelloProvider>
          <UtenteProvider>
          <Route path="/" exact component={Homepage} />
          <Route path="/prodotti" exact component={Prodottipage} />      
          <Route path="/login" exact component={Loginpage} />
          <Route path="/carrello" exact component={Carrellopage} />
          <Route path="/inserisciprodotto" exact component={AggiungiProdottopage} />
          <Route path="/modifica" exact component={ModificaProdottopage} />
          </UtenteProvider>
          </CarrelloProvider>
        </Router>
    </BrowserRouter>
    </>

  );
}

export default App;
