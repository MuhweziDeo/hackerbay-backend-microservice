import jwt from "jsonwebtoken";
import { secretKey } from "../config";

/**
 * @param {object} payload
 * @param {object} options
 * @returns {token}
 */
export const createToken = async (payload, options) => {
  const token = await jwt.sign(payload, secretKey, { ...options });
  return token;
};

/**
 * @param {Response} res
 * @param {Error} error
 * @returns {Response}
 */
export const sendErrorResponse = (res, error) =>
  res.status(500).send({
    message: error.message || "Internal Server Error",
    success: false
  });
