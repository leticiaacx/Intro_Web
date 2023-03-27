const Calculadora = () =>{
    
    const somar = (x, y) => {
        return x + y
    }
    
    const subtrair = (x,y) =>{
        return x - y
    }

    function multiplicar(x, y) {
        return x * y
    }

    const dividir = (x, y) => x/y

    const chamarDivisao = (dividir) =>{
        return dividir(30, 5)
    }

    return(
        <div>
            <h2> O resultado da soma é: {somar(30, 6)} </h2>
            <h2> O resultado da subtração é: {subtrair(30, 6)} </h2>
            <h2> O resultado da multiplicação é: {multiplicar(30, 6)} </h2>
            <h2> O resultado da divisão é: {chamarDivisao(dividir)} </h2>
        </div>

    )
}

export default Calculadora