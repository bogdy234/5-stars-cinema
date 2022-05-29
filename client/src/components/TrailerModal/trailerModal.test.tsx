import renderer from "react-test-renderer";
import TrailerModal from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <TrailerModal showModal={false} youtubeLink={""} toggle={jest.fn()} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
