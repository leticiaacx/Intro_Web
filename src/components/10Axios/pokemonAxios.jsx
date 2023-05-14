import { useState, useEffect } from "react"
import axios from "axios"

const PokemonAxios = () => {

    const [id, setId] = useState(6)
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [image2, setImage2] = useState("")

    useEffect(
        () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(
                    (response) => {
                        //console.log
                        setName(response.data.name)
                        setImage(response.data.sprites.front_default)
                        setImage2(response.data.sprites.back_default)
                    }
                )
                .catch((error) => console.log(error))
        }
        ,
        [id]
    )

    return (
        <>
            <h1>Name: {name}</h1>
            <h1>ID: {id}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={image} style={{ width: "400px" }} />
                        </td>
                        <td>
                            <img src={image2} style={{ width: "400px" }} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                onClick={
                    ()=>{
                        setId((prev) => prev - 1)
                    }
                }
            >
                Back pokemon
            </button>
            <button
                onClick={
                    () => {
                        setId((prev) => prev + 1)
                    }
                }
            >
                Next Pokemon
            </button>
        </>
    )
}

export default PokemonAxios