import './App.css';
//import MeusDados from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';
// import Calculadora from './components/Funcaonterna/calculadora';
//import MyProps from './components/Funcaonterna/MyProps';
//import FunctionA from './components/Hierarquia/FunctionA';
//import {Header,Body,Footer} from './components/Funcaonterna/MultiplosComponentes';
//import { Supermercado, Legumes, Frutas, Bebidas } from './components/Hierarquia/06Children';
//import FuncaoA from './components/Contexto/FuncaoA';
//import SaveData from './components/LocalSession/LocalStorage';
import Pai from './components/08Pai&filho/Pai';

function App() {
  return (
    <div className="App">
      < Pai/>
    </div>
   
  );
}

/*function App() {
  return (
    <div class="centering">
      <Supermercado nome=" BomPreço">
        <Legumes nome="Brócolis" />
        <Frutas nome="Melão" />
        <Bebidas nome="Suco de Uva" />
        <Bebidas nome="Suco de Maracujá" />

      </Supermercado>
    </div>
  );
}*/

export default App; 
