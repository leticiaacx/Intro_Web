const Hero = ({name}) => {
    return (
        <div>
            <h1>
                Meu nome: {name}
            </h1>
            <img src="https://th.bing.com/th/id/R.29deeeaac78904b82790930b90f89b60?rik=Z2qtKGDTflV3Aw&pid=ImgRaw&r=0" 
            alt="Manel Gomes" />
            style={{width:"240px"}}
        </div>
    )
}

const Arena = ({name}) =>{
    return (
        <div>
            <h1>
                Arena: {name}
            </h1>
            <Hero name = "Super Caneta Azul"/>
        </div>
    )
}

export {Hero, Arena}