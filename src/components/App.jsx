import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from './PublicRoute';

// import ContactForm from './СontactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/authOperations';
// import contactsOperations from './redux/contacts/contactsOperations';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(contactsOperations.getContacts());
  // }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PublicRoute exact path="/" redirectTo="/login">
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute exact path="/login" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute exact path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="*"
            element={
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
}
