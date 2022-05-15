import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import contactsOperations from '../redux/contacts/contactsOperations';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  caption: {
    textAlign: 'center',
    color: '#1976d2',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const data = useSelector(state => state.contacts.contacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(event.target);
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();

    if (e.currentTarget.elements.name.value.trim() === '') {
      return;
    }

    const doubleContact = data?.find(contact =>
      contact.name
        .toLowerCase()
        .includes(e.currentTarget.elements.name.value.toLowerCase())
    );

    if (doubleContact) {
      toast.error(`${doubleContact.name} is already in contacts`);
      // alert(`${doubleContact.name} is already in contacts`);
      return;
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
      toast.success('contact was added!');
    }

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <h1 style={styles.caption}>Contacts</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // placeholder="Name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label style={styles.label}>
          Phone
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          variant="contained"
          size="small"
          type="submit"
          style={styles.button}
        >
          Add contacts
        </Button>
        {/* <button type="submit">Add contacts</button> */}
        <Toaster />
      </form>
    </>
  );
}
