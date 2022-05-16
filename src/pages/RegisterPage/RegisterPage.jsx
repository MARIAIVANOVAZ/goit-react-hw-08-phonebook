import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'components/redux/auth/authOperations';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';

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

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
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
    if (!name || !email || !password) {
      toast.error('Enter your data, please!');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1 style={styles.caption}>Sign Up</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
          Sign Up
        </Button>
        <Toaster />
        {/* <button type="submit">Sigh up</button> */}
      </form>
    </div>
  );
}
