import './App.css';
//import MeusDados from './components/atividade00/02MeusDados';
//import Temperatura from './components/atividade00/03Temperatura';
// import Calculadora from './components/Funcaonterna/calculadora';
import MyProps from './components/Funcaonterna/MyProps';

function App() {
  return (
    <MyProps 
      nome="Letícia Pinheiro"
      idade={21}
      curso="SI" 
    />
  );
} 

export default App;
