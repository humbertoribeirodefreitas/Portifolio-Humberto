import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  X, 
  Building, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Star,
  Handshake,
  Award,
  Calendar,
  DollarSign,
  CheckCircle
} from 'lucide-react';

interface Partner {
  id: number;
  name: string;
  company: string;
  role: string;
  specialization: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  website?: string;
  location: string;
  experience: string;
  partnershipType: 'freelancer' | 'agency' | 'consultant' | 'developer';
  availability: 'full-time' | 'part-time' | 'project-based' | 'on-demand';
  skills: string[];
  portfolio: string[];
  hourlyRate?: string;
  projectRate?: string;
  languages: string[];
  certifications: string[];
  startDate: string;
  status: 'active' | 'pending' | 'inactive';
}

const PartnerRegistration = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [newPartner, setNewPartner] = useState<Partial<Partner>>({
    name: '',
    company: '',
    role: '',
    specialization: '',
    description: '',
    image: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    experience: '',
    partnershipType: 'freelancer',
    availability: 'project-based',
    skills: [],
    portfolio: [],
    hourlyRate: '',
    projectRate: '',
    languages: [],
    certifications: [],
    startDate: '',
    status: 'pending'
  });

  const partnershipTypes = [
    { value: 'freelancer', label: 'Freelancer', icon: '👤' },
    { value: 'agency', label: 'Agência', icon: '🏢' },
    { value: 'consultant', label: 'Consultor', icon: '💼' },
    { value: 'developer', label: 'Desenvolvedor', icon: '💻' }
  ];

  const availabilityOptions = [
    { value: 'full-time', label: 'Tempo Integral', icon: '⏰' },
    { value: 'part-time', label: 'Meio Período', icon: '🕐' },
    { value: 'project-based', label: 'Por Projeto', icon: '📋' },
    { value: 'on-demand', label: 'Sob Demanda', icon: '🔔' }
  ];

  const handleAddPartner = () => {
    if (newPartner.name && newPartner.email && newPartner.specialization) {
      const partner: Partner = {
        id: Date.now(),
        name: newPartner.name || '',
        company: newPartner.company || '',
        role: newPartner.role || '',
        specialization: newPartner.specialization || '',
        description: newPartner.description || '',
        image: newPartner.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
        email: newPartner.email || '',
        phone: newPartner.phone || '',
        website: newPartner.website,
        location: newPartner.location || '',
        experience: newPartner.experience || '',
        partnershipType: newPartner.partnershipType as 'freelancer' | 'agency' | 'consultant' | 'developer' || 'freelancer',
        availability: newPartner.availability as 'full-time' | 'part-time' | 'project-based' | 'on-demand' || 'project-based',
        skills: newPartner.skills || [],
        portfolio: newPartner.portfolio || [],
        hourlyRate: newPartner.hourlyRate,
        projectRate: newPartner.projectRate,
        languages: newPartner.languages || [],
        certifications: newPartner.certifications || [],
        startDate: newPartner.startDate || new Date().toISOString().split('T')[0],
        status: 'pending'
      };
      
      setPartners([...partners, partner]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewPartner({
      name: '',
      company: '',
      role: '',
      specialization: '',
      description: '',
      image: '',
      email: '',
      phone: '',
      website: '',
      location: '',
      experience: '',
      partnershipType: 'freelancer',
      availability: 'project-based',
      skills: [],
      portfolio: [],
      hourlyRate: '',
      projectRate: '',
      languages: [],
      certifications: [],
      startDate: '',
      status: 'pending'
    });
    setCurrentStep(1);
    setShowForm(false);
  };

  const handleArrayAdd = (field: keyof Partner, value: string) => {
    if (value.trim()) {
      const currentArray = (newPartner[field] as string[]) || [];
      if (!currentArray.includes(value.trim())) {
        setNewPartner({
          ...newPartner,
          [field]: [...currentArray, value.trim()]
        });
      }
    }
  };

  const handleArrayRemove = (field: keyof Partner, valueToRemove: string) => {
    const currentArray = (newPartner[field] as string[]) || [];
    setNewPartner({
      ...newPartner,
      [field]: currentArray.filter(item => item !== valueToRemove)
    });
  };

  const updatePartnerStatus = (id: number, status: 'active' | 'pending' | 'inactive') => {
    setPartners(partners.map(partner => 
      partner.id === id ? { ...partner, status } : partner
    ));
  };

  const removePartner = (id: number) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'inactive':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'pending':
        return 'Pendente';
      case 'inactive':
        return 'Inativo';
      default:
        return 'Indefinido';
    }
  };

  const handleContactPartner = (partner: Partner) => {
    const message = `Olá ${partner.name}! Vi seu perfil de parceiro e gostaria de discutir uma oportunidade de colaboração.`;
    const whatsappUrl = `https://wa.me/5561998301126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Informações Básicas
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            value={newPartner.name || ''}
            onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Nome do parceiro"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Empresa/Organização
          </label>
          <input
            type="text"
            value={newPartner.company || ''}
            onChange={(e) => setNewPartner({ ...newPartner, company: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Nome da empresa"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cargo/Função
          </label>
          <input
            type="text"
            value={newPartner.role || ''}
            onChange={(e) => setNewPartner({ ...newPartner, role: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: Desenvolvedor Senior"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Especialização *
          </label>
          <input
            type="text"
            value={newPartner.specialization || ''}
            onChange={(e) => setNewPartner({ ...newPartner, specialization: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: Desenvolvimento Frontend"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Descrição Profissional *
        </label>
        <textarea
          value={newPartner.description || ''}
          onChange={(e) => setNewPartner({ ...newPartner, description: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Descreva a experiência, especialidades e diferenciais do parceiro"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          URL da Foto Profissional
        </label>
        <input
          type="url"
          value={newPartner.image || ''}
          onChange={(e) => setNewPartner({ ...newPartner, image: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="https://exemplo.com/foto.jpg"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Contato e Localização
      </h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            value={newPartner.email || ''}
            onChange={(e) => setNewPartner({ ...newPartner, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="email@exemplo.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Telefone/WhatsApp
          </label>
          <input
            type="tel"
            value={newPartner.phone || ''}
            onChange={(e) => setNewPartner({ ...newPartner, phone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="+55 61 99999-9999"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Website/Portfolio
          </label>
          <input
            type="url"
            value={newPartner.website || ''}
            onChange={(e) => setNewPartner({ ...newPartner, website: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="https://meusite.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Localização
          </label>
          <input
            type="text"
            value={newPartner.location || ''}
            onChange={(e) => setNewPartner({ ...newPartner, location: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Cidade, Estado, País"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tipo de Parceria
          </label>
          <select
            value={newPartner.partnershipType || 'freelancer'}
            onChange={(e) => setNewPartner({ ...newPartner, partnershipType: e.target.value as any })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {partnershipTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.icon} {type.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Disponibilidade
          </label>
          <select
            value={newPartner.availability || 'project-based'}
            onChange={(e) => setNewPartner({ ...newPartner, availability: e.target.value as any })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {availabilityOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.icon} {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Experiência
          </label>
          <input
            type="text"
            value={newPartner.experience || ''}
            onChange={(e) => setNewPartner({ ...newPartner, experience: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: 5+ anos"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Valor/Hora (R$)
          </label>
          <input
            type="text"
            value={newPartner.hourlyRate || ''}
            onChange={(e) => setNewPartner({ ...newPartner, hourlyRate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="150"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Valor/Projeto (R$)
          </label>
          <input
            type="text"
            value={newPartner.projectRate || ''}
            onChange={(e) => setNewPartner({ ...newPartner, projectRate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="5000"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Habilidades e Qualificações
      </h4>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Habilidades Técnicas
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(newPartner.skills || []).map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              <span>{skill}</span>
              <button
                onClick={() => handleArrayRemove('skills', skill)}
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
              handleArrayAdd('skills', e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Digite uma habilidade e pressione Enter"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Idiomas
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(newPartner.languages || []).map((language, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
            >
              <span>{language}</span>
              <button
                onClick={() => handleArrayRemove('languages', language)}
                className="hover:bg-green-200 rounded-full p-0.5"
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
              handleArrayAdd('languages', e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Ex: Português, Inglês, Espanhol"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Certificações
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(newPartner.certifications || []).map((cert, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
            >
              <span>{cert}</span>
              <button
                onClick={() => handleArrayRemove('certifications', cert)}
                className="hover:bg-purple-200 rounded-full p-0.5"
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
              handleArrayAdd('certifications', e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="Ex: AWS Certified, Google Analytics, Scrum Master"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Links do Portfolio
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {(newPartner.portfolio || []).map((link, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
            >
              <span className="truncate max-w-32">{link}</span>
              <button
                onClick={() => handleArrayRemove('portfolio', link)}
                className="hover:bg-orange-200 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
        <input
          type="url"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleArrayAdd('portfolio', e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          placeholder="https://projeto.com - Pressione Enter para adicionar"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Data de Início da Parceria
        </label>
        <input
          type="date"
          value={newPartner.startDate || ''}
          onChange={(e) => setNewPartner({ ...newPartner, startDate: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
    </div>
  );

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Handshake className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Cadastro de Parceiros</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Gerencie sua rede de parceiros profissionais e colaboradores
          </p>
          
          <div className="mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Cadastrar Novo Parceiro</span>
            </button>
          </div>
        </div>

        {/* Registration Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Cadastrar Novo Parceiro
                </h3>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 h-1 mx-2 ${
                          currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Step Content */}
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors"
                >
                  Anterior
                </button>
                
                <div className="flex space-x-4">
                  {currentStep < 3 ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Próximo
                    </button>
                  ) : (
                    <button
                      onClick={handleAddPartner}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Cadastrar Parceiro
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(partner.status)}`}>
                    {getStatusText(partner.status)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                    {partnershipTypes.find(t => t.value === partner.partnershipType)?.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                    {partner.company && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{partner.company}</p>
                    )}
                    <p className="text-blue-600 font-medium text-sm">{partner.specialization}</p>
                  </div>
                  {partner.experience && (
                    <div className="flex items-center space-x-1 text-orange-600">
                      <Award className="h-4 w-4" />
                      <span className="text-xs font-medium">{partner.experience}</span>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {partner.description}
                </p>
                
                {partner.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {partner.skills.slice(0, 3).map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {partner.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{partner.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{partner.location}</span>
                  </div>
                  {(partner.hourlyRate || partner.projectRate) && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {partner.hourlyRate ? `R$${partner.hourlyRate}/h` : `R$${partner.projectRate}/proj`}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <select
                      value={partner.status}
                      onChange={(e) => updatePartnerStatus(partner.id, e.target.value as any)}
                      className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="pending">Pendente</option>
                      <option value="active">Ativo</option>
                      <option value="inactive">Inativo</option>
                    </select>
                    
                    <button
                      onClick={() => removePartner(partner.id)}
                      className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                      title="Remover parceiro"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleContactPartner(partner)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                  >
                    Contatar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {partners.length === 0 && (
          <div className="text-center py-12">
            <Handshake className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2">
              Nenhum parceiro cadastrado ainda
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Clique em "Cadastrar Novo Parceiro" para começar a construir sua rede
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerRegistration;