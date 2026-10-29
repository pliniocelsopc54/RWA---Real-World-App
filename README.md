
Real World App - Test Automation & Quality Assurance

Este repositório apresenta uma suíte robusta de testes automatizados e garantia de qualidade (QA) implementada sobre a aplicação Real World App. O objetivo principal é demonstrar boas práticas de engenharia de qualidade, automação End-to-End (E2E), testes de API e rastreabilidade de defeitos.


    Tecnologias e Ferramentas Utilizadas:

    • Automação E2E: Cypress / Playwright (ajuste conforme o framework que você usou)
  
    • Testes de API: Postman / Cypress API testing

    • Gerenciamento de Testes e Bugs: Jira / GitHub Issues
  
    • Controle de Versão & CI/CD: Git, GitHub Actions
    
    • Boas Práticas: Uso de seletores resilientes (data-cy), Page Object Model (quando aplicável) e relatórios de execução.
  

Escopo de Qualidade e Casos de Teste Cobertos
A suíte de testes cobre os fluxos críticos de negócio da aplicação:




    1 - Autenticação e Gestão de Usuários:

      • Cadastro de novos usuários com validação de campos obrigatórios.
  
      • Login bem-sucedido e tratamento de credenciais inválidas.
  
      • Validação de sessão e controle de acesso (RBAC).


  

2 - Transações Bancárias (Core Business):

      • Envio e solicitação de valores entre usuários.
  
      • Validação de saldo em tempo real após transações.
  
      • Histórico de transações e filtros por data/valor.
      

3 - Perfil e Configurações:

      • Atualização de dados cadastrais e preferências de conta.
  
      • Upload de arquivos (foto de perfil).
  

Como Executar os Testes Localmente
Siga os passos abaixo para rodar a suíte de testes no seu ambiente:

1 - Pré-requisitos:  

      • Node.js instalado (versão LTS recomendada).
  
      • Git instalado.
  

2 - Clone o repositório:

  Bash
  git clone https://github.com/SEU-USUARIO/real-world-app.git  
  
  Bash
  cd real-world-app
  

3 - Instale as dependências:

  Bash
  npm install

4 - Execute os testes:

      • Modo Integrado(GUI):
    Bash
    npx cypress open
    
      
      • Modo Headless(CI):
    Bash
    npx cypress run

Estratégia de Qualidade e Abordagem de Testes

    • Abordagem "Shift-Left": Foco em validações precoces e testes automatizados integrados ao ciclo de desenvolvimento.

    • Resiliência de Seletores: Padronização no uso de atributos personalizados (data-cy) para evitar quebras de testes devido a alterações visuais ou classes CSS.

    • Gestão de Defeitos: Os cenários cobertos refletem cenários reais de testes exploratórios, testes de aceitação e validação de requisitos de negócio.



