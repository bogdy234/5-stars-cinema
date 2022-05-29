import renderer from "react-test-renderer";
import Modal from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Modal children={<div>test</div>} showModal />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
