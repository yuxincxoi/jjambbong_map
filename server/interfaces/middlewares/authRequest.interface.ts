import { Request } from "express";
import { RequestBody } from "../requests/RequestBody.interface";

export interface AuthenticatedRequest
  extends Request<{}, {}, RequestBody, {}, {}> {
  userId?: string;
}
