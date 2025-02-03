export interface AuthenticatedRequest extends Request {
  userId?: string;
  cookies: { token?: string };
}
