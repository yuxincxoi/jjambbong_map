import jwt from "jsonwebtoken";

export const decodeToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || "defaultSecret") as {
      id: string;
    };
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
