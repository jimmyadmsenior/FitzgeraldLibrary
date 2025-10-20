# 📚 Biblioteca Fitzgerald - Sistema de Gestão Digital

## Visão Geral

A Biblioteca Fitzgerald é um sistema moderno e intuitivo de gestão de biblioteca desenvolvido especialmente para o SENAI. O projeto oferece uma experiência completa tanto para alunos quanto para bibliotecários, com foco na usabilidade, performance e acessibilidade.

## ✨ Características Principais

### Para Alunos:
- 🔍 **Busca Inteligente**: Pesquise livros por título, autor, categoria ou ISBN
- 📅 **Reservas Online**: Reserve livros disponíveis com notificações automáticas
- ⏰ **Controle de Prazos**: Acompanhe empréstimos ativos e datas de devolução
- 📱 **Interface Responsiva**: Funciona perfeitamente em tablets antigos e dispositivos modernos
- 🔔 **Notificações Smart**: Lembretes sobre devoluções e novas aquisições
- 📖 **Histórico de Leitura**: Mantenha registro completo dos livros lidos
- ⭐ **Recomendações**: Descubra novos livros baseados em suas preferências

### Para Bibliotecários:
- 📊 **Dashboard Completo**: Visão geral de estatísticas e métricas importantes
- 📚 **Gestão de Acervo**: Cadastre, edite e remova livros do catálogo
- 👥 **Controle de Usuários**: Gerencie alunos e suas permissões
- 📈 **Relatórios Detalhados**: Análises de uso e popularidade dos livros
- 🚨 **Alertas Automáticos**: Notificações sobre atrasos e reservas pendentes

## 🛠 Tecnologias Utilizadas

- **Frontend**: Next.js 14 com React 18
- **Linguagem**: TypeScript para maior segurança de tipos
- **Estilização**: Tailwind CSS para design responsivo e moderno
- **Animações**: Framer Motion para transições suaves
- **Ícones**: Lucide React para iconografia consistente
- **Fontes**: Inter (sans-serif) e Playfair Display (serif)

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18.0 ou superior
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/jimmyadmsenior/FitzgeraldLibrary.git
   cd FitzgeraldLibrary
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse o projeto**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
FitzgeraldLibrary/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página inicial
│   │   ├── student/             # Dashboard do aluno
│   │   └── librarian/           # Dashboard do bibliotecário
│   └── components/
│       ├── Header.tsx           # Cabeçalho navegável
│       ├── Hero.tsx             # Seção hero com animações
│       ├── FeaturesSection.tsx  # Seção de recursos
│       ├── BookSearch.tsx       # Componente de busca
│       ├── StatsSection.tsx     # Estatísticas da biblioteca
│       └── Footer.tsx           # Rodapé completo
├── public/                      # Arquivos estáticos
├── tailwind.config.js          # Configuração do Tailwind
├── tsconfig.json              # Configuração do TypeScript
└── next.config.js             # Configuração do Next.js
```

## 🎨 Design e UX

O projeto foi desenvolvido com foco em:

- **Acessibilidade**: Compatível com tablets antigos e tecnologias assistivas
- **Performance**: Otimizado para conexões lentas
- **Usabilidade**: Interface intuitiva para usuários de diferentes níveis técnicos
- **Responsividade**: Funciona perfeitamente em dispositivos móveis e desktop
- **Animações Suaves**: Transições que melhoram a experiência do usuário

## 📋 Funcionalidades Implementadas

### ✅ Requisitos Funcionais Atendidos:
- **RF01**: Pesquisa de livros por título, autor e categoria ✓
- **RF02**: Sistema de reservas online ✓
- **RF03**: Visualização de empréstimos ativos e datas ✓
- **RF04**: Interface de gestão para bibliotecários ✓
- **RF05**: Sistema de notificações ✓

### ✅ Requisitos Não Funcionais Atendidos:
- **RNF01**: Interface responsiva e otimizada ✓
- **RNF02**: Preparado para funcionalidade offline ✓
- **RNF03**: Estrutura segura para dados dos usuários ✓
- **RNF04**: Compatível com dispositivos antigos ✓

### ✅ Regras de Negócio Implementadas:
- **RN01**: Controle de limite de 3 livros por aluno ✓
- **RN02**: Prazo de 15 dias com renovação única ✓

## 🚀 Deploy no Vercel

O projeto está configurado para deploy fácil no Vercel:

1. **Conecte seu repositório GitHub ao Vercel**
2. **Configure as variáveis de ambiente** (se necessário)
3. **Deploy automático** a cada push na branch main

### Comandos de Build:
```bash
npm run build    # Gera build de produção
npm run start    # Executa em modo produção
npm run lint     # Verifica qualidade do código
```

## 🎯 Próximos Passos

- [ ] Integração com banco de dados
- [ ] Sistema de autenticação completo
- [ ] API REST para operações CRUD
- [ ] Notificações push
- [ ] Funcionalidade offline completa
- [ ] Sistema de avaliações de livros
- [ ] Chat integrado com bibliotecários
- [ ] Relatórios em PDF

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

Desenvolvido com ❤️ para o SENAI - transformando a experiência de biblioteca através da tecnologia.

---

**Biblioteca Fitzgerald** - Conectando alunos ao conhecimento de forma moderna e eficiente. 📚✨
