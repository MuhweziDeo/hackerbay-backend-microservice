import jwt from "jsonwebtoken";
import { secretKey } from "../config";

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
