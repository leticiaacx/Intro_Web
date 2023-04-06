// o props.children funciona como um array, que me permite guardar e modificar cada um dos filhos
/*const Supermercado = ({children,nome}) => {
    return (
        <div>
            <h1> Supermercado{nome} </h1>
            {children}
        </div>
    )
}*/

import { Children } from "react"

const Supermercado = ({ children, nome }) => {
    return (
        <div>
            <h1> Supermercado{nome} </h1>
            {
                Children.map(children, filho =>
                    <div style={{ backgroundColor: "pink" }}>
                        {filho}
                    {/* to pegando cada filho e colocando uma cor, manipulando cada filho */}
                    </div>
                )
            }
        </div>
    )
}

const Legumes = ({nome}) =>
        <div>
            <h3> Legumes: {nome} </h3>
        </div>

const Frutas = ({ nome }) =>
        <div>
            <h3> Frutas: {nome} </h3>
        </div>

const Bebidas = ({ nome }) => 
        <div>
            <h3> Bedidas: {nome} </h3>
        </div>

export {Supermercado, Legumes, Frutas, Bebidas} 