import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";

const MainPage: React.FC = () => {
  return (
    <>
      <h1>Main</h1>
      <Title page="wka" />
      <Map />
      <PlaceListTable />
    </>
  );
};

export default MainPage;
