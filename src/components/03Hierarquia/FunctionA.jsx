import FunctionB from "./FunctionB"

const FunctionA = ({numeroX}) =>{
    return (
        <div>
            <h1> Componentes A</h1>
            <FunctionB x={numeroX} y={5}/>
            <FunctionB x={10} y={5} />
            <FunctionB x={10} y={5} />
        </div>
    )
}

export default FunctionA