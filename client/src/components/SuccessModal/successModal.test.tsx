import renderer from "react-test-renderer";
import SuccessModal from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<SuccessModal showModal={false} onClose={jest.fn()} message={""} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
