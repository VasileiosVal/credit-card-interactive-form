/// <reference types="cypress" />

describe("On Form Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Card number input", () => {
    it("should update number input", () => {
      cy.get('[data-testid="formNumber"]')
        .type("5951")
        .should("have.value", "5951");
    });

    it("should apply a space after 4 given digits", () => {
      cy.get('[data-testid="formNumber"]')
        .type("616649051234")
        .should("have.value", "6166  4905  1234")
        .type("{backspace}{backspace}{backspace}")
        .should("have.value", "6166  4905  1");
    });

    it("shouldn't exceed 16 digits in length", () => {
      const maxAllowedDigits = "4242424242424242";
      const digitsWithSpace = "4242  4242  4242  4242";

      cy.get('[data-testid="formNumber"]')
        .type(maxAllowedDigits)
        .should("have.value", digitsWithSpace)
        .type("123")
        .should("have.value", digitsWithSpace);
    });
  });

  describe("Card name input", () => {
    it("should update name input", () => {
      cy.get('[data-testid="formName"]')
        .type("John Doe")
        .should("have.value", "John Doe")
        .type("{backspace}{backspace}{backspace}{backspace}")
        .should("have.value", "John");
    });
  });

  describe("Card expiration month input", () => {
    it("should update month input", () => {
      cy.get('[data-testid="formMonth"]')
        .select("03")
        .should("have.value", "03");
    });
  });

  describe("Card number CVV", () => {
    it("should update CVV input", () => {
      cy.get('[data-testid="formCvv"]')
        .type("222")
        .should("have.value", "222");
    });

    it("shouldn't update CVV input if value passed isn't a number", () => {
      cy.get('[data-testid="formCvv"]')
        .type("431")
        .should("have.value", "431")
        .type("ad")
        .should("have.value", "431");
    });
  });
});
