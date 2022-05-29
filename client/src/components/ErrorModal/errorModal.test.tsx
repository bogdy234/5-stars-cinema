import renderer from "react-test-renderer";
import ErrorModal from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<ErrorModal showModal onClose={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
