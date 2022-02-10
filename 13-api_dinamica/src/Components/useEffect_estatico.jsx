import React from 'react';

const Nosotros = () => {

  const [users, setUsers] = React.useState([])
  const datos = [
    {
    id:223,
    name: "usuario1"
   },     {
    id:233,
    name: "usuario2"
   },     {
    id:4,
    name: "usuario3"
   }
]


  React.useEffect(() => {
      setUsers(datos)
      console.log(users);
  }, [])

  const pedirDatos = () => {
      

  }


  return <div>
    <h1>Nosotros</h1>

  </div>;
};

export default Nosotros;
