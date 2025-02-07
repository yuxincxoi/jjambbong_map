import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

const MainPage: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="flex">
        <div className="w-[25%]">
          <Title className="mt-4 ml-2 text-start" />
          <PlaceListTable disabled={false} />
        </div>
        <Map />
      </div>
    </>
  );
};

export default MainPage;
