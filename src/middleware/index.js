import { decodeToken, sendErrorResponse } from "../helpers";

/**
 * @description checks if user is authenticated
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {NextFunction} next
 * @returns {Response} Response incase of failed authentication
 */
export const isAuthenticated = async (req, res, next) => {
  const {
    headers: { authorization }
  } = req;

  if (!authorization) {
    return res.status(401).send({
      message: "Access Denied",
      success: false
    });
  }
  const [prefix, token] = authorization.split(" ");

  if (prefix !== "Bearer") {
    return res.status(400).send({
      message: "Missing Bearer Perfix"
    });
  }
  try {
    const user = await decodeToken(token);
    req.user = user;
    return next();
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};
