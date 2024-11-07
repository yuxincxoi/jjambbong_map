import EachPlaceProps from "../../../../interfaces/components/main/placeListTable/eachPlace/EachPlace.interface";

const EachPlace: React.FC<EachPlaceProps> = ({ place }) => {
  return (
    <>
      <div className="bg-white w-[99%] m-1 flex  justify-between">
        <div className="px-5 py-3">
          <div className="text-2xl font-semibold">{place.placeName}</div>
          <div>{place.address}</div>
        </div>
        <div className="w-14 h-14 mt-3 bg-main-color"></div>
      </div>
    </>
  );
};

export default EachPlace;
