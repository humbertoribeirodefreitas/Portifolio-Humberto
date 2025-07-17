import React from 'react';
import { 
  Code, 
  ShoppingCart, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'custom-development',
      title: 'Desenvolvimento de Sistemas Sob Demanda',
      icon: <Code className="h-8 w-8" />,
      description: 'Criação de sistemas personalizados de acordo com suas necessidades específicas.',
      features: [
        'Análise detalhada de requisitos',
        'Desenvolvimento com tecnologias modernas',
        'Testes e validação completos',
        'Documentação técnica completa',
        'Suporte pós-entrega'
      ],
      technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      priceRange: 'A partir de R$ 5.000',
      deliveryTime: '4-12 semanas'
    },
    {
      id: 'ecommerce',
      title: 'Criação de Lojas Virtuais',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'Desenvolvimento de e-commerce completo com todas as funcionalidades necessárias.',
      features: [
        'Catálogo de produtos responsivo',
        'Carrinho de compras e checkout',
        'Integração com meios de pagamento',
        'Painel administrativo',
        'SEO otimizado'
      ],
      technologies: ['Next.js', 'Stripe', 'PayPal', 'AWS', 'Vercel'],
      priceRange: 'A partir de R$ 3.500',
      deliveryTime: '3-8 semanas'
    }
  ];

  const handleQuoteRequest = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço: "${serviceName}". Podemos conversar sobre os detalhes?`;
    const whatsappUrl = `https://wa.me/5561998301126?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Serviços Oferecidos</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de sistemas com atendimento personalizado
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Incluído:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Preço:</span>
                      <span className="font-semibold text-green-600 text-base">{service.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Prazo:</span>
                      <span className="font-semibold text-blue-600 text-base">{service.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleQuoteRequest(service.title)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-lg"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa de algo específico?</h3>
            <p className="text-lg mb-6 opacity-90">
              Vamos conversar sobre seu projeto personalizado!
            </p>
            <button
              onClick={() => handleQuoteRequest('Projeto Personalizado')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Conversar sobre Projeto Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;