
const Temperatura = () =>{

    const celsiusPFahrenheit = (celsius) => (9* celsius + 160)/5;
    const fahrenheitPCelsius = (fahrenheit) => (fahrenheit - 32)*(5/9);
    const kelvin = (kelvin) =>{
       const celsius =  kelvin - 273;
       const fahrenheit = (kelvin - 273)*9/5 + 32;
       return {celsius, fahrenheit}
    }

    //main principal

    const c = 30
    const f = 67
    const k = 0
    return (
        <>
            <h1> A temperatura em Celsius {c}° para Fahrenheit é: {celsiusPFahrenheit}</h1>
            <h1> A temperatura em Fahrenheit {f}° para Celsius é: {fahrenheitPCelsius}</h1> 
            <h1> A temperatura em Kelvin {k}° em Celsius é: {kelvin(k).celsius}</h1>  
            <h1> A temperatura em Kelvin {k}° em Fahrenheit é: {kelvin(k).fahrenheit}</h1>
        </>
    )
}

export default  Temperatura