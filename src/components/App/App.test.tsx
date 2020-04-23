import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { App } from "./App.component";

describe("On Card Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    render(<App />);
  });

  afterEach(() => {
    cleanup();
    jest.useRealTimers();
  });

  describe("Number display", () => {
    const hashesData = [...Array(16).keys()].fill("#").join("");
    const digitsApplied = 59;
    const newHashesData = `${digitsApplied}${[...Array(14).keys()]
      .fill("#")
      .join("")}`;
    const digitRemained = 5;
    const newRemainedHashesData = `${digitRemained}${[...Array(15).keys()]
      .fill("#")
      .join("")}`;

    it("should start with all number placeholders as hashes", () => {
      expect(screen.getByTestId("numberHolder")).toHaveTextContent(hashesData);
    });

    it("should update accordingly upon change on form number input", () => {
      expect(screen.getByTestId("numberHolder")).toHaveTextContent(hashesData);
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: digitsApplied },
      });
      expect(screen.getByTestId("numberHolder")).toHaveTextContent(
        newHashesData
      );
    });

    it("should return to hash if a digit is deleted", () => {
      expect(screen.getByTestId("numberHolder")).toHaveTextContent(
        newHashesData
      );
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: digitRemained },
      });
      expect(screen.getByTestId("numberHolder")).toHaveTextContent(
        newRemainedHashesData
      );
    });
  });

  describe("Name display", () => {
    const initialName = "Full Name";
    const appliedName = "John";

    it("should start with display name as 'FULL NAME'", () => {
      expect(screen.getByTestId("nameHolder")).toHaveTextContent(initialName);
    });

    it("should update accordingly upon change on form name input", () => {
      expect(screen.getByTestId("nameHolder")).toHaveTextContent(initialName);
      fireEvent.change(screen.getByTestId("formName"), {
        target: { value: appliedName },
      });
      expect(screen.getByTestId("nameHolder")).toHaveTextContent(appliedName);
    });

    it("should return back to initial display name if all letters are removed", () => {
      expect(screen.getByTestId("nameHolder")).toHaveTextContent(appliedName);
      fireEvent.change(screen.getByTestId("formName"), {
        target: { value: "" },
      });
      expect(screen.getByTestId("nameHolder")).toHaveTextContent(initialName);
    });
  });

  describe("Expiration Date display", () => {
    const initialDate = "mm/yy";
    const appliedMonth = "09";
    const newAppliedDate = "09/yy";

    it("should start with display data as 'MM/YY'", () => {
      expect(screen.getByTestId("expirationHolder")).toHaveTextContent(
        initialDate
      );
    });

    it("should update accordingly upon change on form name input", () => {
      expect(screen.getByTestId("expirationHolder")).toHaveTextContent(
        initialDate
      );
      fireEvent.change(screen.getByTestId("formMonth"), {
        target: { value: appliedMonth },
      });
      expect(screen.getByTestId("expirationHolder")).toHaveTextContent(
        newAppliedDate
      );
    });
  });

  describe("CVV display", () => {
    const initialData = "***";
    const appliedData = 333;
    const newAppliedData = "333";

    it("should start with display data as '***'", () => {
      expect(screen.getByTestId("cvvHolder")).toHaveTextContent(initialData);
    });

    it("should update accordingly upon change on form CVV input", () => {
      expect(screen.getByTestId("cvvHolder")).toHaveTextContent(initialData);
      fireEvent.change(screen.getByTestId("formCvv"), {
        target: { value: appliedData },
      });
      expect(screen.getByTestId("cvvHolder")).toHaveTextContent(newAppliedData);
    });

    it("should return back to initial display data if all digits are removed", () => {
      expect(screen.getByTestId("cvvHolder")).toHaveTextContent(newAppliedData);
      fireEvent.change(screen.getByTestId("formCvv"), {
        target: { value: "" },
      });
      expect(screen.getByTestId("cvvHolder")).toHaveTextContent(initialData);
    });
  });

  describe("Card icon type display", () => {
    const cardType = {
      visa: "visa",
      mastercard: "mastercard",
      unionpay: "unionpay",
    };
    it("should start with VISA icon", () => {
      expect(screen.getByTestId("cardType")).toHaveClass(cardType.visa);
    });

    it("should change to MASTERCARD if a combination of 5(1-5)* is entered on form number input", () => {
      expect(screen.getByTestId("cardType")).toHaveClass(cardType.visa);
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: 52 },
      });
      expect(screen.getByTestId("cardType")).toHaveClass(cardType.mastercard);
    });

    it("should change to UNIONPAY if a combination of 62* is entered on form number input", () => {
      expect(screen.getByTestId("cardType")).toHaveClass(cardType.mastercard);
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: 62 },
      });
      expect(screen.getByTestId("cardType")).toHaveClass(cardType.unionpay);
    });
  });

  describe("Card's front side", () => {
    it("should display on start", () => {
      expect(screen.getByTestId("cardInnerContainer")).not.toHaveClass(
        "isFlipped"
      );
    });

    it("should flip to Card's back side if form CVV input is focuced", () => {
      expect(screen.getByTestId("cardInnerContainer")).not.toHaveClass(
        "isFlipped"
      );
      fireEvent.focus(screen.getByTestId("formCvv"));
      expect(screen.getByTestId("cardInnerContainer")).toHaveClass("isFlipped");
    });

    it("should return to Card's front side if any other form input is focuced", () => {
      expect(screen.getByTestId("cardInnerContainer")).toHaveClass("isFlipped");
      fireEvent.focus(screen.getByTestId("formName"));
      expect(screen.getByTestId("cardInnerContainer")).not.toHaveClass(
        "isFlipped"
      );
    });
  });

  describe("Card's highlight border", () => {
    it("should highlight Card's number display if form number input is focuced", () => {
      fireEvent.focus(screen.getByTestId("formNumber"));
      expect(screen.getByTestId("elementToHighlight")).toHaveClass(
        "formNumber"
      );
    });

    it("should disappear if user clicks anywhere on screen except form inputs", () => {
      expect(screen.getByTestId("elementToHighlight")).toHaveClass(
        "formNumber"
      );
      fireEvent.click(screen.getByTestId("cardType"));
      expect(screen.getByTestId("elementToHighlight")).toHaveClass(
        "formGlobal"
      );
    });
  });
});
