import renderer from "react-test-renderer";
import SeatArea from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SeatArea
        rows={0}
        columns={0}
        selectedSeats={[]}
        setSelectedSeats={jest.fn()}
        reservedSeats={[]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
