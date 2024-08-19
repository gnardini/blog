import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { User } from "../types/user";
import { AuthService } from "./services/AuthService";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiHandlerOptions<T, Authenticate extends boolean = false> {
  method: HttpMethod;
  schema: z.ZodSchema<T>;
  handler: (
    data: T,
    context: {
      req: NextApiRequest;
      res: NextApiResponse;
      user: Authenticate extends true ? User : User | null;
    }
  ) => Promise<any>;
  requiresAuth?: Authenticate;
}

export class ApiError extends Error {
  isApiError = true;
  constructor(readonly statusCode: number, message: string) {
    super(message);
  }
}

export function createApiHandler<T, Authenticate extends boolean = false>({
  method,
  schema,
  handler,
  requiresAuth,
}: ApiHandlerOptions<T, Authenticate>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== method) {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
      const data = schema.parse(
        ["GET", "DELETE"].includes(method) ? req.query : req.body
      );
      let user: User | null = null;
      const authHeader = req.headers.authorization;
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.substring(7);
        const authenticatedUser = await AuthService.verifyAuthToken(token);
        if (authenticatedUser) {
          user = authenticatedUser;
        }
      }

      if (requiresAuth && !user) {
        throw new ApiError(403, "User not authenticated");
      }

      const result = await handler(data, { req, res, user: user as any });

      if (result === undefined) {
        return res.status(204).end();
      } else if (typeof result === "object") {
        if (result.redirect) {
          return res.redirect(302, result.redirect);
        }
        return res.status(200).json(result);
      } else {
        return res.status(200).send(result);
      }
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode ?? 400)
          .json({ error: error.message });
      }
      console.error("Error in API handler:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
