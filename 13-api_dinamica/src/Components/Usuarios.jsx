import React from 'react'
import { useParams } from 'react-router-dom'

const Usuarios = () => {
    
    const {id} =useParams();

    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos =  async () => {
          const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          const usuario= await data.json()
          setUser(usuario)
        }
      obtenerDatos();
    }, [id])
    

  return <div>
    <div>Datos del Usuario</div>
    {
        <ul>
            <li>{user.name} </li>
            <li>{user.username}</li>
            <li>{user.email}</li>
        </ul>

      }
  </div>
}

export default Usuarios