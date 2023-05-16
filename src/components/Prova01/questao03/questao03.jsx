import React, { useEffect, useState } from 'react';
const Questao03 = () => {
    //Define um estado "capitais" com valor inicial vazio
    const [capitais, setCapitais] = useState([]);

    // useEffect é usado para buscar os dados da API assim que o componente for montado
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/region/europe?fields=capital,population"); //Faz uma solicitação HTTP GET para a API dos países
                const data = await response.json();
                const populacaoTotal = data.reduce((total, country) => total + country.population, 0);// Calcula a população total somando as populações de todos os países
                const mediaPopulacao = populacaoTotal / data.length; // Calcula a média da população
                const capitaisFiltradas = data.filter(country => country.population > mediaPopulacao)// Filtra os países com população acima da média e extrai as capitais e populações
                    .map(country => `${country.capital[0]} - ${country.population}`);
                setCapitais(capitaisFiltradas); // Atualiza o estado "capitais" com as capitais filtradas
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();// Chama a função fetchData para buscar os dados da API
    }, []);

    return ( // Renderiza o componente
        <div>
            <h1>Capitais com população acima da média:</h1>
            <ul>
                {capitais.map((capital, index) => (
                    <li key={index}>{capital}</li>
                ))}
            </ul>
        </div>
    );
};

export default Questao03;