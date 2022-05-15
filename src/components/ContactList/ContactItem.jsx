import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from 'components/redux/contactsApi';
import contactsOperations from '../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import Button from '@mui/material/Button';

const styles = {
  item: {
    listStyle: 'none',
  },
  name: {
    // display: 'flex',
    // flexDirection: 'column',
    marginBottom: 15,
    marginRight: 40,
    fontWeight: 700,
    fontSize: 24,
    color: '#1976d2',
  },
  container: {
    display: 'flex',
    // flexDirection: 'column',
  },
  number: {
    marginBottom: 15,
    marginRight: 40,
    fontWeight: 700,
    fontSize: 24,
    color: 'white',
  },
  // button: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   // display: 'block',
  // },
};

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li style={styles.item}>
      <div style={styles.container}>
        <p style={styles.name}>{name}:</p>
        <p style={styles.number}>{number}</p>
      </div>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
          toast.success('contact was deleted');
        }}
      >
        Delete
      </Button>

      {/* <button
        type="button"
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
          toast.success('contact was deleted');
        }}
      >
        Delete
      </button> */}
      <Toaster />
    </li>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.object,
};
export default ContactItem;
