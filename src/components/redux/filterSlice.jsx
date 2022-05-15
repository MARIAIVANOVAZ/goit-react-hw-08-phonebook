import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = contactsFilterSlice.actions;
