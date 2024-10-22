import { useEffect, useState } from "react";
import { initMap } from "../modules/map/initMap";

const Map = () => {
  let [map, setMap] = useState();

  useEffect(() => {
    const loadMap = async () => {
      map = await new Promise<typeof window.kakao.maps>((resolve, reject) => {
        if (window.kakao && window.kakao.maps) {
          resolve(window.kakao.maps);
          return;
        }

        const mapScript = document.createElement("script");

        // todo : API url 환경변수 설정
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;

        // 지도 로드된 후 생성
        mapScript.onload = () => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              initMap();
              resolve(window.kakao.maps);
            });
          } else {
            reject(new Error("Kakao Maps API가 로드되지 않았습니다."));
          }
        };

        document.head.appendChild(mapScript);
      });
    };

    loadMap();
  }, []);

  return (
    <>
      <h1>Map</h1>
    </>
  );
};

export default Map;
