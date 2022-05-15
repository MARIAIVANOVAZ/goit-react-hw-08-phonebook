import { filterContacts } from '../redux/filterSlice';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,

    textAlign: 'center',
  },
  input: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
};
const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);

  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <label style={styles.label}>
      Find contacts by name
      <input
        style={styles.input}
        type="text"
        value={filterValue}
        onChange={changeFilter}
      />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
// export   filteredContacts ;
export default Filter;
