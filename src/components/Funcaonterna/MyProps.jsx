//v0   receber por paramentro a propriedade
/*const MyProps = (props) =>{
    const renderizarMeuNome = () =>{
        return (
            <span>
                Letícia
            </span>
        )
    }

    return(
        <div> 
            <h1>Meu nome é: {renderizarMeuNome()} </h1>
            <h1> Meu nome, com props, é: {props.nome} </h1> 
            o props do nome fica no app.js 
        </div>
    )
}*/

/*
const MyProps = (props) => {
    const {nome, idade, curso} = props
    
    return(
        <div>
            <h1>Meu nome é: {nome} </h1>
            <h1>Minha idade é: {idade}   </h1>
            <h1>Meu curso é: {curso}  </h1>
        </div>
    )

}*/

const MyProps = ({nome, idade, curso}) => {
    return (
        <div>
            <h1>Meu nome é: {nome} </h1>
            <h1>Minha idade é: {idade}   </h1>
            <h1>Meu curso é: {curso}  </h1>
        </div>
    )

}

export default MyProps