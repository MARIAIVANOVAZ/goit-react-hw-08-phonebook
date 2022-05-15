import { filterContacts } from '../redux/filterSlice';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);

  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
// export   filteredContacts ;
export default Filter;
