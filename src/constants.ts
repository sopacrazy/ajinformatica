import { Printer, Battery, Cpu, Zap, Settings, Shield, Clock, Headphones, MapPin, Phone, Instagram, MessageCircle, Briefcase } from 'lucide-react';

export const CATEGORIES = [
  "Todos",
  "Impressoras",
  "Toners",
  "Cartuchos",
  "SSD e Memórias",
  "Fontes e Acessórios"
];

export const PRODUCTS = [
  {
    id: 1,
    name: "HP LaserJet Enterprise M507dn",
    category: "Impressoras",
    description: "Desempenho excepcional e segurança robusta para o ambiente corporativo moderno.",
    image: "https://picsum.photos/seed/hp-printer/800/600"
  },
  {
    id: 2,
    name: "Toner Premium Gold Series 85A",
    category: "Toners",
    description: "Insumos de alta densidade para impressões nítidas e durabilidade superior.",
    image: "https://picsum.photos/seed/premium-toner/800/600"
  },
  {
    id: 3,
    name: "Samsung 990 PRO NVMe M.2 2TB",
    category: "SSD e Memórias",
    description: "A última palavra em velocidade de armazenamento para profissionais exigentes.",
    image: "https://picsum.photos/seed/samsung-ssd/800/600"
  },
  {
    id: 4,
    name: "Corsair RM850x 80 Plus Gold",
    category: "Fontes e Acessórios",
    description: "Eficiência energética e estabilidade absoluta para sistemas de alta performance.",
    image: "https://picsum.photos/seed/corsair-psu/800/600"
  },
  {
    id: 5,
    name: "Cartucho Original Epson T504",
    category: "Cartuchos",
    description: "Cores vibrantes e fidelidade absoluta em cada gota de tinta.",
    image: "https://picsum.photos/seed/epson-ink/800/600"
  },
  {
    id: 6,
    name: "Kingston FURY Renegade 32GB",
    category: "SSD e Memórias",
    description: "Memória de ultra-velocidade para processamento de dados massivos sem latência.",
    image: "https://picsum.photos/seed/fury-ram/800/600"
  },
  {
    id: 7,
    name: "Epson EcoTank Pro L15150",
    category: "Impressoras",
    description: "Produtividade em grande formato com o menor custo de impressão do mercado.",
    image: "https://picsum.photos/seed/epson-pro/800/600"
  },
  {
    id: 8,
    name: "Logitech MX Master 3S",
    category: "Fontes e Acessórios",
    description: "Ergonomia e precisão cirúrgica para o fluxo de trabalho profissional.",
    image: "https://picsum.photos/seed/mx-master/800/600"
  }
];

export const SERVICES = [
  {
    title: "Manutenção de Impressoras",
    description: "Reparo especializado com peças originais e diagnóstico avançado.",
    icon: Printer
  },
  {
    title: "Recarga Profissional de Toner",
    description: "Processo industrial que garante rendimento igual ao original.",
    icon: Battery
  },
  {
    title: "Assistência Técnica Especializada",
    description: "Suporte completo para hardware e sistemas de informática críticos.",
    icon: Settings
  },
  {
    title: "Instalação e Configuração",
    description: "Implementação de infraestrutura de impressão e redes corporativas.",
    icon: Zap
  },
  {
    title: "Suporte Empresarial",
    description: "Contratos de manutenção para garantir que sua empresa nunca pare.",
    icon: Briefcase
  }
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento Rápido",
    description: "Priorizamos a agilidade para minimizar o tempo de inatividade.",
    icon: Clock
  },
  {
    title: "Técnicos Especializados",
    description: "Equipe certificada pelas maiores fabricantes do mundo.",
    icon: Headphones
  },
  {
    title: "Peças Originais",
    description: "Utilizamos apenas componentes de procedência garantida.",
    icon: Shield
  },
  {
    title: "Garantia nos Serviços",
    description: "Segurança total em cada reparo ou instalação realizada.",
    icon: Shield
  },
  {
    title: "Suporte Confiável",
    description: "Parceria de longo prazo baseada em transparência e ética.",
    icon: Cpu
  }
];
