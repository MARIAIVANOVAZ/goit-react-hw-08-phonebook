import authOperations from 'components/redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

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

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1 style={styles.caption}>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button
          variant="contained"
          size="small"
          type="submit"
          style={styles.button}
        >
          LogIn
        </Button>
        {/* <button type="submit">Send</button> */}
      </form>
    </div>
  );
}
