import { loadMap } from "./loadMap";
import Place from "../../interfaces/components/main/placeListTable/Place.interface";

export const markersMap = new Map();
export const infoWindowsMap = new Map();
export let currentMap: kakao.maps.Map;

// 상태를 초기화하는 콜백을 저장할 변수
let resetClickedState: (() => void) | null;

export const setResetClickedState = (callback: () => void) => {
  resetClickedState = callback;
};

export const searchPlace = async (searchValue: string) => {
  try {
    const kakaoMaps = await loadMap();
    // 지도 설정
    currentMap = new kakaoMaps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: new kakaoMaps.LatLng(37.5665, 126.978), // 좌표 : 서울
        level: 3, // 지도 확대 레벨
      }
    );

    // 마커, 인포윈도우 초기화
    markersMap.forEach((marker) => marker.setMap(null));
    infoWindowsMap.forEach((infoWindow) => infoWindow.close());
    markersMap.clear();
    infoWindowsMap.clear();

    const places = new kakaoMaps.services.Places();

    // 지도 표시 범위 관리하는 객체 생성
    const bounds = new kakaoMaps.LatLngBounds();

    return new Promise<Place[]>((resolve, reject) => {
      // 검색어로 장소 검색
      places.keywordSearch(searchValue, (result, status) => {
        const formattedResult: Place[] = result.map((place) => ({
          placeName: place.place_name,
          address: place.address_name,
        }));

        if (status === kakaoMaps.services.Status.OK) {
          result.forEach((place) => {
            // 장소의 좌표 생성
            const coords = new kakaoMaps.LatLng(
              Number(place.y),
              Number(place.x)
            );
            // 장소에 마커 생성
            const marker = new kakaoMaps.Marker({
              map: currentMap, // 마커를 표시할 지도
              position: coords, // 마커의 좌표
              clickable: true, // 마커를 클릭 시 지도의 클릭이벤트 발생하지 않도록 설정
            });

            // 인포윈도우 내용 - 장소명, 장소 카테고리, 주소
            const iwContent = `
            <div class="m-2 px-1 w-48">
              <div class="text-lg font-semibold">${place.place_name}</div>
              <div class="text-sm">${place.address_name}</div>
            </div>
          `;

            // 인포윈도우 생성
            const InfoWindow = new kakaoMaps.InfoWindow({
              content: iwContent,
            });

            // 마커, 인포윈도우 저장
            markersMap.set(place.place_name, marker);
            infoWindowsMap.set(place.place_name, InfoWindow);

            kakaoMaps.event.addListener(marker, "mouseover", () => {
              InfoWindow.open(currentMap, marker);
            });
            kakaoMaps.event.addListener(marker, "mouseout", () => {
              InfoWindow.close();
            });

            // 장소를 지도에 표시하도록 범위 확장
            bounds.extend(coords);
          });
          // 지도 표시 범위 재설정
          currentMap.setBounds(bounds);

          // 지도 클릭 시 모든 열린 인포윈도우를 닫기
          kakaoMaps.event.addListener(currentMap, "click", () => {
            infoWindowsMap.forEach((infoWindow) => {
              infoWindow.close();
            });

            if (resetClickedState) {
              resetClickedState(); // isClicked 상태 초기화
            }
          });

          resolve(formattedResult);
        } else {
          reject("검색 결과가 없습니다.");
        }
      });
    });
  } catch (error) {
    console.error("맵 로딩 실패:", error);
  }
};
