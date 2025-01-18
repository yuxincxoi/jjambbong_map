import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

const MainPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Title />
      <Map />
      <PlaceListTable />
    </>
  );
};

export default MainPage;
