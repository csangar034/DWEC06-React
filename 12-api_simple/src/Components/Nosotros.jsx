import React, {useState, useEffect} from 'react';

const Nosotros = () => {
  const [users, setUsers] = useState([])
 
  useEffect(() => {
    obtenerDatos();
  }, [])
  
  const obtenerDatos =  async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios= await data.json();
    setUsers(usuarios);
  }

  return <div>
    <h1>Nosotros</h1>
    <ul>
      {
        users.map(item => (
          <li key = {item.id}>{item.name} - {item.email}</li>
        ))
      }
    </ul>

  </div>;
};

export default Nosotros;
