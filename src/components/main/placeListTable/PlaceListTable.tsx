import { useState } from "react";
import EachPlace from "./eachPlace/EachPlace";
import Place from "../../../interfaces/components/main/placeListTable/Place.interface";

const PlaceListTable = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="bg-[#F8F8F8] w-[50%]">
          <EachPlace />
        </div>
      </div>
    </>
  );
};

export default PlaceListTable;
