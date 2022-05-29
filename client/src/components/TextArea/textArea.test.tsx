import renderer from "react-test-renderer";
import TextArea from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<TextArea placeholder={""} value={""} onChange={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
