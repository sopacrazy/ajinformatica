import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Battery, 
  Cpu, 
  Zap, 
  Settings, 
  Shield, 
  Clock, 
  Headphones, 
  MapPin, 
  Phone, 
  Instagram, 
  MessageCircle, 
  Briefcase,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Award
} from 'lucide-react';
import { PRODUCTS, SERVICES, DIFFERENTIALS, CATEGORIES } from './constants';

const LightThemeApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === "Todos" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <Printer className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-slate-900 font-display font-bold text-xl block leading-none tracking-tight">AJ INFORMÁTICA</span>
              <span className="text-[10px] font-medium text-blue-600 tracking-widest uppercase">Soluções em Impressão</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Sobre', 'Produtos', 'Serviços', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button className="px-6 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 active:scale-95">
              Solicitar Orçamento
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-white p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <Printer className="w-6 h-6 text-blue-600" />
                <span className="text-slate-900 font-display font-bold text-xl">AJ INFORMÁTICA</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-50 rounded-full">
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {['Home', 'Sobre', 'Produtos', 'Serviços', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-100">
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-xs font-bold mb-6">
              <Star className="w-3 h-3 fill-blue-700" />
              <span>LÍDER EM SOLUÇÕES DE IMPRESSÃO</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
              Tecnologia que <br />
              <span className="text-gradient-blue">Impulsiona</span> seu <br />
              Negócio.
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
              Venda de impressoras, manutenção técnica e suprimentos com o padrão de qualidade que sua empresa merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group">
                Ver Catálogo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contato" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
                Falar com Especialista
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900">15+ Anos</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">De Experiência</div>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div>
                <div className="text-2xl font-bold text-slate-900">5k+</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Clientes Atendidos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Office Tech"
                className="w-full h-auto"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 z-20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Suporte 24/7</div>
                  <div className="text-xs text-slate-500">Sempre disponível</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 z-20 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Qualidade Premium</div>
                  <div className="text-xs text-slate-500">Peças originais</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop" alt="Printer" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" alt="Tech" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" alt="Analysis" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">QUEM SOMOS</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Sua parceira estratégica em tecnologia de impressão.</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                A AJ Informática nasceu com o propósito de simplificar a tecnologia para empresas e residências. Somos especialistas em oferecer soluções completas que vão desde a venda de equipamentos de última geração até a manutenção técnica preventiva e corretiva.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {DIFFERENTIALS.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0">
                      {React.createElement(item.icon, { className: "w-5 h-5 text-blue-600" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">NOSSO CATÁLOGO</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-8">Produtos de Alta Performance</h2>
            
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="premium-card rounded-[32px] overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{product.name}</h3>
                    <p className="text-sm text-slate-500 mb-8 line-clamp-2 leading-relaxed">{product.description}</p>
                    <div className="mt-auto">
                      <button className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group">
                        Solicitar Orçamento <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-slate-900 text-white rounded-[60px] mx-6 my-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] -z-10" />
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4 block">SERVIÇOS ESPECIALIZADOS</span>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">Assistência técnica com garantia de excelência.</h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Não deixe sua produtividade parar. Oferecemos suporte rápido e eficiente para que seus equipamentos estejam sempre operando em sua máxima capacidade.
              </p>
              
              <div className="space-y-6">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {React.createElement(service.icon, { className: "w-7 h-7 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-400">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                  alt="Technical Support"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-10 rounded-[40px] shadow-2xl z-20">
                <div className="text-5xl font-bold mb-2">99%</div>
                <div className="text-sm font-medium text-blue-100 uppercase tracking-widest">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 bg-blue-600 text-white">
                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Vamos conversar?</h2>
                <p className="text-lg text-blue-100 mb-12">
                  Estamos prontos para oferecer a melhor solução para sua necessidade. Entre em contato agora mesmo.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 uppercase font-bold tracking-widest">Telefone / WhatsApp</div>
                      <div className="text-xl font-bold">(11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 uppercase font-bold tracking-widest">Endereço</div>
                      <div className="text-xl font-bold">Rua da Tecnologia, 123 - São Paulo, SP</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Instagram className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 uppercase font-bold tracking-widest">Siga-nos</div>
                      <div className="text-xl font-bold">@ajinformatica</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900">Nome Completo</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Seu nome..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900">E-mail</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900">Assunto</label>
                    <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all">
                      <option>Orçamento de Equipamento</option>
                      <option>Manutenção Técnica</option>
                      <option>Recarga de Suprimentos</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900">Mensagem</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Printer className="w-6 h-6 text-blue-600" />
                <span className="text-slate-900 font-display font-bold text-xl">AJ INFORMÁTICA</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Sua referência em tecnologia de impressão e assistência técnica especializada. Qualidade e confiança em cada serviço.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                {['Home', 'Sobre', 'Produtos', 'Serviços', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Categorias</h4>
              <ul className="space-y-4">
                {CATEGORIES.slice(1).map((item) => (
                  <li key={item}>
                    <a href="#produtos" className="text-slate-500 hover:text-blue-600 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
              <p className="text-slate-500 mb-6">Receba novidades e ofertas exclusivas.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Seu e-mail" className="bg-white border border-slate-200 px-4 py-2 rounded-xl outline-none focus:border-blue-600 w-full" />
                <button className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-slate-500">
              © 2024 AJ Informática. Todos os direitos reservados.
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600">Privacidade</a>
              <a href="#" className="hover:text-blue-600">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all z-[150] group"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl text-slate-900 text-xs font-bold shadow-xl border border-slate-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale com um Especialista
        </div>
      </a>
    </div>
  );
};

export default LightThemeApp;
