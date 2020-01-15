import { chai, expect } from "../init";
import { patchDocument } from "../../src/json-patch/patch-controller";

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

describe("json-patch", () => {
  it("should patch document", () => {
    req.body = {
      document: { foo: "bar" },
      patch: [{ op: "add", path: "/foo", value: "foo" }]
    };
    patchDocument(req, res);
    expect(res.status)
      .to.has.been.called()
      .with(201);
  });
});
