import React, { useState } from 'react';
import { ExternalLink, Github, Star, Eye, MessageSquare, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Comercial",
      description: "Aplicação completa para gestão de vendas, estoque e clientes com dashboard interativo e relatórios avançados.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "Sistema Web",
      status: "Produção"
    },
    {
      id: 2,
      title: "E-commerce Responsivo",
      description: "Loja virtual completa com carrinho de compras, pagamento integrado e painel administrativo.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "E-commerce",
      status: "Demonstração"
    },
    {
      id: 3,
      title: "App Mobile Híbrido",
      description: "Aplicativo mobile para gestão de tarefas com sincronização em tempo real e notificações push.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "Mobile",
      status: "Demonstração"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Painel de controle com visualização de dados, gráficos interativos e relatórios customizáveis.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "MySQL", "Laravel"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "Dashboard",
      status: "Produção"
    },
    {
      id: 5,
      title: "API REST Completa",
      description: "API robusta com autenticação JWT, documentação Swagger e testes automatizados.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "JWT", "Docker"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "API",
      status: "Produção"
    },
    {
      id: 6,
      title: "Sistema de Reservas",
      description: "Plataforma de agendamento online com calendário interativo e integração com Google Calendar.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "GraphQL", "PostgreSQL", "Socket.io"],
      github: "https://github.com/humbertoribeirodefreitas",
      live: "https://vercel.com/sansunghumberto13gmailcoms-projects",
      category: "Sistema Web",
      status: "Demonstração"
    }
  ];

  const handleNegotiate = (projectTitle: string) => {
    const message = `Olá! Tenho interesse em discutir o projeto "${projectTitle}". Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5561998301126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile':
        return <Smartphone className="h-5 w-5" />;
      case 'E-commerce':
        return <Globe className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projetos em Destaque</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos desenvolvidos com as mais modernas tecnologias
          </p>
          
          {/* Exclusivity Notice */}
          <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-amber-800 dark:text-amber-300">
              <Star className="h-5 w-5" />
              <span className="font-semibold">Projetos Exclusivos</span>
            </div>
            <p className="text-amber-700 dark:text-amber-400 mt-2 text-sm">
              Alguns projetos são demonstrativos exclusivos. O acesso completo pode ser liberado mediante solicitação.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Produção' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  {getCategoryIcon(project.category)}
                  <span className="text-white text-sm font-medium">{project.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Visualizar</span>
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
                    >
                      <Github className="h-4 w-4" />
                      <span>Código</span>
                    </a>
                  </div>
                  
                  <button
                    onClick={() => handleNegotiate(project.title)}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Marcar para Negociação</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/humbertoribeirodefreitas?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>Ver Todos os Repositórios</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;