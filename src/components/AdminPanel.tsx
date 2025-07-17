import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'admin_panel_content';

const AdminPanel = () => {
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState('Humberto Ribeiro de Freitas');
  const [descricao, setDescricao] = useState('Especialista em desenvolvimento de sistemas e soluções tecnológicas sob demanda. Foco em criar aplicações robustas, lojas virtuais e sistemas personalizados com excelência técnica e atendimento 100% home office.');
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const { titulo, descricao, avatar } = JSON.parse(data);
      setTitulo(titulo);
      setDescricao(descricao);
      setAvatar(avatar);
    }
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ titulo, descricao, avatar }));
    alert('Informações salvas! Atualize a página para ver as alterações.');
  };

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="fixed bottom-4 right-4 z-50 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-lg font-bold"
      >
        Painel Admin
      </button>
      {show && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Painel Administrativo</h2>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Título Principal</label>
              <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} className="w-full px-4 py-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Descrição do Hero</label>
              <textarea value={descricao} onChange={e => setDescricao(e.target.value)} className="w-full px-4 py-2 border rounded" rows={3} />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Imagem de Avatar</label>
              <input type="file" accept="image/*" onChange={handleAvatarChange} />
              {avatar && <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mt-2 mx-auto object-cover border" />}
            </div>
            <button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium">Salvar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel; 