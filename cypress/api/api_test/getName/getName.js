import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

let response;

Given("que realizo uma requisição GET", () => {
  cy.request(
    "GET",
    "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
  ).then((res) => {
    response = res;
  });
});

Then("o conteúdo do campo name da estrutura list é exibido", () => {
  expect(response.body.data.list).to.have.property("name").that.is.a("string")
    .and.not.be.empty;
  cy.log("Nome da estrutura list:", response.body.data.list.name);
});

And("o status code deve ser 200", () => {
  expect(response.status).to.eq(200);
});
