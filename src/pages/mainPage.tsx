import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <>
      <h1>Main</h1>
      <Title page="wka" />
      <Map />
      <PlaceListTable />
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
      <Link to="/myPage">
        <button>Go to My Page</button>
      </Link>
      <Link to="/likePage">
        <button>Go to Like Page</button>
      </Link>
    </>
  );
};

export default MainPage;
