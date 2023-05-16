import { useEffect, useState } from "react"

const correntistas = [
    { nome: "Sicrano", aplic: { pp: 856.4, rf: 50.4, cc: 34.0 } },
    { nome: "Beltrano", aplic: { pp: 0.0, rf: 700.67, cc: 800 } },
    { nome: "Fulano", aplic: { pp: 5000.00, rf: 0.0, cc: 500 } }
];

const Questao01X = () => { // O estado medias armazena a média das aplicações e o estado render armazena o componente React que exibe o nome do correntista com a aplicação mais alta.
    const [medias, setMedias] = useState();
    const [renderizar, setRender] = useState();
    function comunicacao_filho(param) {
        setMedias(param);
    }

    useEffect(() => {
        if (medias) {
            var name = medias.map((x, r) => {
                let n = Math.max(...medias)
                if (x == n) {
                    return correntistas[r].nome
                }
            }
            )
            setRender(() => {
                return (
                    <div>
                        {name}
                    </div>
                )
            })
        }
    }, [medias])

    return (
        <div>
            <Questao01Y correntistas={correntistas} comunicacao={comunicacao_filho} />
            {renderizar}
        </div>
    )
}
const Questao01Y = (props) => { //O componente Questao01Y recebe as propriedades correntistas e comunicacao. 
    useEffect(() => {
        let { correntistas, comunicacao } = props;
        let media_aplicacoes = [];
        //metodo de mapeamento de arrays
        correntistas.map((element) => { //A média é calculada utilizando o método map para percorrer a matriz correntistas e, para cada elemento, é feita a média das propriedades pp, rf e cc.
            let { pp, rf, cc } = element.aplic;
            media_aplicacoes.push((pp + rf + cc) / 3);
        });
        comunicacao(media_aplicacoes)
    }, [])
    return (
        <div>
        </div>
    )
}

export default Questao01X;