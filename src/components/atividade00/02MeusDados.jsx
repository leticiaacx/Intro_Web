import "./styles.css"

const MeusDados= (props) => {
    return(
        <div>
            <h1 className="sty" > {props.nome} </h1>
            <h1 className="sty" > {props.curso} </h1>
            <h1 className="sty" > {props.uni} </h1>
        </div>

    )
}

export default MeusDados