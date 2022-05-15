import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const addContact = createAsyncThunk('contacts/post', async credentials => {
  try {
    const { data } = await axios.post('contacts', credentials);
    // token.set(data.token);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
const getContacts = createAsyncThunk('contacts/get', async credentials => {
  try {
    const { data } = await axios.get('contacts', credentials);
    // token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { dispatch }) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);

      dispatch(getContacts());
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

const operations = {
  addContact,
  getContacts,
  deleteContact,
};
export default operations;
