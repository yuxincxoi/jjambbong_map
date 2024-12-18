import Place from "../Place.interface";

export default interface EachPlaceProps {
  place: Place;
  onLikeToggle: (place: Place, isHeartOn: boolean) => void;
}
