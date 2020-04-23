import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Form from "./Form.component";

describe("On Form Component", () => {
  beforeEach(() => {
    render(<Form />);
  });
  afterEach(() => {
    cleanup();
  });

  describe("Card number input", () => {
    it("should update number input", () => {
      expect(screen.getByTestId("formNumber")).toHaveValue("");
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: 59 },
      });
      expect(screen.getByTestId("formNumber")).toHaveValue("59");
    });

    it("shouldn't update number input if value passed isn't a number", () => {
      expect(screen.getByTestId("formNumber")).toHaveValue("59");
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: "abc" },
      });
      expect(screen.getByTestId("formNumber")).toHaveValue("59");
    });

    it("should apply a space after 4 given numbers", () => {
      expect(screen.getByTestId("formNumber")).toHaveValue("59");
      fireEvent.change(screen.getByTestId("formNumber"), {
        target: { value: 5910156 },
      });
      expect(screen.getByTestId("formNumber")).toHaveValue("5910  156");
    });
  });

  describe("Card number CVV", () => {
    it("shouldn't update number input if value passed isn't a number", () => {
      expect(screen.getByTestId("formCvv")).toHaveValue("");
      fireEvent.change(screen.getByTestId("formCvv"), {
        target: { value: "abc" },
      });
      expect(screen.getByTestId("formCvv")).toHaveValue("");
    });
  });
});
