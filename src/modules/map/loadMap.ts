import { initMap } from "./initMap";

const API_KEY = process.env.REACT_APP_API_KEY;

export const loadMap = () => {
  return new Promise<typeof window.kakao.maps>((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao.maps);
      return;
    }

    const mapScript = document.createElement("script");

    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false&libraries=services,clusterer,drawing`;
    mapScript.async = true;

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
