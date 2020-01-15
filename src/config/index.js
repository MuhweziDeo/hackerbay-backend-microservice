import dotenv from "dotenv";
import path from "path";

dotenv.config();
const downloadPath = path.join(__dirname, "../uploadFolder/download");
const thumbnailsPath = path.join(__dirname, "../uploadFolder/thumbnails");

export const apiPrefix = process.env.API_PREFIX || "/api/v1";
export const port = process.env.PORT || 5000;
export const secretKey =
  process.env.SECRET_KEY || "defaultauthenticationdonotuseinproduction";
export const downloadFolder = process.env.DOWNLOAD_FOLDER || downloadPath;
export const thumbNailFolder = process.env.THUMBNAIL_FOLDER || thumbnailsPath;
