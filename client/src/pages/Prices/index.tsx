import { FC, ReactElement } from "react";
import CONSTANTS from "../../constants";
import NavbarContainer from "../../containers/Navbar/container";

interface PricesProps {}

const {
  TITLE,
  FIRST_PARAGRAPH,
  MOVIE_2D,
  MOVIE_3D,
  PROJECTION,
  PRICES_2D,
  PRICES_3D,
  TABLE_PROJECTION,
  SECOND_PARAGRAPH,
} = CONSTANTS.TEXT.PRICES_PAGE;

const Prices: FC<PricesProps> = (): ReactElement => {
  return (
    <div className="pb-14">
      <NavbarContainer />
      <div className="text-gray-100 mx-10">
        <div className="text-3xl mt-10 flex justify-center">{TITLE}</div>
        <div className="text-lg text-left mt-10">{FIRST_PARAGRAPH}</div>
        <table className="w-full mt-10">
          <thead>
            <tr className="border-2">
              <th className="text-left sm:pl-10">{PROJECTION}</th>
              <th className="text-left">{MOVIE_2D}</th>
              <th className="text-left">{MOVIE_3D}</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {TABLE_PROJECTION.map((row, index) => {
              return (
                <tr className="h-12 border-b-2" key={`${row}`}>
                  <td className="sm:pl-10">{row}</td>
                  <td>{PRICES_2D[index]}</td>
                  <td>{PRICES_3D[index]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-lg text-left mt-10">{SECOND_PARAGRAPH}</div>
      </div>
    </div>
  );
};

export default Prices;
