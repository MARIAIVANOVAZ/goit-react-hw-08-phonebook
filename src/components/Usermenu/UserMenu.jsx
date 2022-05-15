import authSelector from '../redux/auth/authSelector';
import authOperations from '../redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: 20,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name} !</span>
      <Button
        variant="contained"
        size="small"
        style={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button> */}
    </div>
  );
}
