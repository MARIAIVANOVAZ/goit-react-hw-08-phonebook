import authSelector from '../redux/auth/authSelector';
import authOperations from '../redux/auth/authOperations';
import { useSelector, useDispatch } from 'react-redux';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector.getUserName);
  return (
    <div>
      <span>Welcome, {name} !</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </div>
  );
}
