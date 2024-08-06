import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.nome} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;