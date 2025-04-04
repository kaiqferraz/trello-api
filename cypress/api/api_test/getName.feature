Feature: Validar nome

    Scenario: Validar nome da estrtutura list na API

        Given que realizo uma requisição GET
        Then o conteúdo do campo name da estrutura list é exibido
        And o status code deve ser 200