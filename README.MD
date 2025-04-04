# Projeto de Automação com Cypress - APIs

Este projeto utiliza o framework **Cypress** para automação de testes em APIs. A estrutura do projeto foi configurada para suportar testes utilizando o **Cucumber** como linguagem de definição de cenários.

## Dependências

As principais dependências utilizadas no projeto são:

- [Cypress](https://www.cypress.io/) - Framework de testes.
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - Integração do Cucumber com o Cypress.
- [Cypress Esbuild Preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor) - Preprocessador para melhorar o desempenho.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto:

```
cd trello-api
```

3. Instale as dependências:

```
npm run cypress:open
```

## Documentação API
```
https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-group-actions
```

## Cenários de Teste Implementados

_getName:_ Validar nome da estrtutura list na API.

Autor
Kaique Ferraz da Silva
