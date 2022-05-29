import renderer from "react-test-renderer";
import Button from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Button onClick={jest.fn()} text={"some text"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
