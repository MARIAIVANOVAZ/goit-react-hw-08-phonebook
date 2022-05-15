import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from 'components/redux/contactsApi';
import contactsOperations from '../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';

// import { deleteContact } from 'components/redux/valueSlice';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.getContacts());
  // }, [dispatch]);

  // const [deleteContact] = useDeleteContactMutation();
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
          toast.success('contact was deleted');
        }}
      >
        Delete
      </button>
      <Toaster />;
    </li>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.object,
};
export default ContactItem;
