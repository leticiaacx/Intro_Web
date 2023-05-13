import { useState , useEffect } from "react"

const FunctionEstados = () =>{
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [Par, setPar] = useState(true)

    useEffect(
        ()=>{
            if(contador%2===0) setPar(true)
            else setPar(false)
        }
        ,
        [contador]
    )

    const acaoBotao = () =>{
        setContador(contador+1)
    }

    return(
        <div>
            <h1> Contador: {contador} </h1>
            <h1>É Par: {""+Par}</h1>
            <button
                onClick={acaoBotao}
            > 
                Aumentar Contador
            </button>
        </div>

    )
}

export default FunctionEstados