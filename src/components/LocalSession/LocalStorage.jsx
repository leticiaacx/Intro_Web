/* a diferença entre o localStorage e o sessionStorage é que enquanto
os dados armazenados no localStorage não expiram, os dados no sessionStorage
tem seus dados limpos ao expirar a sessão da página

e a diferença do localStorage pro contexto é uma comparação de laranjas e maças
o contexto api significa compartilhar o estado de uma arvore de componentes
ou seja, toda aquela arvore de componentes compartilha um estado
já o localStorage é pra armazenar dados entre as sessões e todos os 
componentes estão vendo, não so aquela arvore
*/

const SaveData = () => {
    const saveData = () => {
        const student = { name: "Leticia", program: "SI", age: "21" }
        localStorage.setItem("student01", JSON.stringify(student))//essa JSON.stringiFy ta transformando o objeto em string
    }

    return (
        <div>
            <h1> Saving data . . .</h1>
            {saveData()}
            <LoadData/>
        </div>
    )
}

const LoadData = () => {
    const loadData = () => {
        const studentLoaded = JSON.parse(localStorage.getItem("student01"))
        return (
            <>
                <h3>
                    Name:{studentLoaded.name}
                </h3>
                <h3>
                    Program:{studentLoaded.program}
                </h3>
                <h3>
                    Age:{studentLoaded.age}
                </h3>
            </>
        )
    }

    return (
        <>
            <h1> Loading data . . .  </h1>
            {loadData()}
        </>

    )
}

export default SaveData