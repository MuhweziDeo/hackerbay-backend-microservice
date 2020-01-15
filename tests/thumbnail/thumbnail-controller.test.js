import { chai, expect } from "../init";
import createThumbnail from "../../src/thumbnail/thumbnail-controller";
import * as helpers from "../../src/helpers";

let req = {
  body: {}
};
let res = {
  status: chai.spy(() => {
    return {
      send: chai.spy()
    };
  })
};

describe("Create Thumbnail", () => {
  it("should generate thumbnial", async () => {
    chai.spy.on(helpers, "generateThumbnail", () => "image");
    req.body = {
      url: "dummyImageUrl"
    };

    await createThumbnail(req, res);
    expect(helpers.generateThumbnail).to.have.been.called();
    expect(res.status)
      .to.have.been.called()
      .with(201);
  });

  it("should send error response incase promise is rejected", async () => {
    chai.spy.restore(helpers.generateThumbnail);
    chai.spy.on(helpers, "sendErrorResponse");
    chai.spy.on(helpers, "generateThumbnail", () =>
      Promise.reject(Error("Unknown Error"))
    );
    await createThumbnail(req, res);
    expect(helpers.sendErrorResponse).to.have.been.called();
  });
});
