import ContactForm from '../../components/СontactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../components/redux/contacts/contactsOperations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>Phonebook</h1> */}
      <ContactForm></ContactForm>
      <ContactList />
      <Filter />
    </div>
  );
}
