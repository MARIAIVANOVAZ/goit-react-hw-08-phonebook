import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'components/redux/auth/authSelector';

export default function PrivateRoute({ children, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
