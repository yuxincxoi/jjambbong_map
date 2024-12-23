import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <>
      <Title />
      <Map />
      <PlaceListTable />
      <Link to="/">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Logout
        </button>
      </Link>
      <Link to="/myPage">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          My Page
        </button>
      </Link>
      <Link to="/likePage">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Like Page
        </button>
      </Link>
    </>
  );
};

export default MainPage;
