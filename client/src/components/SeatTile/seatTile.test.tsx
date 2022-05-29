import renderer from "react-test-renderer";
import { SeatStatus } from "../../interfaces/seat";
import SeatTile from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SeatTile
        seatStatus={SeatStatus.Available}
        seatRow={0}
        seatColumn={0}
        onPressSeat={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
