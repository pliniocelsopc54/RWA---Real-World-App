/*Exercicio 1:
Automação do Caso de Teste: Login com sucesso.*/

//Automação do Caso de Teste: Registro de novo usuário com sucesso.
//OBS: Esse Registro de novo usuário com sucesso deverá ser executado
//apenas na primeira vez, caso contrário, dará erro na automação
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina de cadastro de usuario
    cy.get('[data-test="signup"]').click()                                                                                //Clica em: Don't have an account? Sign Up
    cy.get('[name="firstName"]').type('Quality')                                                                          //Digita o primeiro nome
    cy.get('[name="lastName"]').type('Assurance')                                                                         //Digita o ultimo nome
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o Username
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita o password
    cy.get('[name="confirmPassword"]').type('ASDFGH12052026')                                                             //Confirma a senha cadastrada
    cy.get('[data-test="signup-submit"]').click()                                                                         //Clica em Sign Up
    cy.get('.MuiTypography-h5')                                                                                           //Verifica que o login foi realizado com sucesso
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o username
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita o password
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica em "Sign In"    
    cy.get('[data-test="user-onboarding-next"]').click()                                                                  //clica em "Next" no pop-up que aparece
    cy.get('[name="bankName"]').type('QA BANK')                                                                           //Digita o nome do Banco
    cy.get('[name="routingNumber"]').type('123456789')                                                                    //Digita o Routing Number
    cy.get('[name="accountNumber"]').type('123456789')                                                                    //Digita o Account Number
    cy.get('[data-test="bankaccount-submit"]').click()                                                                    //Clica em Save
    cy.get('[data-test="user-onboarding-next"]').click()
});
});

//Automacao da feature de login realizado com sucesso
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('[data-test="sidenav-user-full-name"]')                                                                        //Verifica o username apos o login    
  });
});

//Automação do Caso de Teste: Tentar fazer login com credenciais inválidas.
describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('123456')                                                                            //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('.MuiAlert-message')                                                                                           //verifica a mensagem de erro ao efetuar login com credenciais invalidas
  });
});

//Automação do Caso de Teste: Tentar registrar um novo usuário com informações incompletas.
describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina de cadastro de usuario
    cy.get('[data-test="signup"]').click()                                                                                //Clica em: Don't have an account? Sign Up
    cy.get('[name="firstName"]').type('Quality')                                                                          //Digita o primeiro nome
    cy.get('[name="lastName"]').type('Assurance')                                                                         //Digita o ultimo nome
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o Username
    cy.get('[name="password"]').type('123456')                                                                            //Digita o password
    cy.get('[name="confirmPassword"]').type('12')                                                                         //Digita a senha errada
    cy.get('#confirmPassword-helper-text').contains("Password does not match")
  });
});

/*Exercicio 2:
Automação do caso de teste na feature "Enviar Dinheiro"*/

//Automação dos Casos de Teste "Enviar Dinheiro"
describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link 
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('[data-test="sidenav-user-full-name"]')                                                                        //Verifica o username apos o login 
    cy.get('[data-test="sidenav-home"]').click()                                                                          //Clica em Home
    cy.get('[data-test="nav-personal-tab"]').click()                                                                      //Clica em Mine
    cy.get('[data-test="nav-top-new-transaction"]').click()                                                               //Clica em $New
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').click()              //cy.get('.MuiInputBase-root > [name="description"]').type('Pay-Lia')                                                   //Clica em "Description" e escreve um texto
    cy.get('[name="amount"]').type('800.00')                                                                                 //Clica em "Amount" e digita o valor   
    cy.get('.MuiInputBase-root > [name="description"]').type('Pay-Lia')                                                   //Digita a descricao do emprestimo
    cy.get('[data-test="transaction-create-submit-payment"]').click()                                                     //Clica em "Pay"
    cy.get('[data-test="alert-bar-success"]')                                                                             //Verifica o status: "transaction Submited"
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('[data-test="sidenav-user-full-name"]')                                                                        //Verifica o username apos o login 
    cy.get('[data-test="sidenav-home"]').click()                                                                          //Clica em Home
    cy.get('[data-test="nav-personal-tab"]').click()                                                                      //Clica em Mine
    cy.get('[data-test="nav-top-new-transaction"]').click()                                                               //Clica em $New
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1').click()              //Clica em Lia Rosembaum
    cy.get('[name="amount"]').type('1,000,000,000.00')                                                                    //Clica em "Amount" e digita o valor   
    cy.get('.MuiInputBase-root > [name="description"]').type('Pay-Lia')                                                   //Clica em "Description" e escreve um texto
    cy.get('[data-test="transaction-create-submit-payment"]').click()                                                     //Clica em "Pay"
    cy.get('[data-test="alert-bar-success"]')                                                                             //Verifica o status: "transaction Submited"
  });
});

/*Exercicio 3:
Automação do caso de teste para feature "Visualizar Historico de Transacoes"*/

//Automação dos Casos de Teste "Visualizar Histórico de Transações"
describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.visit('http://localhost:3000/signin')
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('[data-test="nav-personal-tab"]').click()                                                                      //Clica em "Mine"
  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    //Implemente os passos do caso de teste aqui: https://drive.google.com/file/d/1pZitqYEtSjSJgaZ4-pyRrkhV5y5N7ioC/view?usp=drive_link
    cy.visit('http://localhost:3000/signin')                                                                              //Acessa a pagina do projeto    
    cy.get('[name="username"]').type('Qa-tester')                                                                         //Digita o nome do usuario
    cy.get('[name="password"]').type('ASDFGH12052026')                                                                    //Digita a senha
    cy.get('[data-test="signin-submit"]').click()                                                                         //Clica no botao "sign in"
    cy.get('[data-test="nav-personal-tab"]').click()                                                                      //Clica em "Mine"
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root').click()                            //Clica em "HOME"
    cy.get('[data-test="nav-contacts-tab"]').click()                                                                      //Clica em "FRIENDS"
    cy.contains('No Transactions')                                                                                        //Verifica o conteudo: "No transactions"
  });
});