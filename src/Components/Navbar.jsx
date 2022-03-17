import React from 'react';
import "./FormWrapper.css"



const Navbar = (props) => {

    const {nombre} = props;
    console.log(props)

    return (
        <div className="navbar">
            {nombre.map ((name,i)=> <h2 key={i} className="saludo">Hola {name.nombre} !</h2>)}
        </div>
    );
}

export default Navbar;
