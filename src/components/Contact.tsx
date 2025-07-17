import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Send, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contato de ${formData.name} - Portfolio`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    
    const mailtoUrl = `mailto:sansunghumberto13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = `Olá! Vim através do seu portfólio e gostaria de conversar sobre um projeto.`;
    const whatsappUrl = `https://wa.me/5561998301126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos discutir seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-300">sansunghumberto13@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-300">+55 61 99830-1126</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-gray-300">Distrito Federal, Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-gray-300">Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contato Direto</h4>
              
              <button
                onClick={handleWhatsAppContact}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp</span>
              </button>
              
              <a
                href="mailto:sansunghumberto13@gmail.com"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>E-mail</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/humberto-ribeiro-de-freitas-b15208340"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">Tempo de Resposta</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">WhatsApp:</span>
                  <span className="text-green-400 font-medium">Até 2 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">E-mail:</span>
                  <span className="text-blue-400 font-medium">Até 24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">LinkedIn:</span>
                  <span className="text-purple-400 font-medium">Até 48 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;