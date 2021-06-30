import React from "react";
import { render } from "@testing-library/react";
import AddClient from "./AddClient";

describe("AddClient tests", () => {
  it("should render", () => {
    expect(render(<AddClient />)).toBeTruthy();
  });
});
