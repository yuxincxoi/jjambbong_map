import { useEffect, useState } from "react";
import EachPlace from "./eachPlace/EachPlace";
import Place from "../../../interfaces/components/main/placeListTable/Place.interface";
import { ILikePlace } from "../../../../db/interfaces/LikePlace.interface";
import InputSearch from "../InputSearch";
import { searchPlace } from "../../../modules/map/searchPlace";
import { openInfoWindow } from "../../../modules/map/openInfoWindow";
import { loadLikedPlaces } from "../../../modules/api/loadLikedPlaces";

const PlaceListTable = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [likedPlaces, setLikedPlaces] = useState<ILikePlace[]>([]);
  const [clickedPlace, setClickedPlace] = useState<string | null>();

  useEffect(() => {
    handleSearch("대전 짬뽕");
  }, []);

  const handleSearch = async (searchValue: string) => {
    try {
      const page = window.location.pathname.split("/").pop();

      if (page === "mainPage") {
        setPlaces([]);
        const result = await searchPlace(searchValue);
        setPlaces(result || []);
      } else if (page === "likePage") {
        setPlaces([]);
        const result = await loadLikedPlaces();
        setPlaces(result);
      }
    } catch (error) {
      console.error(error);
      setPlaces([]);
    }
  };

  const handleLikeToggle = async (place: ILikePlace, isLike: boolean) => {
    const likePlace: ILikePlace = {
      placeName: place.placeName,
      address: place.address,
    };

    try {
      await fetch("/api/users/likeplace", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likedPlaces: likePlace }),
      });
    } catch (error) {
      console.error("Error updating likePlace:", error);
    }
  };

  const handlePlaceClick = (placeName: string) => {
    openInfoWindow(placeName);
    setClickedPlace(placeName);
  };

  return (
    <>
      <InputSearch onSearch={handleSearch} />
      <div className="flex justify-center mt-4">
        <div className="bg-[#e6e6e6] w-full">
          {places.length > 0 ? (
            places.map((place) => (
              <div
                key={place.placeName}
                onClick={() => handlePlaceClick(place.placeName)}
                className="cursor-pointer"
              >
                <EachPlace
                  place={place}
                  onLikeToggle={handleLikeToggle}
                  isClicked={clickedPlace === place.placeName}
                />
              </div>
            ))
          ) : (
            <p className="text-center py-4">검색된 장소가 없습니다</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PlaceListTable;
