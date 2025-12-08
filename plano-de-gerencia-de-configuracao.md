# PLANO DE GERENCIAMENTO DE CONFIGURAÇÃO

**Projeto:** Sistema de Gerenciamento de Pedidos  
**Empresa:** Tech Solutions Ltda.  
**Versão:** 1.0  
**Data:** Dezembro/2025  
**Identificador do Documento:** PGC-SGP-001

---

## Histórico da Revisão

| Data | Versão | Descrição | Autor |
|------|--------|-----------|-------|
| 05/12/2025 | 1.0 | Versão inicial do Plano de Gerenciamento de Configuração | [Gabriel Ferreira Amaral] |

---

## Índice

1. [Introdução](#1-introdução)
   1. [Objetivo](#11-objetivo)
   2. [Escopo](#12-escopo)
   3. [Definições,-Acrônimos-e-Abreviações](#13-definições-acrônimos-e-abreviações)
   4. [Referências](#14-referências)
   5. [Visão Geral](#15-visão-geral)
2. [Gerenciamento de Configuração de Software](#2-gerenciamento-de-configuração-de-software)
   1. [Organização,-Responsabilidades-e-Interfaces](#21-organização-responsabilidades-e-interfaces)
   2. [Ferramentas,-Ambiente-e-Infra-estrutura](#22-ferramentas-ambiente-e-infra-estrutura)
3. [O Programa de Gerenciamento de Configuração](#3-o-programa-de-gerenciamento-de-configuração)
   1. [Identificação da Configuração](#31-identificação-da-configuração)
      1. [Métodos de Identificação](#311-métodos-de-identificação)
      2. [Linhas de Base do Projeto](#312-linhas-de-base-do-projeto)
   2. [Configuração e Controle de Alterações](#32-configuração-e-controle-de-alterações)
      1. [Processamento e Aprovação de Controles de Mudanças](#321-processamento-e-aprovação-de-controles-de-mudanças)  
      2. [CCB (Conselho de Controle de Mudanças)](#322-ccb-conselho-de-controle-de-mudanças)
   3. [Contabilidade do Status de Configuração](#33-contabilidade-do-status-de-configuração)
      1. [Armazenamento de Mídia do Projeto e Processo de Release](#331-armazenamento-de-mídia-do-projeto-e-processo-de-release)  
      2. [Relatórios e Auditorias](#332-relatórios-e-auditorias)
4. [Marcos](#4-marcos)
5. [Treinamento e Recursos](#5-treinamento-e-recursos)
   1. [Treinamento Requerido](#51-treinamento-requerido)
   2. [Recursos de Software](#52-recursos-de-software)
   3. [Recursos Humanos](#53-recursos-humanos)
6. [Controle de Software do Subfornecedor e do Fornecedor](#6-controle-de-software-do-subfornecedor-e-do-fornecedor)
   1. [Dependências de Terceiros](#61-dependências-de-terceiros)
   2. [Processo de Incorporação](#62-processo-de-incorporação)
   3. [Controle de Versão](#63-controle-de-versão)
   4. [Serviços Externos (SaaS/PaaS)](#64-serviços-externos-saaspaas)
   5. [Licenciamento](#65-licenciamento)
   6. [Descontinuação](#66-descontinuação)

---

# 1. INTRODUÇÃO

## 1.1 Objetivo

Este Plano de Gerenciamento de Configuração estabelece os métodos, processos, ferramentas e responsabilidades necessários para gerenciar os itens de configuração do Sistema de Gerenciamento de Pedidos ao longo de todo o seu ciclo de vida, garantindo integridade, rastreabilidade e qualidade através de práticas de CI/CD.

## 1.2 Escopo

Este plano aplica-se a:
- Código fonte da aplicação (controllers, models, services, routes, middleware, utils)
- Scripts de automação e pipeline CI/CD
- Testes automatizados (unitários, integração e aceitação)
- Documentação técnica
- Configurações de ambiente e dependências
- Schemas de banco de dados

Abrange desde o desenvolvimento local até a implantação em produção em contêineres Docker.

## 1.3 Definições, Acrônimos e Abreviações

| Termo | Descrição |
|-------|-----------|
| API | Application Programming Interface |
| CCB | Change Control Board - Conselho de Controle de Mudanças |
| CD | Continuous Delivery/Deployment - Entrega/Implantação Contínua |
| CI | Continuous Integration - Integração Contínua |
| CM | Configuration Management - Gerenciamento de Configuração |
| COTS | Commercial-Off-The-Shelf |
| IC | Item de Configuração |
| PR | Pull Request |
| VCS | Version Control System |

## 1.4 Referências

1. **Git Documentation** - https://git-scm.com/doc
2. **GitHub Actions Documentation** - https://docs.github.com/actions
3. **Docker Documentation** - https://docs.docker.com/
4. **Semantic Versioning 2.0.0** - https://semver.org/
5. **Jest Documentation** - https://jestjs.io/docs/getting-started

## 1.5 Visão Geral

Este documento está organizado em 6 seções principais:
- **Seção 2** descreve organização, responsabilidades e ferramentas
- **Seção 3** detalha identificação, controle de mudanças e relatórios
- **Seção 4** apresenta marcos do projeto
- **Seção 5** descreve treinamentos e recursos necessários
- **Seção 6** define controle de software de terceiros

---

# 2. GERENCIAMENTO DE CONFIGURAÇÃO DE SOFTWARE

## 2.1 Organização, Responsabilidades e Interfaces

### Papéis e Responsabilidades

**Gerente de Configuração:**
- Administrar repositório Git e aprovar PRs críticos
- Gerenciar releases e tags de versão
- Conduzir reuniões do CCB
- Manter o PGC atualizado

**Desenvolvedor:**
- Criar branches seguindo padrões
- Implementar funcionalidades e testes
- Realizar commits padronizados
- Participar de code reviews

**DevOps Engineer:**
- Configurar e manter pipeline CI/CD
- Gerenciar ambientes e infraestrutura
- Monitorar builds e deploys

**Testador/QA:**
- Desenvolver testes de integração e E2E
- Reportar bugs via GitHub Issues
- Validar correções

## 2.2 Ferramentas, Ambiente e Infra-estrutura

### Ferramentas de Software

**Controle de Versão:** Git + GitHub  
**CI/CD:** GitHub Actions  
**Deploy:** Docker (imagens/container) — build de imagem, push para registro e execução em host/container runtime
**Gerenciamento de Dependências:** npm  
**Testes:** Jest + Supertest + MongoDB Memory Server  
**Linting:** ESLint  
**Outras:** Nodemon, Morgan, Helmet, Bcrypt, JWT

### Ambientes

#### Desenvolvimento (Local)
- Node.js 18.x, MongoDB 6.x
- Variáveis em `.env` local
- Editor: VS Code

#### Integração Contínua (CI)
- GitHub Actions Runners (Ubuntu Latest)
- Node.js 18.x, MongoDB Memory Server
- Ambientes efêmeros

#### Produção (Docker)
- Imagem Docker gerada a partir do repositório (Dockerfile)
- Registro de imagens: Docker Hub, GitHub Container Registry ou outro registro privado
- Execução: container em servidor cloud (Droplet/VM), serviço de containers (ECS, DigitalOcean App Platform, etc.) ou plataforma de orquestração
- SSL e balanceamento via proxy reverso ou plataforma de hospedagem (Let's Encrypt/Load Balancer)

### Estrutura de Branches

```
main (produção) ────────────────────→
     ↑
develop ────────────────────────────→
     ↑         ↑         ↑
feature/*  bugfix/*  hotfix/*
```

**Nomenclatura:**
- `main` - produção
- `develop` - integração
- `feature/nome` - novas funcionalidades
- `bugfix/nome` - correções
- `hotfix/nome` - correções urgentes

---

# 3. O PROGRAMA DE GERENCIAMENTO DE CONFIGURAÇÃO

## 3.1 Identificação da Configuração

### 3.1.1 Métodos de Identificação

**Estrutura de Código:**
```
src/
├── controllers/  # [Entidade]Controller.js
├── models/       # [Entidade].js
├── services/     # [Entidade]Service.js
├── routes/       # [entidade]Routes.js
├── middleware/
├── config/
└── utils/

tests/
├── unit/
├── integration/
└── e2e/
```

**Versionamento Semântico:** MAJOR.MINOR.PATCH (ex: 1.2.3)
- **MAJOR:** Breaking changes
- **MINOR:** Novas funcionalidades compatíveis
- **PATCH:** Correções de bugs

**Tags Git:** `v1.0.0`, `v1.2.3`

### 3.1.2 Linhas de Base do Projeto

**Baseline Inicial (v1.0.0):**
- Sistema funcional com CRUD completo
- API REST documentada
- Autenticação JWT
- Testes ≥70% cobertura
- Pipeline CI/CD funcional
- Deploy em produção

**Critérios de Aprovação:**
- Todos os testes passando
- Cobertura ≥70%
- Code review aprovado
- Documentação atualizada

**Quem Autoriza:** Gerente de Configuração e Líder Técnico

## 3.2 Configuração e Controle de Alterações

### 3.2.1 Processamento e Aprovação de Controles de Mudanças

**Processo:**

1. **Solicitação:** Issue criada no GitHub com descrição, tipo e prioridade
2. **Análise:** Avaliação de impacto e priorização
3. **Implementação:** Criação de branch, desenvolvimento e testes
4. **Revisão:** Pull Request com CI/CD automático
5. **Aprovação:** Code review e merge após aprovação
6. **Verificação:** Testes pós-merge e deploy (se main)

**Critérios para Merge:**
- CI/CD passou (100% testes)
- Mínimo 1 aprovação
- Conflitos resolvidos
- Cobertura ≥70%

### 3.2.2 CCB (Conselho de Controle de Mudanças)

**Membros:**
- Gerente de Configuração (Presidente)
- Líder Técnico/Arquiteto
- DevOps Engineer

**Mudanças que Requerem CCB:**
- Alterações arquiteturais
- Breaking changes
- Mudanças em API ou banco de dados
- Adoção de novas tecnologias
- Remoção de funcionalidades

**Reuniões:** Semanais ou conforme necessário

**Processo:**
1. Submissão via issue com label `ccb-review`
2. Análise preliminar
3. Reunião e votação
4. Documentação da decisão
5. Comunicação aos stakeholders


### 3.3.1 Armazenamento de Mídia do Projeto e Processo de Release

**Políticas de Retenção:**
- **Código Fonte:** Permanente no GitHub
- **Branches main/develop:** Permanentes
- **Feature branches:** Deletadas após merge
- **Tags/Releases:** Permanentes
- **Logs Pipeline:** 90 dias

**Planos de Backup:**
- **Repositório:** GitHub (automático) + clones locais
- **Banco de Dados:** MongoDB Atlas (snapshots diários, retenção 7 dias)
- **Configurações:** Documentadas em local seguro

## 3.3 Contabilidade do Status de Configuração
**Processo de Release:**
1. Merge para `main`
2. Criação de tag (`v1.2.0`)
3. Build de imagem Docker e deploy automático via GitHub Actions (build → push para registro de imagens → atualização do ambiente de produção)
4. Publicação de release notes no GitHub
5. Monitoramento pós-release (24-48h)

### 3.3.2 Relatórios e Auditorias

**Relatório Semanal:**
- Commits, PRs e Issues
- Status do pipeline
- Cobertura de testes
- Deploys realizados

**Relatório Mensal:**
- Métricas de qualidade (cobertura, defeitos)
- Métricas de processo (lead time, deployment frequency)
- Resumo de releases

**Auditoria Mensal - Checklist:**
- [ ] Todos ICs sob controle de versão
- [ ] Branches obsoletas removidas
- [ ] Tags seguem padrão
- [ ] Documentação atualizada
- [ ] Pipeline funcional
- [ ] Cobertura ≥70%
- [ ] Backups funcionando

---

# 4. MARCOS

| Marco | Data | Responsável | Critérios |
|-------|------|-------------|-----------|
| M1: Repositório Configurado | [Data X] | DevOps | Repo criado, estrutura definida |
| M2: Pipeline CI/CD Funcional | [Data Y] | DevOps | GitHub Actions configurado, testes executando |
| M3: Baseline Inicial (v1.0.0) | [Data Z] | Gerente GC | Código completo, testes ≥70%, deploy produção |
| M4: Apresentação do Projeto | [Data XY] | Equipe | Slides, demonstração, lições aprendidas |
| M5: Entrega Final | [Data XZ] | Gerente GC | PGC (PDF), repositório (.zip), slides |

**Atualizações do PGC:**
- Revisão trimestral
- Quando houver mudanças significativas em processos/ferramentas
- Após incidentes graves

---

# 5. TREINAMENTO E RECURSOS

## 5.1 Treinamento Requerido

**Para Todos:**
- Git e GitHub Básico (4h)
- Processo de GC (2h)
- Pipeline CI/CD (2h)

**Para Desenvolvedores:**
- Git Avançado (3h)
- Escrita de Testes com Jest (4h)
- Padrões de Código (2h)

**Para DevOps:**
- GitHub Actions (4h)
- Docker e deploy com containers (3h)
- MongoDB Atlas (2h)

## 5.2 Recursos de Software

**Ferramentas Necessárias:**
- Git, Node.js 18.x, VS Code
- Acesso: GitHub, Docker (Docker Desktop / Docker Hub / registro de container), MongoDB Atlas

**Licenças:**
- GitHub: Gratuito (público) ou Pro (privado)
- Docker / Docker Hub: Conta gratuita disponível; custos para recursos avançados ou registros privados conforme necessidade
- MongoDB Atlas: Tier gratuito M0

## 5.3 Recursos Humanos

**Equipe:**
- 1 Gerente de Configuração (50% tempo em GC)
- 3-5 Desenvolvedores (10-15% tempo em GC)
- 1 DevOps Engineer (30% tempo em GC)
- 1 Testador/QA (20% tempo em GC)

---

# 6. CONTROLE DE SOFTWARE DO SUBFORNECEDOR E DO FORNECEDOR

## 6.1 Dependências de Terceiros

Este projeto utiliza bibliotecas open source gerenciadas via npm:

**Dependências de Produção:**
- Express.js (v4.18.2) - Framework web
- Mongoose (v8.0.3) - ODM para MongoDB
- jsonwebtoken (v9.0.2) - Autenticação JWT
- bcryptjs (v2.4.3) - Criptografia
- dotenv (v16.3.1) - Variáveis de ambiente

**Dependências de Desenvolvimento:**
- Jest (v29.7.0) - Framework de testes
- Supertest (v6.3.3) - Testes de API
- ESLint (v8.56.0) - Linting
- Nodemon (v3.0.2) - Hot reload

## 6.2 Processo de Incorporação

**Adição de Nova Dependência:**
1. **Avaliação:** Verificar necessidade, licença, vulnerabilidades, manutenção ativa
2. **Aprovação:** CCB (críticas) ou desenvolvedor senior (menores)
3. **Instalação:** `npm install [pacote]@[versao] --save`
4. **Validação:** Executar testes, verificar build
5. **Documentação:** Justificar no PR, commitar package.json e package-lock.json

**Atualização de Dependências:**
- **Mensal:** Verificar atualizações (`npm outdated`)
- **Prioridade:** Crítico (security patches imediatos), Alto (bugs), Médio (features), Baixo (minor)
- **Auditoria de Segurança:** `npm audit` regularmente, correção imediata de vulnerabilidades críticas

## 6.3 Controle de Versão

**Política:**
- Versões exatas em produção (sem `^` ou `~`)
- `package-lock.json` sempre versionado
- Usar `npm ci` no CI/CD
- Testar atualizações major antes de produção

## 6.4 Serviços Externos (SaaS/PaaS)

**Docker (Deploy / Imagens):**
- Build de imagens a partir do `Dockerfile` no repositório
- Registro de imagem: Docker Hub, GitHub Container Registry ou registro privado
- Deploy: pull da imagem no host ou atualização via orquestrador/serviço
- Monitoramento via logs do container e ferramentas de observabilidade

**MongoDB Atlas (Banco de Dados):**
- SLA: 99.95% uptime (M10+)
- Connection string em variável de ambiente
- Backups automáticos diários

**GitHub (Repositório e CI/CD):**
- SLA: 99.95% uptime
- Backup via clones locais

## 6.5 Licenciamento

**Verificação:**
- Todas as dependências são open source
- Licenças compatíveis: MIT, Apache 2.0, BSD
- Evitar licenças restritivas
- Projeto sob licença MIT

## 6.6 Descontinuação

**Quando Remover:**
- Dependência deprecated
- Vulnerabilidades não corrigidas
- Funcionalidade não necessária
- Substituição por alternativa melhor

**Processo:**
1. Identificar código afetado
2. Implementar alternativa
3. Desinstalar: `npm uninstall [nome do pacote]`
4. Executar testes completos
5. Atualizar documentação

---

