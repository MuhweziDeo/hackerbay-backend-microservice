import jsonpatch from "json-patch";

/**
 * @description patches document
 * @param {Request} req
 * @param {Response} res
 * @returns {Response} 200, message
 */
export const patchDocument = (req, res) => {
  const {
    body: { document, patch }
  } = req;

  const patchedDocument = jsonpatch.apply(document, patch);

  return res.status(201).send({
    patch: patchedDocument,
    message: "successfully patched document"
  });
};

export default patchDocument;
