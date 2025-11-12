import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, TrendingUp, Users, DollarSign, Megaphone, BarChart3, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

const searchSchema = z.object({
  query: z.string()
    .trim()
    .max(100, { message: "Busca deve ter no máximo 100 caracteres" })
});

interface SearchResult {
  category: string;
  categoryIcon: any;
  service: string;
  description: string;
  path: string;
}

const allServices: SearchResult[] = [
  // Planejamento Estratégico
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Planejamento Empresarial", description: "Defina objetivos e estratégias de longo prazo", path: "/consultorias#planejamento" },
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Plano de Negócio", description: "Estruture seu modelo de negócio completo", path: "/consultorias#planejamento" },
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Gestão de Rotinas", description: "Otimize processos e rotinas operacionais", path: "/consultorias#planejamento" },
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Modelagem de Negócio", description: "Redesenhe seu modelo para maior eficiência", path: "/consultorias#planejamento" },
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Gestão de Riscos", description: "Identifique e mitigue riscos empresariais", path: "/consultorias#planejamento" },
  { category: "Planejamento Estratégico", categoryIcon: TrendingUp, service: "Gestão Ágil com OKRs", description: "Implemente metodologias ágeis de gestão", path: "/consultorias#planejamento" },
  
  // Gestão de Pessoas
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Desenvolvimento de Lideranças", description: "Forme líderes preparados para o futuro", path: "/consultorias#pessoas" },
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Gestão de Equipes", description: "Melhore a dinâmica e resolução de conflitos", path: "/consultorias#pessoas" },
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Gestão de Desempenho", description: "Avalie e potencialize resultados individuais", path: "/consultorias#pessoas" },
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Atração de Talentos", description: "Contrate as pessoas certas", path: "/consultorias#pessoas" },
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Integração de Funcionários", description: "Onboarding eficiente e estruturado", path: "/consultorias#pessoas" },
  { category: "Gestão de Pessoas", categoryIcon: Users, service: "Treinamento e Desenvolvimento", description: "Desenvolva competências do time", path: "/consultorias#pessoas" },
  
  // Gestão Financeira
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Gestão de Custos", description: "Precifique corretamente seus produtos", path: "/consultorias#financeiro" },
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Fluxo de Caixa", description: "Controle entradas e saídas com eficiência", path: "/consultorias#financeiro" },
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Viabilidade Econômica", description: "Avalie a viabilidade de investimentos", path: "/consultorias#financeiro" },
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Planejamento Orçamentário", description: "Planeje recursos e investimentos", path: "/consultorias#financeiro" },
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Gestão de Inadimplência", description: "Reduza perdas com inadimplência", path: "/consultorias#financeiro" },
  { category: "Gestão Financeira", categoryIcon: DollarSign, service: "Educação Financeira", description: "Desenvolva mentalidade financeira", path: "/consultorias#financeiro" },
  
  // Vendas e Marketing
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "Estratégia de Vendas", description: "Estruture processos comerciais eficientes", path: "/consultorias#vendas" },
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "Marketing Digital", description: "Potencialize presença online e conversões", path: "/consultorias#vendas" },
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "CRM", description: "Fidelize e encante seus clientes", path: "/consultorias#vendas" },
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "Inteligência de Mercado", description: "Conheça profundamente seu mercado", path: "/consultorias#vendas" },
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "Branding", description: "Construa uma marca forte e relevante", path: "/consultorias#vendas" },
  { category: "Vendas e Marketing", categoryIcon: Megaphone, service: "E-commerce", description: "Venda online com estratégia", path: "/consultorias#vendas" },
  
  // Gestão Operacional
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "Mapeamento de Processos", description: "Visualize e otimize operações", path: "/consultorias#operacional" },
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "Gestão da Qualidade", description: "Implemente padrões de excelência", path: "/consultorias#operacional" },
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "Gestão de Estoque", description: "Controle e otimize inventário", path: "/consultorias#operacional" },
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "Logística", description: "Melhore cadeia de suprimentos", path: "/consultorias#operacional" },
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "Gestão de Compras", description: "Negocie melhor com fornecedores", path: "/consultorias#operacional" },
  { category: "Gestão Operacional", categoryIcon: BarChart3, service: "KPIs", description: "Mensure e gerencie indicadores", path: "/consultorias#operacional" },
  
  // Inovação e Tecnologia
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "Transformação Digital", description: "Digitalize processos e operações", path: "/consultorias#inovacao" },
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "Inovação em Produtos", description: "Desenvolva soluções inovadoras", path: "/consultorias#inovacao" },
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "Gestão da Inovação", description: "Crie cultura de inovação contínua", path: "/consultorias#inovacao" },
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "Automação", description: "Aumente eficiência com tecnologia", path: "/consultorias#inovacao" },
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "Inteligência Artificial", description: "Aplique IA no seu negócio", path: "/consultorias#inovacao" },
  { category: "Inovação e Tecnologia", categoryIcon: ShoppingCart, service: "UX Digital", description: "Crie jornadas digitais memoráveis", path: "/consultorias#inovacao" },
];

interface SearchDialogProps {
  trigger?: React.ReactNode;
}

const SearchDialog = ({ trigger }: SearchDialogProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setError("");
      return;
    }

    // Validação de input
    const validation = searchSchema.safeParse({ query });
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      setResults([]);
      return;
    }

    setError("");

    // Busca fuzzy - case insensitive e normalizada
    const normalizedQuery = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove acentos

    const filtered = allServices.filter((item) => {
      const normalizedService = item.service
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const normalizedDescription = item.description
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const normalizedCategory = item.category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return (
        normalizedService.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery) ||
        normalizedCategory.includes(normalizedQuery)
      );
    });

    setResults(filtered);
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setError("");
  };

  const handleResultClick = () => {
    setOpen(false);
    handleClear();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold">Buscar Serviços e Consultorias</DialogTitle>
        </DialogHeader>

        <div className="px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Digite o que você procura..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
              autoFocus
            />
            {query && (
              <button
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          {error && (
            <p className="text-sm text-destructive mt-2">{error}</p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {!query.trim() ? (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Comece a digitar para buscar</p>
              <p className="text-sm">Encontre consultorias, serviços e soluções</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">Nenhum resultado encontrado</p>
              <p className="text-sm">Tente buscar com outros termos</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                {results.length} {results.length === 1 ? "resultado encontrado" : "resultados encontrados"}
              </p>
              {results.map((result, index) => {
                const Icon = result.categoryIcon;
                return (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={handleResultClick}
                    className="block p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                          {result.service}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {result.description}
                        </p>
                        <span className="text-xs font-medium text-primary">
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
