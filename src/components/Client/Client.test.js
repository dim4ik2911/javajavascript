import React from "react";
import { render } from "@testing-library/react";
import Client from "./Client";

describe("Client tests", () => {
  it("should render", () => {
    expect(render(<Client />)).toBeTruthy();
  });
});
