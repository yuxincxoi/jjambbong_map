/**
 * @yuxincxoi 24.10.02
 * * 지도 생성
 */
export const initMap = () => {
  try {
    if (!window.kakao || !window.kakao.maps) {
      throw new Error("Kakao Maps API가 로드되지 않았습니다.");
    }

    // 지도 옵션
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 좌표 : 서울
      level: 3, // 지도 확대 레벨
    };

    const container = document.getElementById("map");

    if (!container) {
      throw new Error("지도를 삽입할 HTML 요소를 찾을 수 없습니다.");
    }

    // 지도 생성
    const map = new window.kakao.maps.Map(container, options);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`지도 초기화 중 오류 발생: ${error.message}`);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
};
