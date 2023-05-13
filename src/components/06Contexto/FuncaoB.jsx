import CorContexto from "./MeuContexto"

const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                ({cor, nome})=>
                    <div>
                        <h1 style={{background: cor}}> FuncaoB de {nome}</h1>
                    </div>
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoB