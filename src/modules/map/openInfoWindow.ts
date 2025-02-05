import { markersMap, infoWindowsMap, currentMap } from "./searchPlace";

export const openInfoWindow = (placeName: string) => {
  const marker = markersMap.get(placeName);
  const infoWindow = infoWindowsMap.get(placeName);

  if (marker && infoWindow && currentMap) {
    // 다른 인포윈도우들을 모두 닫기
    infoWindowsMap.forEach((iw) => iw.close());
    // 선택된 장소의 인포윈도우 열기
    infoWindow.open(currentMap, marker);
    // 부드러운 이동
    currentMap.panTo(marker.getPosition());
  }
};
