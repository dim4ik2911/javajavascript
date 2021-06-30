import React from "react";
import { render } from "@testing-library/react";
import Clients from "./Clients";

describe("Clients tests", () => {
  it("should render", () => {
    expect(render(<Clients />)).toBeTruthy();
  });
});
