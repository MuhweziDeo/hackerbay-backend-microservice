import dotenv from "dotenv";

dotenv.config();

export const apiPrefix = process.env.API_PREFIX || "/api/v1";
export const port = process.env.PORT || 5000;
