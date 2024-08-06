import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import Header from './pages/Header/Header';
import Main from './pages/Main/Main'
import UserForm from './pages/UserForn/UserForm';
import UserList from './pages/UserList/UserList'

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/Header" element={<Header />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;