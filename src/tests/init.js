import chai from "chai";
import chaiSpy from "chai-spies";
import chiaPromise from "chai-as-promised";

const { assert } = chai;
const { expect } = chai;

chai.use(chiaPromise);
chai.use(chaiSpy);
export { chai, expect, assert };
