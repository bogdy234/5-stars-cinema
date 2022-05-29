import renderer from "react-test-renderer";
import Select from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Select options={[]} value={""} onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
