import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  BarChart3, 
  Megaphone,
  FileText,
  ArrowRight,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SearchDialog from "@/components/SearchDialog";

const Consultorias = () => {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  const consultingCategories = [
    {
      id: "planejamento",
      title: "Planejamento Estratégico",
      icon: TrendingUp,
      color: "primary",
      description: "Estruture o futuro da sua empresa com planejamento sólido",
      services: [
        { name: "Planejamento Empresarial", description: "Defina objetivos e estratégias de longo prazo" },
        { name: "Plano de Negócio", description: "Estruture seu modelo de negócio completo" },
        { name: "Gestão de Rotinas e Organização", description: "Otimize processos e rotinas operacionais" },
        { name: "Modelagem de Negócio", description: "Redesenhe seu modelo para maior eficiência" },
        { name: "Gestão de Riscos", description: "Identifique e mitigue riscos empresariais" },
        { name: "Gestão Ágil com OKRs", description: "Implemente metodologias ágeis de gestão" },
      ]
    },
    {
      id: "pessoas",
      title: "Gestão de Pessoas",
      icon: Users,
      color: "secondary",
      description: "Desenvolva e engaje seu time para alta performance",
      services: [
        { name: "Desenvolvimento de Lideranças", description: "Forme líderes preparados para o futuro" },
        { name: "Gestão de Equipes e Conflitos", description: "Melhore a dinâmica e resolução de conflitos" },
        { name: "Gestão de Desempenho", description: "Avalie e potencialize resultados individuais" },
        { name: "Atração e Seleção de Talentos", description: "Contrate as pessoas certas" },
        { name: "Integração de Novos Funcionários", description: "Onboarding eficiente e estruturado" },
        { name: "Estruturação de Treinamentos", description: "Desenvolva competências do time" },
      ]
    },
    {
      id: "financeiro",
      title: "Gestão Financeira",
      icon: DollarSign,
      color: "accent",
      description: "Controle e otimize a saúde financeira do negócio",
      services: [
        { name: "Gestão de Custos e Formação de Preços", description: "Precifique corretamente seus produtos" },
        { name: "Gestão do Fluxo de Caixa", description: "Controle entradas e saídas com eficiência" },
        { name: "Análise de Viabilidade Econômica", description: "Avalie a viabilidade de investimentos" },
        { name: "Planejamento Orçamentário", description: "Planeje recursos e investimentos" },
        { name: "Gestão da Inadimplência", description: "Reduza perdas com inadimplência" },
        { name: "Educação Financeira", description: "Desenvolva mentalidade financeira" },
      ]
    },
    {
      id: "vendas",
      title: "Vendas e Marketing",
      icon: Megaphone,
      color: "coral",
      description: "Aumente suas vendas e conquiste mais clientes",
      services: [
        { name: "Estratégia de Vendas", description: "Estruture processos comerciais eficientes" },
        { name: "Marketing Digital", description: "Potencialize presença online e conversões" },
        { name: "Gestão de Relacionamento com Cliente", description: "Fidelize e encante seus clientes" },
        { name: "Inteligência de Mercado", description: "Conheça profundamente seu mercado" },
        { name: "Branding e Posicionamento", description: "Construa uma marca forte e relevante" },
        { name: "E-commerce e Marketplace", description: "Venda online com estratégia" },
      ]
    },
    {
      id: "operacional",
      title: "Gestão Operacional",
      icon: BarChart3,
      color: "purple-deep",
      description: "Otimize processos e aumente a produtividade",
      services: [
        { name: "Mapeamento de Processos", description: "Visualize e otimize operações" },
        { name: "Gestão da Qualidade", description: "Implemente padrões de excelência" },
        { name: "Gestão de Estoque", description: "Controle e otimize inventário" },
        { name: "Logística e Distribuição", description: "Melhore cadeia de suprimentos" },
        { name: "Gestão de Compras", description: "Negocie melhor com fornecedores" },
        { name: "Indicadores de Performance", description: "Mensure e gerencie KPIs" },
      ]
    },
    {
      id: "inovacao",
      title: "Inovação e Tecnologia",
      icon: ShoppingCart,
      color: "green-dark",
      description: "Transforme seu negócio com inovação",
      services: [
        { name: "Transformação Digital", description: "Digitalize processos e operações" },
        { name: "Inovação em Produtos e Serviços", description: "Desenvolva soluções inovadoras" },
        { name: "Gestão da Inovação", description: "Crie cultura de inovação contínua" },
        { name: "Automação de Processos", description: "Aumente eficiência com tecnologia" },
        { name: "Inteligência Artificial", description: "Aplique IA no seu negócio" },
        { name: "Experiência do Cliente Digital", description: "Crie jornadas digitais memoráveis" },
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
          className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary-glow to-accent overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Voltar para página inicial
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Consultorias Especializadas Sebrae
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
                Transforme sua empresa com a expertise de consultores especializados. 
                Diagnóstico completo, planos de ação personalizados e resultados mensuráveis.
              </p>
              
              <SearchDialog 
                trigger={
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar Serviços
                  </Button>
                }
              />
            </div>
          </div>
          
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="planejamento" className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-muted/50 p-2 mb-12">
                {consultingCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex flex-col items-center gap-2 py-4"
                  >
                    <category.icon className="w-6 h-6" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {category.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {consultingCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {category.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, index) => (
                      <Card 
                        key={index}
                        className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Entre em contato e descubra como nossas consultorias podem impulsionar seus resultados
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/fichas-tecnicas.pdf" download>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                    <FileText className="w-5 h-5 mr-2" />
                    Baixar Fichas Técnicas
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8">
                  Agendar Atendimento
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Consultorias;
