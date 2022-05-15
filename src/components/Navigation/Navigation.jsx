import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={({ isActive }) => (isActive ? s.active : s.link)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
