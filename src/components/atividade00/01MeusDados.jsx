// import React from "react";
import "./styles.css"
function MeusDados() {
    return (
        <div>
            <h1 className="app"> Letícia Pinheiro de Oliveira </h1>
            <h1 className="app"> Sistemas de Informação </h1>
            <h1 className="app"> Universidade Federal do Ceará </h1>
        </div>
    )
}

export default MeusDados

/* arrow function v1
const MeusDados = () => {
     return (
         <div>
             <h1> Letícia Pinheiro de Oliveira </h1>
             <h1> Sistemas de Informação </h1>
             <h1> Universidade Federal do Ceará </h1>
         </div>
     )
}
export default MeusDados */

/*const MeusDados = () => 
    <div>
        <h1> Letícia Pinheiro de Oliveira </h1>
        <h1> Sistemas de Informação </h1>
        <h1> Universidade Federal do Ceará </h1>
    </div>

export default HelloW */

/* class MeusDados extends React.Component {
    render() {// obrigatoriamente precisa do render
        return (
            <div>
                <h1> Letícia Pinheiro de Oliveira </h1>
                <h1> Sistemas de Informação </h1>
                <h1> Universidade Federal do Ceará </h1>
            </div>
        )
    }
}

export default MeusDados */