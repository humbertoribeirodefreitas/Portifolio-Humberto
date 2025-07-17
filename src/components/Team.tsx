import React, { useState } from 'react';
import { Users, Plus, X, Camera, Mail, Linkedin, Github, Star, Award, Handshake } from 'lucide-react';
import PartnerRegistration from './PartnerRegistration';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
  experience: string;
  status: 'active' | 'available' | 'busy';
}

const Team = () => {
  const [showPartnerRegistration, setShowPartnerRegistration] = useState(false);

  if (showPartnerRegistration) {
    return (
      <div>
        <div className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setShowPartnerRegistration(false)}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <span>← Voltar para Equipe</span>
            </button>
          </div>
        </div>
        <PartnerRegistration />
      </div>
    );
  }

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: "Humberto Ribeiro de Freitas",
      role: "Analista de Sistemas Sênior",
      description: "Especialista em desenvolvimento full-stack com foco em soluções sob demanda e arquitetura de sistemas.",
      image: "/hto1.png",
      email: "sansunghumberto13@gmail.com",
      linkedin: "https://www.linkedin.com/in/humberto-ribeiro-de-freitas-b15208340",
      github: "https://github.com/humbertoribeirodefreitas",
      skills: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
      experience: "5+ anos",
      status: "active"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState<Partial<TeamMember>>({
    name: '',
    role: '',
    description: '',
    image: '',
    email: '',
    linkedin: '',
    github: '',
    skills: [],
    experience: '',
    status: 'available'
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.description) {
      const member: TeamMember = {
        id: Date.now(),
        name: newMember.name || '',
        role: newMember.role || '',
        description: newMember.description || '',
        image: newMember.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
        email: newMember.email,
        linkedin: newMember.linkedin,
        github: newMember.github,
        skills: newMember.skills || [],
        experience: newMember.experience || '',
        status: (newMember.status as 'active' | 'available' | 'busy') || 'available'
      };
      
      setTeamMembers([...teamMembers, member]);

      // Enviar dados para Google Sheets via Apps Script
      fetch('SUA_URL_DO_SCRIPT', {
        method: 'POST',
        body: JSON.stringify({
          nome: member.name,
          cargo: member.role,
          email: member.email,
          linkedin: member.linkedin,
          github: member.github,
          skills: member.skills.join(', '),
          experiencia: member.experience,
          status: member.status
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setNewMember({
        name: '',
        role: '',
        description: '',
        image: '',
        email: '',
        linkedin: '',
        github: '',
        skills: [],
        experience: '',
        status: 'available'
      });
      setShowAddForm(false);
    }
  };

  const handleRemoveMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const handleSkillAdd = (skill: string) => {
    if (skill.trim() && newMember.skills && !newMember.skills.includes(skill.trim())) {
      setNewMember({
        ...newMember,
        skills: [...(newMember.skills || []), skill.trim()]
      });
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    setNewMember({
      ...newMember,
      skills: (newMember.skills || []).filter(skill => skill !== skillToRemove)
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'available':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'busy':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'available':
        return 'Disponível';
      case 'busy':
        return 'Ocupado';
      default:
        return 'Indefinido';
    }
  };

  const handleContactMember = (member: TeamMember) => {
    const message = `Olá ${member.name}! Vi seu perfil na equipe e gostaria de conversar sobre uma oportunidade de colaboração.`;
    const whatsappUrl = `https://wa.me/5561998301126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Nossa Equipe</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça os profissionais especializados que fazem parte da nossa rede de colaboradores
          </p>
          
          {/* Add Member Button */}
          <div className="mt-8">
            <div className="flex space-x-4">
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Adicionar Membro</span>
              </button>
              
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Handshake className="h-5 w-5" />
                <span>Cadastrar Parceiro</span>
              </button>
            </div>
          </div>
        </div>

        {/* Add Member Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Adicionar Novo Membro</h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={newMember.name || ''}
                      onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Nome do profissional"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cargo/Função *
                    </label>
                    <input
                      type="text"
                      value={newMember.role || ''}
                      onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Ex: Desenvolvedor Frontend"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Descrição *
                  </label>
                  <textarea
                    value={newMember.description || ''}
                    onChange={(e) => setNewMember({ ...newMember, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Breve descrição sobre o profissional e suas especialidades"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      URL da Foto
                    </label>
                    <input
                      type="url"
                      value={newMember.image || ''}
                      onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="https://exemplo.com/foto.jpg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Experiência
                    </label>
                    <input
                      type="text"
                      value={newMember.experience || ''}
                      onChange={(e) => setNewMember({ ...newMember, experience: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Ex: 3+ anos"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={newMember.email || ''}
                      onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      value={newMember.linkedin || ''}
                      onChange={(e) => setNewMember({ ...newMember, linkedin: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      GitHub
                    </label>
                    <input
                      type="url"
                      value={newMember.github || ''}
                      onChange={(e) => setNewMember({ ...newMember, github: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Habilidades
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {(newMember.skills || []).map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        <span>{skill}</span>
                        <button
                          onClick={() => handleSkillRemove(skill)}
                          className="hover:bg-blue-200 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSkillAdd(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Digite uma habilidade e pressione Enter"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={newMember.status || 'available'}
                    onChange={(e) => setNewMember({ ...newMember, status: e.target.value as 'active' | 'available' | 'busy' })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="available">Disponível</option>
                    <option value="active">Ativo</option>
                    <option value="busy">Ocupado</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleAddMember}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Adicionar Membro
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-40 h-40 object-contain rounded-full mx-auto mt-6 bg-white shadow-md border-4 border-gray-200 dark:border-gray-700"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(member.status)}`}>
                    {getStatusText(member.status)}
                  </span>
                </div>
                {member.id !== 1 && (
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="absolute top-4 left-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                  </div>
                  {member.experience && (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">{member.experience}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{member.description}</p>
                
                {member.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 4).map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{member.skills.length - 4} mais
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        title="E-mail"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleContactMember(member)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Contatar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {teamMembers.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Nenhum membro adicionado ainda
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Clique em "Adicionar Membro" para começar a construir sua equipe
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;