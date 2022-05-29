import renderer from "react-test-renderer";
import Checkbox from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Checkbox checked={false} onChange={jest.fn()} label={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
