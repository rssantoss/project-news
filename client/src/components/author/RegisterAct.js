import React, { useState } from 'react';
import axios from 'axios';

function RegisterAct() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', { username, password });
      console.log('Autor registrado com sucesso', response.data);
    } catch (error) {
      console.error('Falha ao registrar um autor', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterAct;