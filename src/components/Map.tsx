import { useEffect } from "react";
import { loadMap } from "../modules/map/loadMap";

const Map = () => {
  useEffect(() => {
    loadMap().catch((error) => {
      console.error("지도 로드 중 오류 발생:", error);
    });
  }, []);

  return (
    <div>
      <div
        id="map"
        className="bg-black w-[70%] h-[600px] rounded-3xl mx-auto"
      ></div>
    </div>
  );
};

export default Map;
