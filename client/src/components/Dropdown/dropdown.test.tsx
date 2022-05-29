import renderer from "react-test-renderer";
import Dropdown from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Dropdown
        show
        options={["1", "2"]}
        onClickOption={jest.fn()}
        hide={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
