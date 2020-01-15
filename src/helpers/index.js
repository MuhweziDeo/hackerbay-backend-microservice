import jwt from "jsonwebtoken";
import sharp from "sharp";
import download from "image-downloader";
import { secretKey, downloadFolder, thumbNailFolder } from "../config";

/**
@description creates access token
* @param {object} payload
 * @param {object} options
 * @returns {token}
 */
export const createToken = async (payload, options) => {
  const token = await jwt.sign(payload, secretKey, { ...options });
  return token;
};

/**
 * @description decodes token
 * @param {string} token
 * @returns {object} decoded payload
 */
export const decodeToken = async token => {
  const decoded = await jwt.verify(token, secretKey);
  return decoded;
};

/**
 * @description sends error response
 * @param {Response} res
 * @param {Error} error
 * @returns {Response}
 */
export const sendErrorResponse = (res, error) =>
  res.status(500).send({
    message: error.message || "Internal Server Error",
    success: false
  });

export const generateThumbnail = async url => {
  try {
    const file = await download.image({ url, dest: downloadFolder });
    const fileExt = file.filename.split(".")[1];
    const path = `${thumbNailFolder}/${Math.floor(
      Math.random() * 900000000
    )}-thumbnail.${fileExt}`;
    sharp(file.filename)
      .resize(50, 50)
      .toFile(path);
    return path;
  } catch (error) {
    return Promise.reject(error);
  }
};
