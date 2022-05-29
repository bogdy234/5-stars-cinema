import renderer from "react-test-renderer";
import ReservationModal from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ReservationModal
        showModal={false}
        onClickConfirm={jest.fn()}
        dateOptions={[]}
        timeOptions={[]}
        selectedDateOption={""}
        selectedTimeOption={""}
        onChangeDate={jest.fn()}
        onChangeTime={jest.fn()}
        hideModal={jest.fn()}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
