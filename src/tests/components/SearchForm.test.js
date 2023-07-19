import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values", () => {
    const { getByText } = render(<SearchForm />);

    expect(getByText("Search")).toBeInTheDocument();
  });
});
