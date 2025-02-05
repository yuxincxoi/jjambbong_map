import Place from "../Place.interface";

export default interface EachPlaceProps {
  place: Place;
  isClicked: boolean;
  onLikeToggle: (place: Place, isHeartOn: boolean) => void;
}
