import React from "react";
/*function HelloW(){
    return(
        <div>
            <h1> Letícia </h1>
            <h2> Sistemas de Informação </h2>
        </div>
    )
}

export default HelloW */

/* arrow function v1
const HelloW = () => {
     return (
         <div>
             <h1> Letícia </h1>
             <h2> Sistemas de Informação </h2>
         </div>
     )
}

export default HelloW */

//arrow function v2
/*const HelloW = () => 
    <div>
        <h1> Leticia </h1>
        <h2> Sistemas de Informação </h2>
    </div>

export default HelloW */


// v3 w/ class
class HelloW extends React.Component {
    render(){// obrigatoriamente precisa do render
        return(
            <div>
                <h1> Leticia </h1>
                <h2> Sistemas de Informação </h2>
            </div>
        )
    }
}

export default HelloW