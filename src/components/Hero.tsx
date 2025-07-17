import React from 'react';
import { ArrowRight, Download, Eye, MessageSquare } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
              <img 
                src="/hto1.png" 
                alt="Humberto Ribeiro de Freitas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Humberto Ribeiro de Freitas
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
            Analista de Sistemas
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Especialista em desenvolvimento de sistemas e soluções tecnológicas sob demanda. 
              Foco em criar aplicações robustas, lojas virtuais e sistemas personalizados com 
              excelência técnica e atendimento 100% home office.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Eye className="h-5 w-5" />
              <span>Ver Projetos</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              <span>Contratar Serviço</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Contato</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Anos de Experiência</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Home Office</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;