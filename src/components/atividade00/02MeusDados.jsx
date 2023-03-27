import "./styles.css"

const MeusDados= (props) => {
    return(
        <div>

            <h1 className="sty" > {props.nome} </h1>
            <h1 className="sty" > {props.curso} </h1>
            <h1 className="sty" > {props.uni} </h1>
            <p className="p"> Página da atividade 002 </p>
           
        </div>

    )
}

export default MeusDados