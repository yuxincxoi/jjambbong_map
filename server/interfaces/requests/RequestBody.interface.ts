import { ILikePlace } from "../../../db/interfaces/LikePlace.interface";

export interface RequestBody {
  name?: string;
  password?: string;
  likedPlaces?: ILikePlace;
}
