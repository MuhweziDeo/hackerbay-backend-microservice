import jwt from "jsonwebtoken";
import { chai, expect } from "../init";

import * as helpers from "../../src/helpers";
const image =
  "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

describe("createToken", () => {
  it("should sign token", async () => {
    chai.spy.on(jwt, "sign");
    await helpers.createToken({ username: "deo" }, {});
    expect(jwt.sign).to.have.been.called();
  });
});

describe("sendErrorResponse", () => {
  it("should send error response", () => {
    const res = {
      status: chai.spy(() => {
        return {
          send: () => {}
        };
      })
    };

    helpers.sendErrorResponse(res, Error("error"));
    expect(res.status)
      .to.have.been.called()
      .with(500);
  });
});

describe("decodeToken", () => {
  it("should decode token", async () => {
    chai.spy.restore(helpers.createToken);
    const token = await helpers.createToken({ username: "username" });
    chai.spy.on(jwt, "verify");
    await helpers.decodeToken(token);
    chai.expect(jwt.verify).to.have.been.called();
  });
});

describe("Generate thumbnail", () => {
  it("should generate thumbnail successfully", async () => {
    const path = await helpers.generateThumbnail(image);
    chai.expect(path).to.contain("thumbnail.jpeg");
  });
});
