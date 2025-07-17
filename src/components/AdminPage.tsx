import React, { useState } from 'react';
import AdminLogin from './AdminLogin';

const LOCAL_STORAGE_KEY = 'admin_panel_content';

const TABS = [
  'Hero',
  'Estatísticas',
  'Projetos',
  'Equipe',
  'Serviços',
  'QR Code',
  'Contato',
  'Footer',
  'Cores'
];

const AdminPage = () => {
  const [logged, setLogged] = useState(false);
  const [tab, setTab] = useState('Hero');

  if (!logged) return <AdminLogin onLogin={() => setLogged(true)} />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-12">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative">
        <button onClick={() => setLogged(false)} className="absolute top-4 right-4 text-red-600 font-bold">Sair</button>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Painel Administrativo</h2>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded font-medium transition-colors ${tab === t ? 'bg-blue-700 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Conteúdo das abas */}
        {tab === 'Hero' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Hero (Topo)</h3>
            <label className="block mb-2 font-medium">Nome principal</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Nome" />
            <label className="block mb-2 font-medium">Cargo</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Cargo" />
            <label className="block mb-2 font-medium">Descrição</label>
            <textarea className="w-full px-4 py-2 border rounded mb-4" placeholder="Descrição" />
            <label className="block mb-2 font-medium">Avatar</label>
            <input type="file" className="mb-4" />
          </div>
        )}
        {tab === 'Estatísticas' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Estatísticas</h3>
            {/* Campos para editar estatísticas */}
            <label className="block mb-2 font-medium">Exemplo: Anos de Experiência</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="5+" />
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Texto" />
          </div>
        )}
        {tab === 'Projetos' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Projetos</h3>
            {/* Campos para CRUD de projetos */}
            <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">Adicionar Projeto</button>
            {/* Listagem de projetos aqui */}
          </div>
        )}
        {tab === 'Equipe' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Equipe</h3>
            {/* Campos para CRUD de membros */}
            <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">Adicionar Membro</button>
            {/* Listagem de membros aqui */}
          </div>
        )}
        {tab === 'Serviços' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            {/* Campos para CRUD de serviços */}
            <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">Adicionar Serviço</button>
            {/* Listagem de serviços aqui */}
          </div>
        )}
        {tab === 'QR Code' && (
          <div>
            <h3 className="text-xl font-bold mb-4">QR Code</h3>
            <label className="block mb-2 font-medium">Imagem do QR Code</label>
            <input type="file" className="mb-4" />
            <label className="block mb-2 font-medium">Valor sugerido</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Valor sugerido" />
          </div>
        )}
        {tab === 'Contato' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <label className="block mb-2 font-medium">E-mail</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="E-mail" />
            <label className="block mb-2 font-medium">WhatsApp</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="WhatsApp" />
            <label className="block mb-2 font-medium">Endereço</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Endereço" />
            <label className="block mb-2 font-medium">Horário de atendimento</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Horário" />
          </div>
        )}
        {tab === 'Footer' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Footer (Rodapé)</h3>
            <label className="block mb-2 font-medium">Nome/assinatura</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Nome/assinatura" />
            <label className="block mb-2 font-medium">Descrição</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Descrição" />
            <label className="block mb-2 font-medium">Ano</label>
            <input className="w-full px-4 py-2 border rounded mb-4" placeholder="Ano" />
          </div>
        )}
        {tab === 'Cores' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Cores do Site</h3>
            <label className="block mb-2 font-medium">Cor de fundo</label>
            <input type="color" className="mb-4" />
            <label className="block mb-2 font-medium">Cor dos botões</label>
            <input type="color" className="mb-4" />
            <label className="block mb-2 font-medium">Cor dos textos</label>
            <input type="color" className="mb-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage; 