import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.addContact.fulfilled](state, action) {
      state.contacts.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      console.log(action);
      console.log(state);
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export default contactsSlice.reducer;
