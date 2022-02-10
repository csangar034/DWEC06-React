import React from 'react';

const Nosotros = () => {
  const [users, setUsers] = React.useState([])
 
  React.useEffect(() => {
    obtenerDatos();
  }, [])
  
  const obtenerDatos =  async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios= await data.json()
    setUsers(usuarios)
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
