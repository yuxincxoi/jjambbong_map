import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

const MainPage: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[25%]">
          <Title className="mt-4 ml-2 text-start hidden lg:block" />
          <PlaceListTable disabled={false} />
        </div>
        <div className="h-[300px] lg:h-auto lg:flex-1">
          <Map />
        </div>
      </div>
    </>
  );
};

export default MainPage;
