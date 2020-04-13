import React, {useState, useContext, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
  const contactContext = useContext(ContactContext)

  const {addContact, updateContact, current, clearCurrent} = contactContext

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: 'personal'
  }

  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      setContact(initialState)
    }
    // eslint-disable-next-line
  }, [contactContext, current])

  const [contact, setContact] = useState(initialState)

  const {firstName, lastName, email, phone, type} = contact

  const onChange = e =>
    setContact({...contact, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addContact(contact)
    } else {
      updateContact(contact)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={firstName}
        onChange={onChange}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={lastName}
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone Number'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default ContactForm
