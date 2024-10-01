
import { render } from "@testing-library/react";
import Card from "./Card";

test("card smoke test", function () {
  render(<Card  />)
});

test("matches snapshot", function() {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });