import Imagem from "./Imagem"
import BotaoDescrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import { useState } from "react"

const TelaPrincipal = () =>{

    const [id, setId] = useState(100)

    const incrementar = () => {
        setId((prev)=>prev+1)
    }

    const descrementar = () => {
        setId((prev) => prev - 1)
    }

    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Imagem id={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}/>
                        </td>
                        <td>
                            <BotaoDescrementar descrementar={descrementar}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default TelaPrincipal