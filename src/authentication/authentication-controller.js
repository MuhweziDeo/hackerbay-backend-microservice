import { createToken, sendErrorResponse } from "../helpers";

/**
 * @param {Request} req
 * @param {Response} res
 * @returns {200} or Error
 * @returns {token}
 */
export const loginUser = async (req, res) => {
  const {
    body: { username }
  } = req;
  try {
    const token = await createToken({ username });
    return res.send({
      message: "Login Successful",
      success: true,
      token,
      user: { username }
    });
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export default loginUser;
