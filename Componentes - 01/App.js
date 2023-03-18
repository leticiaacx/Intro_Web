import helloWorld from "./helloWorld"
import "./Componentes - 01.styles.css"
 

function App(){ // todo componente jsx tem q retornar jsx sempre
    return(
        <div 
            className="app">
             <helloWorld/>
        </div>
    );
}

export default App;