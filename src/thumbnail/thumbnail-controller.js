import { generateThumbnail, sendErrorResponse } from "../helpers";

export const createThumbnail = async (req, res) => {
  const {
    body: { url }
  } = req;
  try {
    const image = await generateThumbnail(url);
    return res.status(201).send({
      message: "Successfully generated thumbnail",
      image
    });
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

export default createThumbnail;
