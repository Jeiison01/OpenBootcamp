
import { useEffect, useState } from 'react';
import { State } from '../../models/contact.class';
import Contact from '../pure/Contact';


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
