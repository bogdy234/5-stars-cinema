import renderer from "react-test-renderer";
import TextInput from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<TextInput value={""} onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
