import { useEffect, useState, useRef } from "react";
import EachPlaceProps from "../../../../interfaces/components/main/placeListTable/eachPlace/EachPlace.interface";
import { ILikePlace } from "../../../../../db/interfaces/LikePlace.interface";
import { loadLikedPlaces } from "../../../../modules/api/loadLikedPlaces";

const EachPlace: React.FC<EachPlaceProps> = ({
  place,
  onLikeToggle,
  isClicked,
  onClick,
}) => {
  const heartFull = "url('./img/fullHeart.png')";
  const heartEmpty = "url('./img/emptyHeart.png')";
  const [isHeartOn, setIsHeartOn] = useState(false);
  const placeRef = useRef<HTMLDivElement>(null);

  const handleHeartClick = () => {
    setIsHeartOn((prev) => !prev);
    onLikeToggle(place, !isHeartOn);
  };

  useEffect(() => {
    const fetchLikedPlaces = async () => {
      const data: ILikePlace[] = await loadLikedPlaces();

      // 좋아요 상태 확인
      const isLiked = data.some(
        (likedPlace: ILikePlace) =>
          likedPlace.placeName === place.placeName &&
          likedPlace.address === place.address
      );

      setIsHeartOn(isLiked);
    };
    fetchLikedPlaces();
  }, []);

  useEffect(() => {
    if (isClicked && placeRef.current) {
      placeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [isClicked]);

  return (
    <>
      <div
        ref={placeRef}
        className={`mb-[1px] flex justify-between hover:bg-red-50 ${
          isClicked ? "bg-red-100" : "bg-white"
        }`}
        onClick={() => onClick?.(place.placeName)}
      >
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
