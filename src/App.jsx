import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1>Tema Atual: {theme}</h1>
        <button onClick={toggleTheme}>Alternar Tema</button>
      </div>
    </div>
  );
};

export default App;