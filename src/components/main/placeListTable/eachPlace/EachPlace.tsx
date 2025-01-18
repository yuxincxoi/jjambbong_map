import { useEffect, useState } from "react";
import EachPlaceProps from "../../../../interfaces/components/main/placeListTable/eachPlace/EachPlace.interface";

const EachPlace: React.FC<EachPlaceProps> = ({ place, onLikeToggle }) => {
  const heartFull = "url('./img/fullHeart.png')";
  const heartEmpty = "url('./img/emptyHeart.png')";
  const [isHeartOn, setIsHeartOn] = useState(false);

  const handleHeartClick = () => {
    setIsHeartOn((prev) => !prev);
    onLikeToggle(place, !isHeartOn);
  };

  useEffect(() => {
    const fetchLikedPlaces = async () => {
      const data = await loadLikedPlaces();

      // 좋아요 상태 확인
      const isLiked = data.some(
        (likedPlace: { placeName: string; address: string }) =>
          likedPlace.placeName === place.placeName &&
          likedPlace.address === place.address
      );

      setIsHeartOn(isLiked);
    };
    fetchLikedPlaces();
  }, []);

  const loadLikedPlaces = async () => {
    try {
      const response = await fetch("/api/likes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching liked places:", error);
    }
  };

  return (
    <>
      <div className="bg-white w-[99%] m-1 flex justify-between">
        <div className="px-5 py-2">
          <div className="text-xl font-semibold">{place.placeName}</div>
          <div>{place.address}</div>
        </div>
        <div
          onClick={handleHeartClick}
          style={{
            backgroundImage: isHeartOn ? heartFull : heartEmpty,
          }}
          className="w-7 h-7 mt-5 mr-4 bg-cover bg-no-repeat cursor-pointer"
        ></div>
      </div>
    </>
  );
};

export default EachPlace;
