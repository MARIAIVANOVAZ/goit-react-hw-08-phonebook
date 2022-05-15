import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        LogIn
      </NavLink>
    </div>
  );
};
export default AuthNav;
