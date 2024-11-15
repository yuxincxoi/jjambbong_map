import EachPlaceProps from "../../../../interfaces/components/main/placeListTable/eachPlace/EachPlace.interface";

const EachPlace: React.FC<EachPlaceProps> = ({ place }) => {
  const heartFull = "url('./img/fullHeart.png')";
  const heartEmpty = "url('./img/emptyHeart.png')";

  let [isHeartOn, setIsHeartOn] = useState(false);
  const heart = document.getElementById("heart");

  heart?.addEventListener("click", () => {
    if (isHeartOn) {
      setIsHeartOn(false);
      console.log(isHeartOn);
    } else {
      setIsHeartOn(true);
      console.log(isHeartOn);
    }
  });

  useEffect(() => {
    if (heart && isHeartOn) {
      heart.style.backgroundImage = heartFull;
    } else if (heart && !isHeartOn) {
      heart.style.backgroundImage = heartEmpty;
    }
  }, [isHeartOn]);

  return (
    <>
      <div className="bg-white w-[99%] m-1 flex justify-between">
        <div className="px-5 py-2">
          <div className="text-xl font-semibold">{place.placeName}</div>
          <div>{place.address}</div>
        </div>
        <div className="w-14 h-14 mt-1 bg-main-color"></div>
      </div>
    </>
  );
};

export default EachPlace;
