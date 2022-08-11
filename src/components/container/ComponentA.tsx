
import {useState } from 'react';
import Contact from '../pure/ComponentB';


type Props = {
}

export const ContactList = () => {

  const [first, setfirst] = useState({
    name: 'Jeison',
    lastName: 'Rodriguez',
    email: 'james@rodriguez.com',
    coneccted: false
  })

    const handleClick = () => {
      setfirst(prevState => ({
            ...prevState,
            coneccted: !prevState.coneccted
        }))}
    
  return (
    <>
        <Contact contact={first} />
        <button onClick={handleClick}>Cambiar Estado de Conectado</button>
    </>
  )
}
