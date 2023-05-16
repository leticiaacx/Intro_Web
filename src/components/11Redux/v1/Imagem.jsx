const Imagem = ({id}) => {
    return (
        <>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt=""
                style={{ width: "300px" }}
            />
        </>

    )
}

export default Imagem

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png