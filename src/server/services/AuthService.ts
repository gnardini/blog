import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config";
import { getDatabase } from "../db/db";

export const AuthService = {
  createUserAuthToken(userId: number) {
    const token = jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: "99999d", // TODO: should expire and have a way to send new token
    });
    return token;
  },

  async verifyAuthToken(authToken: string) {
    const payload = await AuthService.parseAuthToken(authToken);
    if (!payload.userId) {
      throw new Error("Invalid token");
    }
    const db = await getDatabase();
    return await db("users").where({ id: payload.userId }).first();
  },

  async parseAuthToken(authToken: string) {
    return new Promise<any>((resolve, reject) => {
      jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
        if (err || !decoded) {
          reject();
        } else {
          resolve(decoded as jwt.JwtPayload);
        }
      });
    });
  },
};
