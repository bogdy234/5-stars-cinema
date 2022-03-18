import { FC, ReactElement, useEffect } from "react";
import api from "../../api";

interface MoviesAreaProps {}

const MoviesArea: FC<MoviesAreaProps> = (): ReactElement => {
  useEffect(() => {
    api.get("/");
  }, []);
  return <div></div>;
};

export default MoviesArea;
