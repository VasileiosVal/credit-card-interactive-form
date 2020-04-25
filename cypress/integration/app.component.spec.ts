/// <reference types="cypress" />

describe("On Card Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Number display", () => {
    const hashesData = "################";
    const digitsApplied = "5952";
    const newHashesData = `${digitsApplied}############`;
    const digitRemained = "5";
    const newRemainedHashesData = `${digitRemained}###############`;

    it("should start with all number placeholders as hashes", () => {
      cy.get('[data-testid="numberHolder"]').should("have.text", hashesData);
    });

    it("should update accordingly upon change on form number input and return to hash if a digit is deleted", () => {
      cy.get('[data-testid="numberHolder"]').should("have.text", hashesData);

      cy.get('[data-testid="formNumber"]').type(digitsApplied);

      cy.get('[data-testid="numberHolder"]').should("have.text", newHashesData);
    });

    it("should return to hash if a digit is deleted", () => {
      cy.get('[data-testid="formNumber"]').type(digitsApplied);

      cy.get('[data-testid="numberHolder"]').should("have.text", newHashesData);

      cy.get('[data-testid="formNumber"]').type(
        "{backspace}{backspace}{backspace}"
      );

      cy.get('[data-testid="numberHolder"]').should(
        "have.text",
        newRemainedHashesData
      );
    });
  });

  describe("Name display", () => {
    const initialName = "Full Name";
    const appliedName = "John Doe";
    const timesBackspacePressed =
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}";

    it("should start with display name as 'FULL NAME'", () => {
      cy.get('[data-testid="nameHolder"]').contains(initialName);
    });

    it("should update accordingly upon change on form name input", () => {
      cy.get('[data-testid="nameHolder"]').contains(initialName);

      cy.get('[data-testid="formName"]').type(appliedName);

      cy.get('[data-testid="nameHolder"]').contains(appliedName);
    });

    it("should return back to initial display name if all letters are removed", () => {
      cy.get('[data-testid="formName"]').type(appliedName);

      cy.get('[data-testid="nameHolder"]').contains(appliedName);

      cy.get('[data-testid="formName"]').type(timesBackspacePressed);

      cy.get('[data-testid="nameHolder"]').contains(initialName);
    });
  });

  describe("Name display", () => {
    const initialDate = "mm/yy";
    const appliedMonth = "09";
    const newAppliedDate = "09/yy";

    it('should start with display data as "MM/YY"', () => {
      cy.get('[data-testid="expirationHolder"]').should(
        "have.text",
        initialDate
      );
    });

    it("should update accordingly upon change on form month input", () => {
      cy.get('[data-testid="expirationHolder"]').should(
        "have.text",
        initialDate
      );

      cy.get('[data-testid="formMonth"]').select(appliedMonth);

      cy.get('[data-testid="expirationHolder"]').should(
        "have.text",
        newAppliedDate
      );
    });
  });

  describe("CVV display", () => {
    const initialData = "***";
    const appliedData = "333";
    const newAppliedData = "333";
    const timesBackspacePressed = "{backspace}{backspace}{backspace}";

    it("should start with display data as '***'", () => {
      cy.get('[data-testid="cvvHolder"]').should("have.text", initialData);
    });

    it("should update accordingly upon change on form CVV input", () => {
      cy.get('[data-testid="cvvHolder"]').should("have.text", initialData);

      cy.get('[data-testid="formCvv"]').type(appliedData);

      cy.get('[data-testid="cvvHolder"]').should("have.text", newAppliedData);
    });

    it("should return back to initial display data if all digits are removed", () => {
      cy.get('[data-testid="formCvv"]').type(appliedData);

      cy.get('[data-testid="cvvHolder"]').should("have.text", newAppliedData);

      cy.get('[data-testid="formCvv"]').type(timesBackspacePressed);

      cy.get('[data-testid="cvvHolder"]').should("have.text", initialData);
    });
  });

  describe("Card icon type display", () => {
    const cardType = {
      visa: "visa",
      mastercard: "mastercard",
      unionpay: "unionpay",
    };
    const masterCardCombinationStart = "52";
    const unioPayCombinationStart = "62";

    it("should start with VISA icon", () => {
      cy.get('[data-testid="cardType"]')
        .invoke("attr", "class")
        .should("contain", cardType.visa);
    });

    it("should change to MASTERCARD if a combination of 5(1-5)* is entered on form number input", () => {
      cy.get('[data-testid="cardType"]')
        .invoke("attr", "class")
        .should("contain", cardType.visa);

      cy.get('[data-testid="formNumber"]').type(masterCardCombinationStart);

      cy.get('[data-testid="cardType"]')
        .invoke("attr", "class")
        .should("contain", cardType.mastercard);
    });

    it("should change to UNIONPAY if a combination of 62* is entered on form number input", () => {
      cy.get('[data-testid="formNumber"]').type(masterCardCombinationStart);

      cy.get('[data-testid="cardType"]')
        .invoke("attr", "class")
        .should("contain", cardType.mastercard);

      cy.get('[data-testid="formNumber"]')
        .type("{backspace}{backspace}")
        .type(unioPayCombinationStart);

      cy.get('[data-testid="cardType"]')
        .invoke("attr", "class")
        .should("contain", cardType.unionpay);
    });
  });

  describe("Card's front side", () => {
    it("should display on start", () => {
      cy.get('[data-testid="cardInnerContainer"]')
        .invoke("attr", "class")
        .should("not.contain", "isFlipped");
    });

    it("should flip to Card's back side if form CVV input is focuced", () => {
      cy.get('[data-testid="formCvv"]').focus();

      cy.get('[data-testid="cardInnerContainer"]')
        .invoke("attr", "class")
        .should("contain", "isFlipped");
    });

    it("should return to Card's front side if any other form input is focuced", () => {
      cy.get('[data-testid="formCvv"]').focus();

      cy.get('[data-testid="cardInnerContainer"]')
        .invoke("attr", "class")
        .should("contain", "isFlipped");

      cy.get('[data-testid="formName"]').focus();

      cy.get('[data-testid="cardInnerContainer"]')
        .invoke("attr", "class")
        .should("not.contain", "isFlipped");
    });
  });

  describe("Card's highlight border", () => {
    it("should highlight Card's number display if form number input is focuced", () => {
      cy.get('[data-testid="elementToHighlight"]')
        .invoke("attr", "class")
        .should("contain", "formGlobal");

      cy.get('[data-testid="formNumber"]').focus();

      cy.get('[data-testid="elementToHighlight"]')
        .invoke("attr", "class")
        .should("contain", "formNumber")
        .should("not.contain", "formGlobal");
    });

    it("should disappear if user clicks anywhere on screen except form inputs", () => {
      cy.get('[data-testid="formNumber"]').focus();

      cy.get('[data-testid="elementToHighlight"]')
        .invoke("attr", "class")
        .should("contain", "formNumber")
        .should("not.contain", "formGlobal");

      cy.get('[data-testid="cardType"]').click();

      cy.get('[data-testid="elementToHighlight"]')
        .invoke("attr", "class")
        .should("contain", "formGlobal")
        .should("not.contain", "formNumber");
    });
  });
});
