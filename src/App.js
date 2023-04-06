import './components/Hierarquia/style.css';
//import MeusDados from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';
// import Calculadora from './components/Funcaonterna/calculadora';
//import MyProps from './components/Funcaonterna/MyProps';
//import FunctionA from './components/Hierarquia/FunctionA';
//import {Header,Body,Footer} from './components/Funcaonterna/MultiplosComponentes';
import { Supermercado, Legumes, Frutas, Bebidas } from './components/Hierarquia/06Children';

function App() {
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
}

export default App; 
