
import ContactClass, { State } from '../../models/contact.class'

type Props = {
    contact: State
}

const Contact = (props: Props) => {

    const defaultContact = new ContactClass(props.contact);
    
    const {name, email, lastName, coneccted} = defaultContact.state
    
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>LastName: {lastName}</h2>
        <h3>Email: {email}</h3>
        <h4>Conectado: {coneccted ? 'Contacto en Linea': 'Contacto No Disponible'}</h4>
    </div>
  )
}

export default Contact