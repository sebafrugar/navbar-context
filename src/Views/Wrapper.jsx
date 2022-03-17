import React, { useState, useEffect } from 'react';
import "./Form.css"

const Wrapper = (props) => {
    const {name, setName}= props;
    const [nombre , setnombre] = useState({
        nombre: "",
    })

    const onSubmit = (e) =>{
        e.preventDefault();
        setName([...name,nombre])
        console.log(e)

    }
    useEffect(()=>{

    },[nombre]);

    const handlerForm = (target) =>{
        
        setnombre({...nombre,[target.name]: target.value});
        console.log(nombre)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <label htmlFor="nombre" className="label">Nombre :</label>
                <input type="text" className="inputform" name="nombre" onChange={(e)=> handlerForm(e.target)} />
                <input className='btn' type="submit" value="Enviar"/>
            </form> 
        </div>
    );
}

export default Wrapper;
