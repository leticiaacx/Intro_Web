const Filho = (props) => {

    function messagetoDad(msg) {
        props.rotina(msg)
    }

    return (
        <div>
            <h1 style={{ backgroundColor: "pink"}}> This is the son </h1>
            <h1>The son sends a message to his father . . <div className=""></div> </h1>
            <button
                onClick={
                    () => {
                        //alert("Fui clicado!")
                        messagetoDad("Hi Dad!")
                    }
                }
            >
                Send message
            </button>
        </div>
    )
}

export default Filho