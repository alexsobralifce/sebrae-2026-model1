import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { 
  Target,
  Users,
  DollarSign,
  Megaphone,
  Scale,
  Globe,
  HandshakeIcon,
  MonitorSmartphone,
  ShoppingCart,
  TrendingUp,
  FileSpreadsheet,
  Calculator,
  PieChart,
  Wallet,
  Receipt,
  Package,
  Stamp,
  Award,
  Building,
  MapPin,
  Ship,
  Plane,
  ClipboardCheck,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Consultorias = () => {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  const consultingCategories = [
    {
      id: "planejamento",
      title: "Planejamento Estratégico",
      icon: Target,
      fichas: [
        { name: "Planejamento Empresarial", icon: TrendingUp, pdf: "/fichas-tecnicas.pdf" },
        { name: "Análise SWOT", icon: Target, pdf: "/fichas-tecnicas.pdf" },
        { name: "Definição de Missão, Visão e Valores", icon: Award, pdf: "/fichas-tecnicas.pdf" },
        { name: "Mapeamento de Stakeholders", icon: Users, pdf: "/fichas-tecnicas.pdf" },
        { name: "Modelagem de Negócios de Impacto", icon: Building, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "pessoas",
      title: "Gestão de Pessoas",
      icon: Users,
      fichas: [
        { name: "Desenvolvimento de Lideranças", icon: Award, pdf: "/fichas-tecnicas.pdf" },
        { name: "Gestão de Clima Organizacional", icon: Users, pdf: "/fichas-tecnicas.pdf" },
        { name: "Avaliação de Desempenho", icon: ClipboardCheck, pdf: "/fichas-tecnicas.pdf" },
        { name: "Recrutamento e Seleção", icon: Users, pdf: "/fichas-tecnicas.pdf" },
        { name: "Política de Reconhecimento e Incentivo", icon: Award, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "marketing",
      title: "Marketing e Vendas",
      icon: Megaphone,
      fichas: [
        { name: "Monitoramento Mercadológico", icon: TrendingUp, pdf: "/fichas-tecnicas.pdf" },
        { name: "Pesquisa de Mercado", icon: ClipboardCheck, pdf: "/fichas-tecnicas.pdf" },
        { name: "Plano de Marketing", icon: Target, pdf: "/fichas-tecnicas.pdf" },
        { name: "Marketing Digital", icon: MonitorSmartphone, pdf: "/fichas-tecnicas.pdf" },
        { name: "Estratégias de Comunicação", icon: Megaphone, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "legislacao",
      title: "Legislação",
      icon: Scale,
      fichas: [
        { name: "Registro de Marca", icon: Stamp, pdf: "/fichas-tecnicas.pdf" },
        { name: "Patentes", icon: Award, pdf: "/fichas-tecnicas.pdf" },
        { name: "Desenho Industrial", icon: Building, pdf: "/fichas-tecnicas.pdf" },
        { name: "Indicação Geográfica", icon: MapPin, pdf: "/fichas-tecnicas.pdf" },
        { name: "Transferência de Titularidade de Marca", icon: Scale, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "financas",
      title: "Finanças",
      icon: DollarSign,
      fichas: [
        { name: "Gestão de Compras e Estoques", icon: ShoppingCart, pdf: "/fichas-tecnicas.pdf" },
        { name: "Indicadores de Desempenho Econômico", icon: TrendingUp, pdf: "/fichas-tecnicas.pdf" },
        { name: "Auditoria Financeira e Contábil", icon: FileSpreadsheet, pdf: "/fichas-tecnicas.pdf" },
        { name: "Planejamento Tributário", icon: Calculator, pdf: "/fichas-tecnicas.pdf" },
        { name: "Planejamento Financeiro", icon: PieChart, pdf: "/fichas-tecnicas.pdf" },
        { name: "Monitoramento Financeiro", icon: TrendingUp, pdf: "/fichas-tecnicas.pdf" },
        { name: "Gestão de Folha de Pagamento e Encargos", icon: Receipt, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "internacional",
      title: "Negócios Internacionais",
      icon: Globe,
      fichas: [
        { name: "Consultoria em Comércio Exterior - Importação", icon: Ship, pdf: "/fichas-tecnicas.pdf" },
        { name: "Consultoria em Comércio Exterior - Exportação", icon: Plane, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "associativismo",
      title: "Associativismo e Cooperação",
      icon: HandshakeIcon,
      fichas: [
        { name: "Associativismo e Cooperação", icon: HandshakeIcon, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
    {
      id: "tecnologia",
      title: "Tecnologia da Informação",
      icon: MonitorSmartphone,
      fichas: [
        { name: "Pesquisa de Satisfação", icon: ClipboardCheck, pdf: "/fichas-tecnicas.pdf" },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-glow to-secondary overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Fichas Técnicas
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Consultorias Especializadas Sebrae
              </p>
            </div>
          </div>
          
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="planejamento" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-transparent p-2 mb-16">
                {consultingCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-muted hover:bg-muted/80 flex items-center gap-2 px-6 py-3 rounded-full transition-all"
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      {category.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {consultingCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.fichas.map((ficha, index) => (
                      <Card 
                        key={index}
                        className="flex flex-col items-center p-8 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-card"
                      >
                        <div className="w-24 h-24 rounded-full bg-[hsl(219,76%,30%)] flex items-center justify-center mb-6">
                          <ficha.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-center font-bold text-lg text-[hsl(35,60%,50%)] mb-6 min-h-[3.5rem] flex items-center">
                          {ficha.name}
                        </h3>
                        
                        <a href={ficha.pdf} download className="w-full">
                          <Button 
                            className="w-full bg-[hsl(35,60%,50%)] hover:bg-[hsl(35,60%,45%)] text-white font-bold py-6 rounded-full uppercase tracking-wide"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            Baixar Ficha Técnica
                          </Button>
                        </a>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Consultorias;
