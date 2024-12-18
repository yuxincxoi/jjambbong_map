import { useState } from "react";
import EachPlace from "./eachPlace/EachPlace";
import Place from "../../../interfaces/components/main/placeListTable/Place.interface";
import { ILikePlace } from "../../../../db/interfaces/LikePlace.interface";
import InputSearch from "../InputSearch";
import { searchPlace } from "../../../modules/map/searchPlace";

const PlaceListTable = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [likedPlaces, setLikedPlaces] = useState<ILikePlace[]>([]);

  const handleSearch = async (searchValue: string) => {
    try {
      setPlaces([]);
      const result = await searchPlace(searchValue);
      setPlaces(result);
    } catch (error) {
      console.error(error);
      setPlaces([]);
    }
  };

  return (
    <>
      <InputSearch onSearch={handleSearch} />
      <div className="flex justify-center mt-6">
        <div className="bg-[#F8F8F8] w-[40%]">
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
