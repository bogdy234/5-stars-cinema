import renderer from "react-test-renderer";
import Icon from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(<Icon src={"/logout.svg"} alt={"some-alt"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
