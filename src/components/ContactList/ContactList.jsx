import ContactItem from './ContactItem';

import PropTypes from 'prop-types';
// import contactsOperations from '../redux/contacts/contactsOperations';

import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);

  const getVisibleContacts = () => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
      );
    }
  };

  const visibleContacts = getVisibleContacts();
  // console.log(visibleContacts);

  return (
    <>
      <ul>
        {/* {isFetching && <h2>Loading...</h2>}
        {(isError || !visibleContacts) && <h2>{error.data}</h2>}
        {visibleContacts &&
          !isError && */}
        {visibleContacts &&
          visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              // onDelete={deleteContact}
            ></ContactItem>
          ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.array,
};
