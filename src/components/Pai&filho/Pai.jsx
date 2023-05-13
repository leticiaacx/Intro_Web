import Filho from "./Filho"

const Pai = () => {

    function messageSon(msg) {
        //alert("Recebi: " + mensagem)
        alert(`I received: ${msg}`)
    }

    return (
        <div>
            <h1 style={{ backgroundColor: "Gray"}}> This is the Father  </h1>
            <Filho rotina={messageSon} />
        </div>
        
    )
}

export default Pai