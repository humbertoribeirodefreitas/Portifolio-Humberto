import React, { useState } from 'react';

interface Props {
  onLogin: () => void;
}

const USER = 'humberto';
const PASS = 'humberto90';

const AdminLogin: React.FC<Props> = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === USER && pass === PASS) {
      onLogin();
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login Admin</h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Usuário</label>
          <input type="text" value={user} onChange={e => setUser(e.target.value)} className="w-full px-4 py-2 border rounded" autoFocus />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Senha</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} className="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-bold">Entrar</button>
      </form>
    </div>
  );
};

export default AdminLogin; 