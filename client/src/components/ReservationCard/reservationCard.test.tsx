import renderer from "react-test-renderer";
import ReservationCard from "./index";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ReservationCard
        reservationId={"2"}
        hallNumber={0}
        movie={"batman"}
        time={""}
        seats={[]}
        typesOfTickets={{ normal: 2, reduced: 3 }}
        totalPrice={0}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
