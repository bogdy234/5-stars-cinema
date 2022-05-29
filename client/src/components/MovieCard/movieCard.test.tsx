import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import renderer from "react-test-renderer";
import MovieCard from "./index";

it("renders correctly", () => {
  const history = createMemoryHistory();
  const tree = renderer
    .create(
      <Router location={history.location} navigator={history}>
        <MovieCard
          id={"1"}
          title={"test"}
          is3D={false}
          genre={"comedy"}
          isPremiere={false}
          coverImageUrl={""}
          rating={0}
          trailerUrl={""}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
