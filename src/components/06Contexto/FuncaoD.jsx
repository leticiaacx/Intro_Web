import CorContexto from "./MeuContexto"

const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                ({cor2}) =>
                    <div>
                        <h1 style={{ background: cor2 }}> FuncaoD </h1>
                    </div>
            }
        </CorContexto.Consumer>
    )
}

export default FuncaoD