import { useState } from "react";
import EachPlace from "./eachPlace/EachPlace";
import Place from "../../../interfaces/components/main/placeListTable/Place.interface";

const PlaceListTable = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="bg-[#F8F8F8] w-[50%]">
          {places.length > 0 ? (
            places.map((place) => (
              <EachPlace key={place.placeName} place={place} />
            ))
          ) : (
            <p>검색된 장소가 없습니다.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PlaceListTable;
