import { chai } from "../init";

import { loginUser } from "../../src/authentication/authentication-controller";
import * as helpers from "../../src/helpers";

chai.spy.on(helpers, "createToken", () => "token");

let req = {};
let res = {
  status: () => {
    return {
      send: () => {}
    };
  },
  send: chai.spy()
};
let next = () => {};

describe("AurhController", () => {
  describe("LoginUser", () => {
    beforeEach(() => {});
    afterEach(() => {
      chai.spy.restore(helpers.createToken);
    });
    it("should successfully login user", async () => {
      req.body = { username: "username", password: "password" };
      await loginUser(req, res, next);
      chai.expect(res.send).to.be.called();
      chai.expect(helpers.createToken).to.have.been.called();
    });

    it("should throw error if it occurs during login", async () => {
      chai.spy.on(helpers, "createToken", () =>
        Promise.reject(Error("Something went wrong"))
      );
      chai.spy.on(helpers, "sendErrorResponse", () => {});
      await loginUser(req, res, next);
      chai.expect(helpers.sendErrorResponse).to.have.been.called();
    });
  });
});
