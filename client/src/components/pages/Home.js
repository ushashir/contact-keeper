import React, {useContext, useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Home = () => {
  const {loadUser} = useContext(AuthContext)
  const {contacts} = useContext(ContactContext)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='grid-2'>
      <div className=''>
        <ContactForm />
      </div>
      <div className=''>
        {contacts !== null && <ContactFilter />}
        <Contacts />
      </div>
    </div>
  )
}

export default Home
