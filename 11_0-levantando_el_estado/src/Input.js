import React, { useState } from 'react';

const Input = props => {
    const [nombre, setNombre] = useState("");

    const handleChange = (e) => {
      console.log(e.target.value);
      setNombre(e.target.value);
    }

    return (
        <input type="text" value={nombre} onChange={handleChange}/>
    )
}

export default Input;