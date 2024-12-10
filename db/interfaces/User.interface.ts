import { ILikePlace } from "./LikePlace.interface";

export interface IUser extends ILikePlace {
  name: string;
  id: string;
  password: string;
  likePlace: ILikePlace[];
}
