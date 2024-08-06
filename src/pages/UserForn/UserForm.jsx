import React, { useState } from 'react';

const UserForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, email, idade }),
    })
      .then(response => response.json())
      .then(data => {
        alert('Usuário criado com sucesso!');
        setNome('');
        setEmail('');
        setIdade('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Idade:</label>
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
      </div>
      <button type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default UserForm;
