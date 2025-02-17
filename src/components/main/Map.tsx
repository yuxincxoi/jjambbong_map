import { useEffect } from "react";
import { loadMap } from "../../modules/map/loadMap";

interface MapProps {
  isNavVisible: boolean;
}

const Map: React.FC<MapProps> = ({ isNavVisible }) => {
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const maps = await loadMap();
      } catch (error) {
        console.error("Map initialization failed:", error);
      }
    };

    initializeMap();
  }, []);

  return (
    <div
      id="map"
      className={`w-full lg:h-full absolute z-0 ${
        isNavVisible ? "h-[calc(100vh-400px)]" : "h-[calc(100vh-24px)]"
      }`}
    />
  );
};

export default Map;
