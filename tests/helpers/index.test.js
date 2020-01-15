import jwt from "jsonwebtoken";
import { chai, expect } from "../init";

import * as helpers from "../../src/helpers";

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
