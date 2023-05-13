import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"

import CorContexto from "./MeuContexto"

const FuncaoA = () => {
    const cor = "Lightcoral"

    return(
        <CorContexto.Provider value ={{cor: cor, nome: "Letícia", cor2: "gray"}}>
            <div>
                <h1 style={{background: cor}}> FunçãoA </h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}

export default FuncaoA 
