import { useEffect, useState } from "react";
import EachPlace from "./eachPlace/EachPlace";
import Place from "../../../interfaces/components/main/placeListTable/Place.interface";
import { PlaceListTableProps } from "../../../interfaces/components/main/placeListTable/PlaceListTable.interface";
import { ILikePlace } from "../../../../db/interfaces/LikePlace.interface";
import InputSearch from "../InputSearch";
import {
  searchPlace,
  setResetClickedState,
} from "../../../modules/map/searchPlace";
import { openInfoWindow } from "../../../modules/map/openInfoWindow";
import { loadLikedPlaces } from "../../../modules/api/loadLikedPlaces";

const PlaceListTable: React.FC<PlaceListTableProps> = ({
  disabled,
  isVisible,
}) => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [likedPlaces, setLikedPlaces] = useState<ILikePlace[]>([]);
  const [clickedPlace, setClickedPlace] = useState<string | null>();
  const [className, setClassName] = useState<string>("");

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
        setClassName("");
      } else if (page === "likePage") {
        setPlaces([]);
        const result = await loadLikedPlaces();
        setPlaces(result);
        setClassName("hidden lg:block");
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

  setResetClickedState((placeName: string | null) =>
    setClickedPlace(placeName)
  );

  return (
    <>
      <div className={`${isVisible ? "translate-y-0" : "translate-y-full"}`}>
        <InputSearch
          onSearch={handleSearch}
          disabled={disabled}
          className={className}
        />
        <div className="flex justify-center mt-4">
          <div className="bg-[#e6e6e6] w-full h-[400px] lg:h-[calc(100vh-120px)] overflow-y-auto">
            {places.length > 0 ? (
              places.map((place) => (
                <div key={place.placeName} className="cursor-pointer">
                  <EachPlace
                    place={place}
                    onLikeToggle={handleLikeToggle}
                    isClicked={clickedPlace === place.placeName}
                    onClick={handlePlaceClick}
                  />
                </div>
              ))
            ) : (
              <p className="text-center py-4">검색된 장소가 없습니다</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceListTable;
